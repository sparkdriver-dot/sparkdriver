import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
const source = (await fs.readFile(new URL('../src/camera-live.js', import.meta.url), 'utf8'))
  .replace(/^import .*;\s*/gm, '').replace(/export (?=(const|function)\b)/g, '');
function setup({ sdkFails = false, cameraFails = false, delayedMedia = false } = {}) {
  const records = new Map(), watchers = new Map(), removed = [], tracks = [], timers = new Set(), deadlines = new Set();
  let sdkCalls = 0, mediaCalls = 0, resolveMedia, sequence = 0;
  const identity = { currentUser: null };
  const reference = path => ({ path, key: path.split('/').at(-1) });
  const sdk = {
    db: {}, identity,
    ref: (_, path) => reference(path), child: (ref, path) => reference(ref.path + '/' + path),
    push: ref => reference(ref.path + '/session-' + ++sequence),
    signInAnonymously: async () => { identity.currentUser = { uid: 'sender-1' }; return { user: identity.currentUser }; },
    signInWithEmailAndPassword: async (_, email) => { identity.currentUser = { uid: email === 'owner' ? 'dSZEXWPE6ncu0kzlRMn6RCmm1iU2' : 'outsider' }; return { user: identity.currentUser }; },
    signOut: async () => { identity.currentUser = null; },
    goOnline() {}, serverTimestamp: () => 1000,
    onDisconnect: () => ({ remove: async () => {} }),
    set: async (ref, value) => { records.set(ref.path, value); },
    remove: async ref => { removed.push(ref.path); records.delete(ref.path); },
    onChildAdded: (ref, callback) => { watchers.set(ref.path + ':add', callback); return () => watchers.delete(ref.path + ':add'); },
    onChildChanged: (ref, callback) => { watchers.set(ref.path + ':change', callback); return () => watchers.delete(ref.path + ':change'); },
    onChildRemoved: (ref, callback) => { watchers.set(ref.path + ':remove', callback); return () => watchers.delete(ref.path + ':remove'); },
    onValue: (ref, callback) => { if (ref.path === '.info/connected') callback({ val: () => true }); watchers.set(ref.path, callback); return () => watchers.delete(ref.path); },
    onAuthStateChanged: (_, callback) => { callback(identity.currentUser); return () => {}; }
  };
  const runtime = {
    sdkFor: async () => { sdkCalls++; if (sdkFails) throw Error('Offline'); return sdk; },
    media: async () => {
      mediaCalls++; if (cameraFails) { const err = Error('Denied'); err.name = 'NotAllowedError'; throw err; }
      const stream = { getTracks: () => [track] };
      const track = { stopped: false, stop() { this.stopped = true; }, addEventListener() {} }; tracks.push(track);
      return delayedMedia ? await new Promise(resolve => { resolveMedia = () => resolve(stream); }) : stream;
    },
    makePeer: () => ({ close() {}, addTransceiver() {}, addTrack() {}, createOffer: async () => ({ type: 'offer', sdp: 'v=0' }), createAnswer: async () => ({ type: 'answer', sdp: 'v=0' }),
      setRemoteDescription: async () => {},
      setLocalDescription: async function (desc) { this.localDescription = { toJSON: () => desc }; } }),
    waitIce: async () => {}, now: () => 1000,
    setInterval: callback => { timers.add(callback); return callback; }, clearInterval: callback => timers.delete(callback),
    setTimeout: callback => { deadlines.add(callback); return callback; }, clearTimeout: callback => deadlines.delete(callback)
  };
  const context = vm.createContext({ React: {}, AbortController, Map, Set, Date, Error, Promise, setInterval, clearInterval, setTimeout, clearTimeout, waitCameraIce: () => {}, console });
  vm.runInContext(source + '\nthis.createController = createCameraLiveController; this.signals = { applyCameraSignal, publishCameraSignal };', context);
  return { controller: context.createController(runtime), signals: context.signals, records, watchers, removed, tracks, timers, deadlines, sdk,
    counts: () => ({ sdkCalls, mediaCalls }), finishMedia: () => resolveMedia() };
}
test('Camera feature does not load Firebase or capture without explicit consent', async () => {
  const h = setup(); assert.deepEqual(h.counts(), { sdkCalls: 0, mediaCalls: 0 });
  await assert.rejects(h.controller.startSharing(false), /aceptar/);
  assert.deepEqual(h.counts(), { sdkCalls: 0, mediaCalls: 0 });
});
test('Consented capture publishes only camera metadata and stopping releases resources', async () => {
  const h = setup(); assert.equal(await h.controller.startSharing(true), true);
  assert.equal(h.controller.getState().sharing, true);
  const [room] = [...h.records.keys()]; const record = h.records.get(room);
  assert.equal(record.meta.consentVersion, 1); assert.equal(Object.keys(record).join(), 'meta');
  h.controller.stopSharing(); assert.equal(h.tracks[0].stopped, true);
  assert.equal(h.controller.getState().sharing, false); assert.equal(h.timers.size, 0);
  assert.ok(h.removed.includes(room)); assert.equal(h.watchers.size, 0);
});
test('Cancelling a pending permission request prevents a late stream from publishing', async () => {
  const h = setup({ delayedMedia: true }); const pending = h.controller.startSharing(true);
  h.controller.stopSharing(); h.finishMedia(); await pending;
  assert.equal(h.tracks[0].stopped, true); assert.equal(h.counts().sdkCalls, 0); assert.equal(h.records.size, 0);
});
test('Firebase failure and denied camera leave no active stream', async () => {
  const h = setup({ sdkFails: true }); assert.equal(await h.controller.startSharing(true), false);
  assert.equal(h.tracks[0].stopped, true); assert.equal(h.controller.getState().sharing, false);
  const denied = setup({ cameraFails: true }); assert.equal(await denied.controller.startSharing(true), false);
  assert.equal(denied.counts().sdkCalls, 0); assert.match(denied.controller.getState().error, /permiso/);
});
test('Network loss closes capture and never restarts it automatically', async () => {
  const h = setup(); await h.controller.startSharing(true);
  h.watchers.get('.info/connected')({ val: () => false });
  assert.equal(h.tracks[0].stopped, true); assert.equal(h.controller.getState().sharing, false);
  assert.equal(h.counts().mediaCalls, 1);
});
test('Admin access is separate and rejects every other Firebase identity', async () => {
  const h = setup(); await assert.rejects(h.controller.watchRooms(), /sesión/);
  await assert.rejects(h.controller.loginAdmin('other', 'test'), /permiso/);
  assert.equal(h.sdk.identity.currentUser, null);
  await h.controller.loginAdmin('owner', 'test'); assert.equal(h.controller.getState().admin, true);
  await h.controller.watchRooms(); assert.ok(h.watchers.has('cameraRooms'));
  await h.controller.logoutAdmin(); assert.equal(h.controller.getState().admin, false);
  assert.equal(h.watchers.size, 0); assert.equal(h.counts().mediaCalls, 0);
});
test('Rules deny public access and scope administrator and sender to their intended paths', async () => {
  const { rules } = JSON.parse(await fs.readFile(new URL('../firebase-camera.rules.json', import.meta.url), 'utf8'));
  assert.equal(rules['.read'], false); assert.equal(rules['.write'], false);
  assert.equal(rules.cameraRooms['.read'], "auth != null && auth.uid === 'dSZEXWPE6ncu0kzlRMn6RCmm1iU2'");
  assert.equal(rules.cameraRooms.$sender['.read'], 'auth != null && auth.uid === $sender');
  assert.match(rules.cameraRooms.$sender.$session['.write'], /auth.uid === \$sender/);
  assert.match(rules.cameraRooms.$sender.$session['.write'], /anonymous/);
  assert.equal(rules.cameraRooms.$sender.$session.$other['.validate'], false);
});
test('Viewer does not remain connecting forever if the phone never responds', async () => {
  const h = setup(); await h.controller.loginAdmin('owner', 'test');
  await h.controller.viewRoom({ path: 'cameraRooms/sender/session', updatedAt: 1000 });
  assert.equal(h.controller.getState().viewing, true);
  [...h.deadlines][0]();
  assert.equal(h.controller.getState().viewing, false);
  assert.match(h.controller.getState().viewStatus, /no respondió/);
  assert.equal(h.deadlines.size, 0);
});
test('Viewer distinguishes a received answer from a blocked video connection', async () => {
  const h = setup(); await h.controller.loginAdmin('owner', 'test');
  await h.controller.viewRoom({ path: 'cameraRooms/sender/session', updatedAt: 1000 });
  const answer = [...h.watchers.entries()].find(([path]) => path.endsWith('/answer'))[1];
  await answer({ exists: () => true, val: () => ({ type: 'answer', sdp: 'v=0' }) });
  [...h.deadlines][0]();
  assert.equal(h.controller.getState().viewing, false);
  assert.match(h.controller.getState().viewStatus, /TURN/);
});
test('Background pause releases capture and foreground resumes previously accepted sharing', async () => {
  const h = setup(); await h.controller.startSharing(true);
  h.controller.pauseForBackground();
  assert.equal(h.tracks[0].stopped, true); assert.equal(h.controller.getState().sharing, false);
  assert.equal(await h.controller.resumeAfterBackground(), true);
  assert.equal(h.counts().mediaCalls, 2); assert.equal(h.controller.getState().sharing, true);
  h.controller.stopSharing();
});
test('Manual stop, no previous consent, and session close never restart capture', async () => {
  const h = setup(); h.controller.pauseForBackground();
  assert.equal(await h.controller.resumeAfterBackground(), false); assert.equal(h.counts().mediaCalls, 0);
  await h.controller.startSharing(true); h.controller.pauseForBackground(); h.controller.stopSharing();
  assert.equal(await h.controller.resumeAfterBackground(), false); assert.equal(h.counts().mediaCalls, 1);
  await h.controller.startSharing(true); h.controller.pauseForBackground(); h.controller.close();
  assert.equal(await h.controller.resumeAfterBackground(), false); assert.equal(h.counts().mediaCalls, 2);
});

