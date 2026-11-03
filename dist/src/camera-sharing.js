import { React } from './vendor.js';

// Pairing is exchanged by the users, never uploaded or stored by the app.
export function decodeCameraPairing(text, type) {
  if (text.length > 100000) throw new Error('Código demasiado largo.');
  let value;
  try { value = JSON.parse(text); } catch { throw new Error('Pega el código completo.'); }
  if (value.version !== 1 || value.type !== type || typeof value.sdp !== 'string' ||
      !value.sdp.startsWith('v=0') || value.sdp.length > 90000) {
    throw new Error('Este código no corresponde a este paso.');
  }
  return { type: value.type, sdp: value.sdp };
}

export function waitCameraIce(peer, signal) {
  return new Promise((resolve, reject) => {
    let timer;
    const cleanup = () => {
      clearTimeout(timer);
      peer.removeEventListener('icegatheringstatechange', check);
      signal.removeEventListener('abort', aborted);
    };
    const aborted = () => { cleanup(); reject(new Error('Conexión detenida.')); };
    const check = () => { if (peer.iceGatheringState === 'complete') { cleanup(); resolve(); } };
    peer.addEventListener('icegatheringstatechange', check);
    signal.addEventListener('abort', aborted, { once: true });
    timer = setTimeout(() => { cleanup(); reject(new Error('No se pudo preparar la conexión. Inténtalo de nuevo.')); }, 20000);
    if (signal.aborted) aborted(); else check();
  });
}

