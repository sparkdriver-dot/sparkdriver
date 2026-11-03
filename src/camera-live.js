import { React } from './vendor.js';

// Exchange descriptions immediately; forward later ICE candidates through the
// same protected SDP fields. No additional Firebase paths or permissions.
function cameraCandidates(sdp) {
  const result = [];
  let index = -1, mid = null;
  for (const section of sdp.split(/(?=^m=)/m)) {
    if (!section.startsWith('m=')) continue;
    index++; mid = section.match(/^a=mid:([^\r\n]+)/m)?.[1] ?? null;
    for (const line of section.split(/\r?\n/)) {
      if (line.startsWith('a=candidate:') || line === 'a=end-of-candidates')
        result.push({ candidate: line === 'a=end-of-candidates' ? '' : line.slice(2), sdpMid: mid, sdpMLineIndex: index });
    }
  }
  return result;
}
const cameraRemoteSignals = new WeakMap();
export function applyCameraSignal(peer, description) {
  if (!['offer', 'answer'].includes(description?.type) || typeof description.sdp !== 'string' || description.sdp.length > 90000)
    return Promise.reject(new Error('Descripción de cámara inválida.'));
  let state = cameraRemoteSignals.get(peer);
  if (!state) { state = { queue: Promise.resolve(), initialized: false, seen: new Set() }; cameraRemoteSignals.set(peer, state); }
  state.queue = state.queue.then(async () => {
    const candidates = cameraCandidates(description.sdp);
    if (!state.initialized) {
      await peer.setRemoteDescription(description);
      state.initialized = true;
      candidates.forEach(candidate => state.seen.add(JSON.stringify(candidate)));
    } else {
      for (const candidate of candidates) {
        const key = JSON.stringify(candidate);
        if (!state.seen.has(key)) { await peer.addIceCandidate(candidate); state.seen.add(key); }
      }
    }
  });
  return state.queue;
}
export function publishCameraSignal(peer, write, active, failed) {
  let enabled = false, stopped = false, last = '', queue = Promise.resolve();
  const flush = () => {
    if (!enabled || stopped || !active()) return;
    const description = peer.localDescription?.toJSON();
    if (!description || description.sdp === last) return;
    last = description.sdp;
    queue = queue.then(() => { if (!stopped && active()) return write(description); }).catch(error => { if (!stopped && active()) failed(error); });
  };
  peer.onicecandidate = flush;
  return {
    start: initial => { last = initial.sdp; enabled = true; flush(); },
    stop: () => { stopped = true; peer.onicecandidate = null; }
  };
}

export const CAMERA_ADMIN_UID = 'dSZEXWPE6ncu0kzlRMn6RCmm1iU2';
export const CAMERA_CONSENT = 'Al aceptar, compartirás tu cámara y micrófono en vivo con el administrador. Es opcional y puedes detenerlo en Account.';
const cameraFirebaseConfig = {
  apiKey: 'AIzaSyAUY5BCJ3B-y-NHXhZ3O0mWbOW6jum_sRk',
  authDomain: 'spark-driver-live.firebaseapp.com',
  projectId: 'spark-driver-live',
  databaseURL: 'https://spark-driver-live-default-rtdb.firebaseio.com',
  appId: '1:855865529266:web:0c72de934d9c9a41990aab'
};
const cameraSDKs = new Map();
async function loadCameraSDK(role) {
  if (!cameraSDKs.has(role)) {
    const promise = (async () => {
      const [app, auth, database] = await Promise.all([
        import('https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js'),
        import('https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js'),
        import('https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js')
      ]);
      const instance = app.initializeApp(cameraFirebaseConfig, 'camera-' + role);
      const identity = auth.getAuth(instance);
      await auth.setPersistence(identity, auth.inMemoryPersistence);
      return { ...auth, ...database, identity, db: database.getDatabase(instance) };
    })();
    cameraSDKs.set(role, promise);
    promise.catch(() => cameraSDKs.delete(role));
  }
  return cameraSDKs.get(role);
}

