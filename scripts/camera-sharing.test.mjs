import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
const source = (await fs.readFile(new URL('../src/camera-sharing.js', import.meta.url), 'utf8'))
  .replace(/^import .*;\s*/m, '').replaceAll('export function ', 'function ');
function harness() {
  let cursor = 0; const values = []; const effects = []; const peers = []; const tracks = [];
  const events = new Map();
  const React = {
    createElement: (type, props, ...children) => ({ type, props: props || {}, children: children.flat(Infinity) }),
    useState: initial => { const i = cursor++; if (!(i in values)) values[i] = initial; return [values[i], value => { values[i] = value; }]; },
    useRef: initial => { const i = cursor++; return values[i] ||= { current: initial }; },
    useCallback: fn => fn, useEffect: fn => { effects.push(fn); }
  };
  class Peer extends EventTarget {
    constructor() { super(); this.iceGatheringState = 'complete'; peers.push(this); }
    addTrack() {}
    async createOffer() { return { type: 'offer', sdp: 'v=0\r\ntest' }; }
    async setLocalDescription(d) { this.localDescription = { ...d, toJSON: () => d }; }
    async setRemoteDescription(d) { this.remoteDescription = d; }
    close() { this.closed = true; }
  }
  const document = { visibilityState: 'visible', addEventListener: (name, fn) => events.set(name, fn), removeEventListener() {} };
  const context = vm.createContext({ React, setTimeout, clearTimeout, AbortController, Date, JSON, Error,
    window: { isSecureContext: true, RTCPeerConnection: Peer, addEventListener() {}, removeEventListener() {} },
    RTCPeerConnection: Peer, document,
    navigator: { mediaDevices: { getUserMedia: async () => {
      const track = { stop() { this.stopped = true; }, addEventListener() {} }; tracks.push(track);
      return { getTracks: () => [track] };
    } } }
  });
  vm.runInContext(source + '\nthis.api = { CameraSharing, decodeCameraPairing, waitCameraIce };', context);
  function render() { cursor = 0; return context.api.CameraSharing(); }
  function nodes(tree) { return [tree, ...tree.children.filter(x => x && typeof x === 'object').flatMap(nodes)]; }
  function button(tree, name) { const b = nodes(tree).find(x => x.type === 'button' && x.children.includes(name)); assert.ok(b, name); return b; }
  return { ...context.api, render, nodes, button, effects, peers, tracks, events, document };
}
test('Pairing accepts the expected step and rejects wrong or oversized codes', () => {
  const h = harness();
  assert.equal(h.decodeCameraPairing(JSON.stringify({ version: 1, type: 'offer', sdp: 'v=0\r\n' }), 'offer').type, 'offer');
  assert.throws(() => h.decodeCameraPairing('{bad', 'offer'));
  assert.throws(() => h.decodeCameraPairing(JSON.stringify({ version: 1, type: 'answer', sdp: 'v=0' }), 'offer'));
  assert.throws(() => h.decodeCameraPairing('x'.repeat(100001), 'offer'));
});
test('No capture before consent; stopping releases tracks and closes the peer', async () => {
  const h = harness(); let tree = h.render();
  h.button(tree, 'Compartir mi cámara').props.onClick(); tree = h.render();
  assert.equal(h.button(tree, 'Iniciar transmisión').props.disabled, true);
  h.button(tree, 'Iniciar transmisión').props.onClick(); await new Promise(r => setImmediate(r));
  assert.equal(h.tracks.length, 0);
  h.nodes(tree).find(x => x.type === 'input').props.onChange({ target: { checked: true } });
  tree = h.render(); h.button(tree, 'Iniciar transmisión').props.onClick();
  await new Promise(r => setImmediate(r)); tree = h.render();
  assert.equal(h.tracks.length, 1); assert.equal(h.peers.length, 1);
  assert.ok(h.nodes(tree).some(x => x.props.role === 'status'));
  h.button(tree, 'Detener').props.onClick();
  assert.equal(h.tracks[0].stopped, true); assert.equal(h.peers[0].closed, true);
});
test('Seven taps open the viewer without requesting the local camera', () => {
  const h = harness(); let tree = h.render(); const b = h.button(tree, 'Conexión de cámara');
  for (let i = 0; i < 6; i++) b.props.onClick();
  assert.ok(!h.nodes(h.render()).some(x => x.children.includes('Visor de cámara autorizada')));
  b.props.onClick(); tree = h.render();
  assert.ok(h.nodes(tree).some(x => x.children.includes('Visor de cámara autorizada')));
  assert.equal(h.tracks.length, 0);
});
test('Hiding the page stops a previously consented transmission', async () => {
  const h = harness(); let tree = h.render(); h.effects[0]();
  h.button(tree, 'Compartir mi cámara').props.onClick(); tree = h.render();
  h.nodes(tree).find(x => x.type === 'input').props.onChange({ target: { checked: true } });
  h.button(h.render(), 'Iniciar transmisión').props.onClick(); await new Promise(r => setImmediate(r));
  h.document.visibilityState = 'hidden'; h.events.get('visibilitychange')();
  assert.equal(h.tracks[0].stopped, true); assert.equal(h.peers[0].closed, true);
});