test('Sender answers a viewer request and exposes a sanitized Firebase failure', async () => {
  const h = setup(); await h.controller.startSharing(true);
  const [path, request] = [...h.watchers.entries()].find(([key]) => key.endsWith(':add'));
  const snapshot = key => ({ key, val: () => ({ offer: { type: 'offer', sdp: 'v=0' } }) });
  request(snapshot('viewer-1'));
  for (let i = 0; i < 20; i++) await Promise.resolve();
  assert.equal(h.records.get(path.replace(':add', '/viewer-1/answer')).type, 'answer');
  h.sdk.set = async () => { const error = Error('private SDP and addresses'); error.code = 'PERMISSION_DENIED'; throw error; };
  request(snapshot('viewer-2'));
  for (let i = 0; i < 20; i++) await Promise.resolve();
  assert.match(h.controller.getState().error, /enviar respuesta a Firebase.*PERMISSION_DENIED/);
  assert.doesNotMatch(h.controller.getState().error, /private SDP/);
  assert.equal(h.controller.getState().sharing, true);
  h.controller.stopSharing();
});

test('A gathering browser sends its offer without waiting for ICE completion', async () => {
  const h = setup(); await h.controller.loginAdmin('owner', 'test');
  await h.controller.viewRoom({ path: 'cameraRooms/sender/session', updatedAt: 1000 });
  assert.ok([...h.records.values()].some(value => value.offer?.type === 'offer'));
  assert.match(h.controller.getState().viewStatus, /Esperando respuesta/);
  h.controller.stopViewing();
});