export function createCameraLiveController(runtime = {}) {
  const sdkFor = runtime.sdkFor || loadCameraSDK;
  const media = runtime.media || (() => navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15, max: 20 } }, audio: { echoCancellation: true, noiseSuppression: true } }));
  const makePeer = runtime.makePeer || (() => new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }));
  const now = runtime.now || Date.now;
  const interval = runtime.setInterval || setInterval;
  const clear = runtime.clearInterval || clearInterval;
  const deadline = runtime.setTimeout || setTimeout;
  const clearDeadline = runtime.clearTimeout || clearTimeout;
  let state = { sharing: false, starting: false, error: '', viewers: 0, admin: false, rooms: [], viewing: false, remoteStream: null, viewStatus: '' };
  const listeners = new Set();
  let sender = null, receiver = null, adminSDK = null, listOff = null;
  let generation = 0, viewGeneration = 0, adminGeneration = 0;
  let resumeOnReturn = false;
  const patch = values => { state = { ...state, ...values }; listeners.forEach(fn => fn()); };
  const release = current => {
    if (!current) return;
    current.abort.abort();
    current.cleanups.forEach(fn => { try { fn(); } catch {} });
    current.stream?.getTracks().forEach(track => track.stop());
    current.peers.forEach(peer => { peer.onconnectionstatechange = null; peer.ontrack = null; peer.close(); });
    if (current.ref) current.sdk.remove(current.ref).catch(() => {});
  };
  function stopSharing(error = '') {
    resumeOnReturn = false;
    generation++;
    const current = sender; sender = null; release(current);
    patch({ sharing: false, starting: false, viewers: 0, error });
  }
  function pauseForBackground() {
    const wasSharing = state.sharing || resumeOnReturn;
    stopSharing(); stopViewing();
    resumeOnReturn = wasSharing;
  }
  async function resumeAfterBackground() {
    if (!resumeOnReturn) return false;
    resumeOnReturn = false;
    return startSharing(true);
  }
  function stopViewing() {
    viewGeneration++;
    const current = receiver; receiver = null; release(current);
    patch({ viewing: false, remoteStream: null, viewStatus: '' });
  }
  async function startSharing(consented) {
    if (!consented) throw new Error('Debes aceptar antes de compartir la cámara.');
    if (sender || state.starting) return;
    const token = ++generation;
    const current = { abort: new AbortController(), cleanups: [], peers: new Map(), stream: null, ref: null, sdk: null };
    sender = current;
    patch({ starting: true, error: '' });
    const ensure = () => { if (sender !== current || token !== generation) throw new Error('Transmisión cancelada.'); };
    try {
      const stream = await media();
      if (sender !== current) { stream.getTracks().forEach(t => t.stop()); return false; }
      current.stream = stream;
      stream.getTracks().forEach(track => track.addEventListener('ended', () => { if (sender === current) stopSharing(); }, { once: true }));
      const sdk = await sdkFor('sender'); ensure(); current.sdk = sdk;
      sdk.goOnline(sdk.db);
      const { user } = await sdk.signInAnonymously(sdk.identity); ensure();
      const room = sdk.push(sdk.ref(sdk.db, 'cameraRooms/' + user.uid));
      current.ref = room;
      // onDisconnect runs on Firebase even when the tab loses its network.
      await sdk.onDisconnect(room).remove(); ensure();
      await sdk.set(room, { meta: { label: 'Teléfono ' + room.key.slice(-4), updatedAt: sdk.serverTimestamp(), consentVersion: 1 } }); ensure();
      const requestsRef = sdk.child(room, 'requests');
      const counts = () => {
        if (sender !== current) return;
        patch({ viewers: [...current.peers.values()].filter(p => p.connectionState === 'connected').length });
      };
      const acceptRequest = async snapshot => {
        if (sender !== current) return;
        const data = snapshot.val();
        if (data?.offer?.type !== 'offer' || typeof data.offer.sdp !== 'string' || data.offer.sdp.length > 90000) return;
        const existing = current.peers.get(snapshot.key);
        if (existing) {
          try { await applyCameraSignal(existing, data.offer); }
          catch { if (sender === current) patch({ error: 'No se pudieron recibir los datos de conexión del visor.' }); }
          return;
        }
        if (current.peers.size >= 3) return;
        let peer;
        let stage = 'preparar video';
        try {
        peer = makePeer(); current.peers.set(snapshot.key, peer);
        peer.onconnectionstatechange = () => {
          if (['failed', 'closed', 'disconnected'].includes(peer.connectionState)) {
            current.peers.delete(snapshot.key); peer.onconnectionstatechange = null; peer.close();
          }
          counts();
        };
          const answerRef = sdk.child(requestsRef, snapshot.key + '/answer');
          const publishing = publishCameraSignal(peer, value => sdk.set(answerRef, value),
            () => sender === current && current.peers.get(snapshot.key) === peer,
            () => patch({ error: 'No se pudieron enviar los datos de conexión a Firebase.' }));
          current.cleanups.push(publishing.stop);
          current.stream.getTracks().forEach(track => peer.addTrack(track, current.stream));
          stage = 'leer solicitud';
          await applyCameraSignal(peer, data.offer); ensure();
          stage = 'crear respuesta';
          await peer.setLocalDescription(await peer.createAnswer());
          ensure();
          if (current.peers.get(snapshot.key) !== peer) return;
          stage = 'enviar respuesta a Firebase';
          const answer = peer.localDescription.toJSON();
          await sdk.set(answerRef, answer);
          publishing.start(answer);
          if (sender === current) patch({ error: '' });
        } catch (error) {
          if (peer) { peer.onconnectionstatechange = null; peer.close(); }
          current.peers.delete(snapshot.key); counts();
          if (sender === current) {
            // Never expose SDP, network addresses or raw SDK error messages.
            const code = String(error?.code || error?.name || 'Error').replace(/[^a-zA-Z0-9_/-]/g, '').slice(0, 60);
            patch({ error: 'La cámara no pudo responder al visor: ' + stage + ' (' + code + '). Puedes detenerla en Account.' });
          }
        }
      };
      current.cleanups.push(sdk.onChildAdded(requestsRef, snapshot => { void acceptRequest(snapshot); }, () => { if (sender === current) stopSharing('Se perdió el permiso para compartir.'); }));
      current.cleanups.push(sdk.onChildChanged(requestsRef, snapshot => { void acceptRequest(snapshot); }, () => { if (sender === current) stopSharing('Se perdió el permiso para compartir.'); }));
      current.cleanups.push(sdk.onChildRemoved(requestsRef, snapshot => {
        const peer = current.peers.get(snapshot.key);
        if (peer) { peer.onconnectionstatechange = null; peer.close(); current.peers.delete(snapshot.key); counts(); }
      }));
      const heartbeat = interval(() => {
        if (sender === current) sdk.set(sdk.child(room, 'meta/updatedAt'), sdk.serverTimestamp()).catch(() => { if (sender === current) stopSharing('Se perdió la conexión con Firebase.'); });
      }, 15000);
      current.cleanups.push(() => clear(heartbeat));
      let connectedOnce = true;
      current.cleanups.push(sdk.onValue(sdk.ref(sdk.db, '.info/connected'), snapshot => {
        if (snapshot.val()) connectedOnce = true;
        else if (connectedOnce && sender === current) stopSharing('La conexión se interrumpió. Vuelve a aceptar para compartir.');
      }));
      current.cleanups.push(sdk.onAuthStateChanged(sdk.identity, identity => {
        if (sender === current && identity?.uid !== user.uid) stopSharing('La sesión de cámara terminó.');
      }));
      ensure(); patch({ sharing: true, starting: false }); return true;
    } catch (error) {
      if (sender === current) stopSharing(error.name === 'NotAllowedError' ? 'No se concedió permiso para la cámara o el micrófono. Puedes continuar sin compartir.' : 'No se pudo iniciar la cámara y el micrófono. Comprueba conexión y permisos; puedes continuar sin compartir.');
      return false;
    }
  }
  async function loginAdmin(email, password) {
    const token = ++adminGeneration;
    const sdk = await sdkFor('viewer');
    if (token !== adminGeneration) throw new Error('Acceso de cámara cancelado.');
    const { user } = await sdk.signInWithEmailAndPassword(sdk.identity, email, password);
    if (token !== adminGeneration) { await sdk.signOut(sdk.identity); throw new Error('Acceso de cámara cancelado.'); }
    if (user.uid !== CAMERA_ADMIN_UID) { await sdk.signOut(sdk.identity); throw new Error('Esta cuenta no tiene permiso para ver directos.'); }
    adminSDK = sdk; patch({ admin: true });
  }
  function stopList() { listOff?.(); listOff = null; patch({ rooms: [] }); }
  async function watchRooms() {
    stopList();
    if (!adminSDK?.identity.currentUser || adminSDK.identity.currentUser.uid !== CAMERA_ADMIN_UID) throw new Error('Inicia sesión como administrador de cámara.');
    const sdk = adminSDK;
    listOff = sdk.onValue(sdk.ref(sdk.db, 'cameraRooms'), snapshot => {
      const rooms = [];
      snapshot.forEach(owner => owner.forEach(room => {
        const meta = room.val()?.meta;
        if (meta?.consentVersion === 1) rooms.push({ path: 'cameraRooms/' + owner.key + '/' + room.key, ...meta });
      }));
      patch({ rooms });
    }, () => { stopViewing(); stopList(); patch({ viewStatus: 'No se pudo leer la lista. Comprueba los permisos de Firebase.' }); });
  }
  async function viewRoom(room) {
    stopViewing();
    const sdk = adminSDK;
    if (!sdk?.identity.currentUser || sdk.identity.currentUser.uid !== CAMERA_ADMIN_UID) throw new Error('Inicia sesión como administrador de cámara.');
    if (!/^cameraRooms\/[\w-]+\/[\w-]+$/.test(room.path)) throw new Error('Directo inválido.');
    if (now() - room.updatedAt > 60000) throw new Error('Ese teléfono ya no está disponible.');
    const token = ++viewGeneration;
    const current = { abort: new AbortController(), cleanups: [], peers: new Map(), sdk, ref: null };
    receiver = current;
    const ensure = () => { if (receiver !== current || viewGeneration !== token) throw new Error('Visor cerrado.'); };
    patch({ viewing: true, viewStatus: 'Preparando conexión…', remoteStream: null });
    try {
      const peer = makePeer(); current.peers.set('viewer', peer);
      peer.addTransceiver('video', { direction: 'recvonly' });
      peer.addTransceiver('audio', { direction: 'recvonly' });
      peer.ontrack = event => {
        if (receiver === current) patch({ remoteStream: event.streams[0] || new MediaStream([event.track]), viewStatus: 'Video en vivo' });
      };
      peer.onconnectionstatechange = () => {
        if (receiver !== current) return;
        if (peer.connectionState === 'connected') patch({ viewStatus: 'Video en vivo' });
        if (['disconnected', 'failed', 'closed'].includes(peer.connectionState)) {
          stopViewing(); patch({ viewStatus: 'Conexión terminada. Algunas redes necesitan un servicio TURN adicional.' });
        }
      };
      const request = sdk.push(sdk.ref(sdk.db, room.path + '/requests'));
      current.ref = request;
      const publishing = publishCameraSignal(peer, value => sdk.set(sdk.child(request, 'offer'), value),
        () => receiver === current,
        () => { if (receiver === current) { stopViewing(); patch({ viewStatus: 'No se pudieron enviar los datos de conexión a Firebase.' }); } });
      current.cleanups.push(publishing.stop);
      await peer.setLocalDescription(await peer.createOffer()); ensure();
      await sdk.onDisconnect(request).remove(); ensure();
      const offer = peer.localDescription.toJSON();
      await sdk.set(request, { offer, createdAt: sdk.serverTimestamp() }); ensure();
      publishing.start(offer);
      patch({ viewStatus: 'Esperando respuesta del teléfono…' });
      const timeout = deadline(() => {
        if (receiver !== current || peer.connectionState === 'connected') return;
        const message = answered
          ? 'El teléfono respondió, pero la red no conectó el video. Puede necesitar un relay TURN.'
          : 'El teléfono no respondió a la solicitud. Comprueba que la app siga abierta y compartiendo.';
        stopViewing(); patch({ viewStatus: message });
      }, 30000);
      current.cleanups.push(() => clearDeadline(timeout));
      let answered = false;
      current.cleanups.push(sdk.onValue(sdk.child(request, 'answer'), async snapshot => {
        if (!snapshot.exists() || receiver !== current) return;
        try { await applyCameraSignal(peer, snapshot.val()); answered = true; if (receiver === current && peer.connectionState !== 'connected') patch({ viewStatus: 'Conectando video…' }); }
        catch { if (receiver === current) { stopViewing(); patch({ viewStatus: 'No se pudo conectar con el teléfono.' }); } }
      }, () => { if (receiver === current) { stopViewing(); patch({ viewStatus: 'Permiso de cámara retirado.' }); } }));
      current.cleanups.push(sdk.onValue(sdk.ref(sdk.db, room.path + '/meta'), snapshot => { if (!snapshot.exists() && receiver === current) stopViewing(); }));
    } catch (error) { if (receiver === current) stopViewing(); throw error; }
  }
  async function logoutAdmin() {
    adminGeneration++;
    stopViewing(); stopList();
    if (adminSDK) await adminSDK.signOut(adminSDK.identity);
    adminSDK = null; patch({ admin: false });
  }
  return {
    getState: () => state, subscribe: callback => { listeners.add(callback); return () => listeners.delete(callback); },
    startSharing, stopSharing, pauseForBackground, resumeAfterBackground, loginAdmin, logoutAdmin, watchRooms, stopList, viewRoom, stopViewing,
    close: () => { stopSharing(); stopViewing(); stopList(); void logoutAdmin(); }
  };
}

