export const CAMERA_STUN_SERVERS = [{ urls: 'stun:stun.l.google.com:19302' }];

// These are client TURN credentials, never the provider's account password or
// API secret. Load them only through the authenticated camera Firebase app.
export function parseCameraRelay(value) {
  if (value == null) return CAMERA_STUN_SERVERS;
  if (!Array.isArray(value.iceServers) || !value.iceServers.length || value.iceServers.length > 8)
    throw new Error('Configuración TURN inválida.');
  const servers = value.iceServers.map(server => {
    const urls = Array.isArray(server?.urls) ? server.urls : [server?.urls];
    if (!urls.length || urls.length > 8 || urls.some(url => typeof url !== 'string' ||
      !/^turns?:[a-zA-Z0-9.-]+(?::\d{1,5})?(?:\?transport=(?:udp|tcp))?$/.test(url)))
      throw new Error('Dirección TURN inválida.');
    if (typeof server.username !== 'string' || !server.username || server.username.length > 512 ||
      typeof server.credential !== 'string' || !server.credential || server.credential.length > 512)
      throw new Error('Faltan credenciales TURN válidas.');
    return { urls, username: server.username, credential: server.credential };
  });
  return [...CAMERA_STUN_SERVERS, ...servers];
}

export async function loadCameraRelay(sdk) {
  const snapshot = await sdk.get(sdk.ref(sdk.db, 'cameraRelay'));
  return parseCameraRelay(snapshot.val());
}

export async function testCameraRelay(iceServers, createPeer = config => new RTCPeerConnection(config)) {
  if (!iceServers.some(server => (Array.isArray(server.urls) ? server.urls : [server.urls]).some(url => /^turns?:/.test(url))))
    throw new Error('Guarda primero la configuración TURN.');
  const peer = createPeer({ iceServers, iceTransportPolicy: 'relay' });
  let timer;
  try {
    return await new Promise((resolve, reject) => {
      const fail = () => reject(new Error('TURN no respondió. Comprueba las credenciales o prueba otra red.'));
      timer = setTimeout(fail, 15000);
      peer.onicecandidate = event => {
        if (event.candidate?.type === 'relay' || / typ relay(?: |$)/.test(event.candidate?.candidate || ''))
          resolve('TURN disponible: el servidor asignó una ruta de retransmisión.');
      };
      peer.createDataChannel('relay-check');
      peer.createOffer().then(offer => peer.setLocalDescription(offer)).catch(fail);
    });
  } finally { clearTimeout(timer); peer.onicecandidate = null; peer.close(); }
}
