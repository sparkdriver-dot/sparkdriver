import { React } from './vendor.js';
const cameraElement = React.createElement;

/** Live camera preview only: no barcode recognition or purchase verification. */
export function CameraPreviewScreen({ order, setFlow }) {
  const videoRef = React.useRef(null);
  const [attempt, setAttempt] = React.useState(0);
  const [status, setStatus] = React.useState('Opening camera…');
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    let active = true;
    let stream = null;
    setError('');
    setStatus('Opening camera…');
    const open = async () => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setError('Camera is not available. Open this page in a supported browser using HTTPS.');
        return;
      }
      try {
        const requested = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
        if (!active) { requested.getTracks().forEach(track => track.stop()); return; }
        stream = requested;
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          await video.play();
        }
        if (active) setStatus('Live camera view');
      } catch (problem) {
        stream?.getTracks().forEach(track => track.stop());
        stream = null;
        if (!active) return;
        const denied = problem.name === 'NotAllowedError' || problem.name === 'PermissionDeniedError';
        setError(denied ? 'Camera permission denied. Allow camera access in your browser settings.' : 'Unable to open the camera. Check that it is connected and not in use by another app.');
      }
    };
    open();
    return () => {
      active = false;
      stream?.getTracks().forEach(track => track.stop());
      if (videoRef.current?.srcObject === stream) videoRef.current.srcObject = null;
    };
  }, [attempt]);
  return cameraElement('main', {
    className: 'app-gradient flex min-h-screen flex-col px-7 text-primary-foreground',
    style: { paddingTop: 44, paddingBottom: 32, minHeight: '100dvh' }
  },
    cameraElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 } },
      cameraElement('div', null,
        cameraElement('p', { style: { fontSize: 18 } }, 'Camera preview'),
        cameraElement('h1', { className: 'text-xl font-black', style: { marginTop: 2 } }, order.items[0]?.name || order.customer),
        cameraElement('p', { style: { marginTop: 4, fontWeight: 700, opacity: 0.6 } }, order.id)),
      cameraElement('span', { style: { padding: '12px 18px', borderRadius: 999, fontWeight: 800, background: '#ffffff26' } }, status === 'Live camera view' && !error ? 'Live' : 'Camera')),
    cameraElement('div', {
      style: { position: 'relative', width: 288, maxWidth: '100%', height: 320, flexShrink: 0, margin: '80px auto 24px', overflow: 'hidden', background: '#000', border: '2px solid #ffffff40', borderRadius: 32, boxShadow: '0 12px 28px #00377a40' }
    },
      cameraElement('video', { ref: videoRef, autoPlay: true, muted: true, playsInline: true, 'aria-label': 'Live camera preview', style: { width: '100%', height: '100%', objectFit: 'cover' } }),
      error && cameraElement('div', { role: 'alert', style: { position: 'absolute', inset: 0, display: 'grid', placeContent: 'center', padding: 24, textAlign: 'center', background: '#111', color: '#fff', zIndex: 2 } },
        cameraElement('p', null, error),
        cameraElement('button', { type: 'button', onClick: () => setAttempt(value => value + 1), style: { marginTop: 20, padding: 12, borderRadius: 12, background: '#0067d6', color: '#fff' } }, 'Try again')),
      cameraElement('div', { 'aria-hidden': true, style: { position: 'absolute', inset: 32, border: '4px solid #ffffffe6', borderRadius: 16, pointerEvents: 'none' } })),
    cameraElement('div', { style: { marginTop: 'auto', paddingTop: 28, textAlign: 'center' } },
      cameraElement('p', { role: 'status', style: { fontSize: 20 } }, error ? 'Camera unavailable' : status),
      cameraElement('p', { style: { marginTop: 8, opacity: 0.65 } }, 'Live camera preview'),
      cameraElement('button', { type: 'button', onClick: () => setFlow('detail'), style: { marginTop: 24, padding: '10px 20px', fontWeight: 700, textDecoration: 'underline', color: '#fff' } }, 'Back to order')));
}