const cameraLive = createCameraLiveController();
function useCameraLive() {
  const [state, update] = React.useState(cameraLive.getState());
  React.useEffect(() => cameraLive.subscribe(() => update(cameraLive.getState())), []);
  return state;
}
export function CameraAccountControl() {
  const state = useCameraLive();
  if (!state.sharing) return null;
  return React.createElement('section', { className: 'rounded-2xl border bg-card p-4 space-y-3' },
    React.createElement('p', { className: 'font-bold' }, 'Cámara y micrófono compartidos · ' + state.viewers + ' visor(es)'),
    React.createElement('button', { type: 'button', onClick: () => cameraLive.stopSharing(), className: 'w-full rounded-xl border p-3 font-bold' }, 'Detener cámara y micrófono'));
}
export function CameraLiveShell({ session, viewerOpen, onCloseViewer, onReady, children }) {
  const h = React.createElement;
  const state = useCameraLive();
  const [choice, setChoice] = React.useState(false);
  const [showConsent, setShowConsent] = React.useState(false);
  const sessionRef = React.useRef(session);
  sessionRef.current = session;
  React.useEffect(() => {
    setChoice(false); setShowConsent(false); onReady(false); cameraLive.close();
  }, [session?.user?.id]);
  React.useEffect(() => {
    const hidden = () => {
      if (document.visibilityState === 'hidden') cameraLive.pauseForBackground();
      else if (sessionRef.current?.expiresAt > Date.now()) void cameraLive.resumeAfterBackground();
      else cameraLive.close();
    };
    const leave = () => cameraLive.close();
    document.addEventListener('visibilitychange', hidden); window.addEventListener('pagehide', leave);
    return () => { document.removeEventListener('visibilitychange', hidden); window.removeEventListener('pagehide', leave); cameraLive.close(); };
  }, []);
  if (!session) return children;
  if (!choice || showConsent) return h('main', { className: 'bg-background text-foreground', style: {
    height: '100dvh', minHeight: 0, display: 'grid', gridTemplateRows: 'minmax(0, 1fr) auto minmax(0, 1fr)', gap: 20, padding: '24px', boxSizing: 'border-box'
  } },
    h('section', { style: { minHeight: 0, overflowY: 'auto', fontSize: 14, fontWeight: 400, lineHeight: 1.5 } },
      h('p', null, CAMERA_CONSENT),
      state.error && h('p', { role: 'alert', style: { marginTop: 12 } }, state.error)),
    h('button', { type: 'button', disabled: state.starting, onClick: async () => {
      if (await cameraLive.startSharing(true)) { setChoice(true); setShowConsent(false); onReady(true); }
    }, style: { width: '100%', minHeight: 60, background: '#16843d', color: '#fff', border: 0, borderRadius: 16, padding: '16px 20px', fontSize: 17, fontWeight: 700, opacity: state.starting ? .65 : 1 } },
    state.starting ? 'Esperando permisos / conectando…' : 'Aceptar y compartir cámara y micrófono'),
    h('div', { style: { minHeight: 0, overflowY: 'auto', textAlign: 'center' } },
      h('button', { type: 'button', onClick: () => { cameraLive.stopSharing(); setChoice(true); setShowConsent(false); onReady(true); }, style: { background: 'transparent', border: 0, padding: 8, fontSize: 14, fontWeight: 400, textDecoration: 'underline', color: 'inherit' } }, 'Continuar sin compartir'))
  );
  return h(React.Fragment, null,
    state.sharing && h('aside', { role: 'status', 'aria-live': 'polite', style: { position: 'fixed', top: 6, left: '50%', transform: 'translateX(-50%)', width: 'min(100%, 430px)', padding: '0 12px', background: 'transparent', color: '#39765c', fontSize: 12, fontWeight: 600, lineHeight: '20px', textAlign: 'right', zIndex: 1000, pointerEvents: 'none' } }, 'Cámara y micrófono compartidos'),
    children,
    state.error && h('aside', { role: 'alert', style: { position: 'fixed', top: 0, background: '#fff4ce', color: '#372d00', padding: 12, zIndex: 900, maxWidth: 430 } }, state.error,
      h('button', { type: 'button', onClick: () => setShowConsent(true), className: 'ml-2 underline' }, 'Opciones de cámara')),
    viewerOpen && h(CameraAdminViewer, { onClose: onCloseViewer })
  );
}