export function CameraSharing() {
  const h = React.createElement;
  const [mode, setMode] = React.useState(null);
  const [accepted, setAccepted] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [error, setError] = React.useState('');
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [applied, setApplied] = React.useState(false);
  const taps = React.useRef({ count: 0, last: 0 });
  const session = React.useRef(null);
  const video = React.useRef(null);
  const liveStream = React.useRef(null);
  const operation = React.useRef(0);

  const dispose = React.useCallback(() => {
    const current = session.current;
    session.current = null;
    current?.controller.abort();
    current?.stream?.getTracks().forEach(track => track.stop());
    if (current?.peer) { current.peer.onconnectionstatechange = null; current.peer.ontrack = null; current.peer.close(); }
    liveStream.current = null;
    if (video.current) video.current.srcObject = null;
  }, []);
  const stop = React.useCallback(() => {
    operation.current++;
    dispose(); setActive(false); setBusy(false); setOutput(''); setInput('');
    setApplied(false); setStatus('Transmisión detenida.');
  }, [dispose]);
  React.useEffect(() => {
    const leave = () => dispose();
    window.addEventListener('pagehide', leave);
    const visibility = () => { if (document.visibilityState === 'hidden') stop(); };
    document.addEventListener('visibilitychange', visibility);
    return () => { dispose(); window.removeEventListener('pagehide', leave); document.removeEventListener('visibilitychange', visibility); };
  }, [dispose, stop]);

  function open(next) {
    stop(); setAccepted(false); setError(''); setStatus(''); setMode(next);
  }
  function attach(stream) {
    liveStream.current = stream;
    if (video.current) { video.current.srcObject = stream; video.current.play().catch(() => {}); }
  }
  async function createSession(role) {
    if (!window.isSecureContext || !window.RTCPeerConnection) throw new Error('Abre esta función mediante HTTPS en un navegador compatible.');
    dispose();
    const current = { controller: new AbortController(), peer: null, stream: null };
    session.current = current;
    const peer = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
    current.peer = peer;
    peer.onconnectionstatechange = () => {
      if (session.current !== current) return;
      const state = peer.connectionState;
      setStatus(state === 'connected' ? (role === 'send' ? 'Cámara compartida · un visor conectado' : 'Video en vivo conectado') : 'Conectando…');
      if (state === 'failed' || state === 'disconnected' || state === 'closed') {
        stop(); setError('Conexión terminada. Vuelve a emparejar los dispositivos. Algunas redes requieren TURN.');
      }
    };
    peer.ontrack = event => {
      if (session.current === current) attach(event.streams[0] || new MediaStream([event.track]));
    };
    if (role === 'send') {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error('Este navegador no permite acceder a la cámara.');
      const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: 'environment' } } });
      if (session.current !== current) { stream.getTracks().forEach(t => t.stop()); throw new Error('Transmisión cancelada.'); }
      current.stream = stream;
      stream.getTracks().forEach(track => {
        peer.addTrack(track, stream);
        track.addEventListener('ended', () => { if (session.current === current) stop(); }, { once: true });
      });
      attach(stream); setActive(true);
    }
    return current;
  }
  async function perform(action) {
    const token = ++operation.current;
    setBusy(true); setError('');
    try { await action(); }
    catch (err) { if (operation.current === token) { stop(); setError(err.name === 'NotAllowedError' ? 'No se concedió permiso para compartir la cámara.' : err.message); } }
    finally { if (operation.current === token) setBusy(false); }
  }
  function start() {
    if (!accepted) return;
    perform(async () => {
      const current = await createSession('send');
      await current.peer.setLocalDescription(await current.peer.createOffer());
      await waitCameraIce(current.peer, current.controller.signal);
      if (session.current !== current) return;
      setOutput(JSON.stringify({ version: 1, ...current.peer.localDescription.toJSON() }));
      setStatus('Cámara activa · esperando al visor autorizado');
    });
  }
  function receive() {
    perform(async () => {
      const offer = decodeCameraPairing(input, 'offer');
      const current = await createSession('view');
      await current.peer.setRemoteDescription(offer);
      await current.peer.setLocalDescription(await current.peer.createAnswer());
      await waitCameraIce(current.peer, current.controller.signal);
      if (session.current !== current) return;
      setOutput(JSON.stringify({ version: 1, ...current.peer.localDescription.toJSON() }));
      setActive(true); setStatus('Devuelve la respuesta al teléfono que comparte.');
    });
  }
  function connect() {
    perform(async () => {
      const answer = decodeCameraPairing(input, 'answer');
      const current = session.current;
      if (!current) throw new Error('Primero inicia una transmisión.');
      await current.peer.setRemoteDescription(answer);
      if (session.current === current) { setApplied(true); setStatus('Conectando con el visor autorizado…'); }
    });
  }
  const button = (label, onClick, disabled = false) => h('button', { type: 'button', onClick, disabled, className: 'rounded-xl border bg-card p-3 font-bold', style: { opacity: disabled ? .5 : 1 } }, label);
  const field = (label, value, onChange, readOnly = false) => h('label', { className: 'block space-y-2' }, label,
    h('textarea', { 'aria-label': label, value, readOnly, onChange: e => onChange?.(e.target.value), rows: 4, maxLength: 100000,
      className: 'w-full rounded-xl border bg-background p-3 text-foreground', style: { overflowWrap: 'anywhere' } }));
  return h('section', { className: 'space-y-4 rounded-2xl border bg-card p-5 shadow-card' },
    h('button', { type: 'button', className: 'font-bold', onClick: () => {
      const now = Date.now(); const previous = taps.current;
      const count = now - previous.last < 1500 ? previous.count + 1 : 1;
      taps.current = { count, last: now };
      if (count === 7) { taps.current.count = 0; open('view'); }
    } }, 'Conexión de cámara'),
    h('p', { className: 'text-sm text-muted-foreground' }, 'Comparte video voluntariamente con un visor que tú autorices. Sin audio ni grabación en la app.'),
    !mode && button('Compartir mi cámara', () => open('send')),
    mode && h('div', { className: 'space-y-4' },
      h('h3', { className: 'text-xl font-bold' }, mode === 'send' ? 'Compartir cámara con el administrador' : 'Visor de cámara autorizada'),
      h('p', null, mode === 'send'
        ? 'El administrador al que entregues el código podrá ver tu cámara en vivo. Verifica su identidad por un medio de confianza antes de intercambiar los códigos. Al salir de Account, ocultar esta página o detener, se corta la transmisión. No se transmite al iniciar sesión.'
        : 'Pide al otro teléfono que elija Compartir mi cámara y acepte. Pega su código, genera una respuesta y devuélvesela. Los 7 toques solo abren este visor: no conceden acceso a cámaras.'),
      h('p', { className: 'text-sm text-muted-foreground' }, 'Mantén ambas páginas visibles: cambia los códigos con un segundo dispositivo o por un medio de confianza. Los códigos contienen datos de conexión; no los publiques. Se utiliza el servicio STUN de Google para conectar; algunas redes necesitan un servicio TURN que esta versión no incluye.'),
      mode === 'send' && !active && !busy && h('label', { className: 'flex gap-3' },
        h('input', { type: 'checkbox', checked: accepted, onChange: e => setAccepted(e.target.checked) }),
        'Acepto compartir video en vivo con el administrador al que entregaré mi código.'),
      mode === 'send' && !active && button(busy ? 'Esperando permiso / preparando…' : 'Iniciar transmisión', start, !accepted || busy),
      (active || busy) && h('div', { role: 'status', style: { background: '#8a1225', color: '#fff', padding: 14, borderRadius: 12, position: 'sticky', top: 0, zIndex: 50 } },
        h('strong', null, mode === 'send' ? '● CÁMARA COMPARTIDA / ACTIVÁNDOSE' : 'Visor activo'),
        h('p', null, status), button('Detener', stop)),
      h('video', { ref: element => { video.current = element; if (element && liveStream.current) element.srcObject = liveStream.current; }, autoPlay: true, playsInline: true, muted: true, controls: true,
        style: { width: '100%', display: active ? 'block' : 'none', maxHeight: 340, background: '#000', borderRadius: 12 } }),
      mode === 'view' && !output && field('Código del teléfono que comparte', input, setInput),
      mode === 'view' && !output && button('Generar respuesta', receive, busy || !input.trim()),
      output && field(mode === 'send' ? '1. Entrega este código al visor autorizado' : '2. Devuelve esta respuesta al teléfono', output, null, true),
      mode === 'send' && output && !applied && field('3. Pega la respuesta del visor autorizado', input, setInput),
      mode === 'send' && output && !applied && button('Conectar con este visor', connect, busy || !input.trim()),
      error && h('p', { role: 'alert', style: { color: '#db2945' } }, error),
      button('Cerrar', () => { stop(); setMode(null); })
    )
  );
}