test('Late ICE candidates are applied once without renegotiating the remote description', async () => {
  const h = setup(), calls = [], candidates = [];
  const peer = { setRemoteDescription: async value => calls.push(value), addIceCandidate: async value => candidates.push(value) };
  const initial = { type: 'offer', sdp: 'v=0\r\nm=video 9 UDP/TLS/RTP/SAVPF 96\r\na=mid:0\r\n' };
  const updated = { ...initial, sdp: initial.sdp + 'a=candidate:test 1 UDP 1 192.0.2.1 1234 typ host\r\na=end-of-candidates\r\n' };
  await Promise.all([h.signals.applyCameraSignal(peer, initial), h.signals.applyCameraSignal(peer, updated), h.signals.applyCameraSignal(peer, updated)]);
  assert.equal(calls.length, 1); assert.equal(candidates.length, 2);
  assert.equal(candidates[0].sdpMid, '0'); assert.equal(candidates[0].sdpMLineIndex, 0);
  assert.equal(candidates[1].candidate, '');
});

test('ICE updates are buffered until initial publication and stop with the connection', async () => {
  const h = setup(), writes = []; let active = true;
  const first = { type: 'answer', sdp: 'first' };
  let description = first;
  const peer = { localDescription: { toJSON: () => description } };
  const signal = h.signals.publishCameraSignal(peer, async value => writes.push(value.sdp), () => active, error => { throw error; });
  description = { ...first, sdp: 'late' }; peer.onicecandidate();
  assert.equal(writes.length, 0);
  signal.start(first); peer.onicecandidate();
  for (let i = 0; i < 10; i++) await Promise.resolve();
  assert.deepEqual(writes, ['late']);
  active = false; description = { ...first, sdp: 'after close' }; peer.onicecandidate();
  signal.stop(); assert.equal(peer.onicecandidate, null);
  for (let i = 0; i < 10; i++) await Promise.resolve();
  assert.deepEqual(writes, ['late']);
});