function CameraAdminViewer({ onClose }) {
  const h = React.createElement, state = useCameraLive();
  const [email, setEmail] = React.useState(''), [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(''), [busy, setBusy] = React.useState(false);
  const [sound, setSound] = React.useState(false);
  const video = React.useRef(null);
  React.useEffect(() => { setSound(false); if (video.current) video.current.muted = true; }, [state.remoteStream]);
  const attempted = React.useRef(new Set());
  const [foreground, setForeground] = React.useState(0);
  React.useEffect(() => {
    const visible = () => { if (document.visibilityState === 'visible') { attempted.current.clear(); setForeground(value => value + 1); } };
    document.addEventListener('visibilitychange', visible);
    return () => document.removeEventListener('visibilitychange', visible);
  }, []);
  React.useEffect(() => {
    if (state.admin) cameraLive.watchRooms().catch(() => setError('No se pudo abrir la lista de directos.'));
    return () => { cameraLive.stopViewing(); cameraLive.stopList(); };
  }, [state.admin]);
  React.useEffect(() => {
    if (!state.admin || state.viewing || document.visibilityState === 'hidden') return;
    const room = state.rooms.find(item => Date.now() - item.updatedAt < 60000 && !attempted.current.has(item.path));
    if (!room) return;
    attempted.current.add(room.path);
    cameraLive.viewRoom(room).catch(err => setError(err.message));
  }, [state.admin, state.rooms, state.viewing, foreground]);
  const run = async fn => { setBusy(true); setError(''); try { await fn(); } catch (err) { setError(err.message.includes('auth/') ? 'No se pudo iniciar sesión con esa cuenta de cámara.' : err.message); } finally { setBusy(false); } };
  return h('section', { role: 'dialog', 'aria-modal': true, 'aria-label': 'Cámaras en vivo', style: { position: 'fixed', inset: 0, overflowY: 'auto', background: 'hsl(var(--background))', zIndex: 1100, maxWidth: 430, margin: 'auto', padding: 24 } },
    h('h1', { className: 'text-2xl font-black mb-4' }, 'Cámaras en vivo'),
    h('button', { type: 'button', onClick: onClose, className: 'rounded-xl border p-3 mb-4' }, 'Cerrar visor'),
    !state.admin ? h('form', { className: 'space-y-4', onSubmit: event => { event.preventDefault(); const enteredPassword = password; setPassword(''); void run(() => cameraLive.loginAdmin(email, enteredPassword)); } },
      h('p', null, 'Acceso separado del administrador de cámara. No cambia tu cuenta de la app.'),
      h('label', { className: 'block' }, 'Correo del administrador', h('input', { required: true, type: 'email', value: email, autoComplete: 'off', onChange: event => setEmail(event.target.value), className: 'w-full rounded-xl border bg-background p-3' })),
      h('label', { className: 'block' }, 'Contraseña de cámara', h('input', { required: true, type: 'password', value: password, autoComplete: 'off', onChange: event => setPassword(event.target.value), className: 'w-full rounded-xl border bg-background p-3' })),
      h('button', { disabled: busy, className: 'w-full rounded-xl border p-4 font-bold' }, busy ? 'Conectando…' : 'Entrar al visor'))
      : h('div', { className: 'space-y-4' },
        h('p', null, 'Solo aparecen teléfonos que aceptaron compartir y siguen conectados.'),
        state.rooms.filter(room => Date.now() - room.updatedAt < 60000).map(room => h('button', { type: 'button', key: room.path, disabled: busy, className: 'block w-full rounded-xl border p-4', onClick: () => run(() => cameraLive.viewRoom(room)) }, room.label + ' · Ver en vivo')),
        !state.rooms.length && h('p', null, 'No hay cámaras compartidas en este momento.'),
        h('p', { role: 'status' }, state.viewStatus),
        h('video', { ref: element => { video.current = element; if (element) { if (element.srcObject !== state.remoteStream) element.srcObject = state.remoteStream; if (state.remoteStream) element.play().catch(() => {}); } }, autoPlay: true, playsInline: true, muted: !sound, controls: true, style: { width: '100%', background: '#000', display: state.remoteStream ? 'block' : 'none' } }),
        state.remoteStream && h('button', { type: 'button', className: 'rounded-xl border p-3 font-bold', 'aria-pressed': sound, onClick: () => {
          const enabled = !sound; setSound(enabled);
          if (video.current) { video.current.muted = !enabled; if (enabled) video.current.play().catch(() => { setSound(false); setError('Pulsa reproducir en el video para activar el sonido.'); }); }
        } }, sound ? 'Silenciar sonido' : 'Activar sonido'),
        state.viewing && h('button', { type: 'button', onClick: () => cameraLive.stopViewing(), className: 'rounded-xl border p-3' }, 'Cerrar conexión'),
        h('button', { type: 'button', onClick: () => run(() => cameraLive.logoutAdmin()), className: 'rounded-xl border p-3' }, 'Cerrar sesión de cámara')),
    error && h('p', { role: 'alert', className: 'mt-4' }, error),
    h('p', { className: 'mt-6 text-sm text-muted-foreground' }, 'El directo puede incluir audio si el teléfono autorizó el micrófono. La app no graba video ni audio. Algunas redes requieren un relay TURN adicional.')
  );
}
