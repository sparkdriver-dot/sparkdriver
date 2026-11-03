import { accounts } from './data/accounts.js';
const SESSION_KEY = 'spark-local-session-v2';
export const SESSION_DURATION_MS = 60 * 60 * 1000;
const encoder = new TextEncoder();
const hex = bytes => Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2, '0')).join('');
const unhex = value => Uint8Array.from(value.match(/.{2}/g), byte => parseInt(byte, 16));

export async function verifyLocalCredentials({ email, password }, records = accounts) {
  const emailHash = hex(await crypto.subtle.digest('SHA-256', encoder.encode(String(email).trim().toLowerCase())));
  const account = records.find(record => record.emailHash === emailHash);
  // Unknown addresses also perform a password derivation.
  const verifier = account || records[0];
  if (!verifier) return null;
  const key = await crypto.subtle.importKey('raw', encoder.encode(String(password)), 'PBKDF2', false, ['deriveBits']);
  const derived = hex(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: unhex(verifier.salt), iterations: verifier.iterations }, key, 256));
  let difference = derived.length ^ verifier.passwordHash.length;
  for (let index = 0; index < derived.length; index++) difference |= derived.charCodeAt(index) ^ verifier.passwordHash.charCodeAt(index);
  return account && difference === 0 ? account : null;
}

/** Browser-only access gate. Client-side checks cannot enforce server security. */
export function createAuthClient(_createClient, _config, records = accounts, runtime = {}) {
  const now = runtime.now || (() => Date.now());
  const schedule = runtime.setTimeout || ((callback, delay) => globalThis.setTimeout(callback, delay));
  const cancel = runtime.clearTimeout || (timer => globalThis.clearTimeout(timer));
  let session = null;
  let expiryTimer = null;
  const listeners = new Set();
  const emit = event => listeners.forEach(callback => callback(event, session));
  const clearSession = () => {
    if (expiryTimer !== null) cancel(expiryTimer);
    expiryTimer = null;
    session = null;
    sessionStorage.removeItem(SESSION_KEY);
  };
  const checkExpiry = () => {
    if (session && session.expiresAt <= now()) { clearSession(); emit('SIGNED_OUT'); }
  };
  const scheduleExpiry = () => {
    if (expiryTimer !== null) cancel(expiryTimer);
    expiryTimer = null;
    if (session) {
      expiryTimer = schedule(() => { checkExpiry(); if (session) scheduleExpiry(); }, Math.max(0, session.expiresAt - now()));
      expiryTimer?.unref?.();
    }
  };
  try {
    const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
    if (saved && Number.isFinite(saved.issuedAt) && saved.issuedAt <= now() && saved.expiresAt > now() && saved.expiresAt <= saved.issuedAt + SESSION_DURATION_MS && records.some(account => account.id === saved.accountId)) {
      session = { user: { id: saved.accountId }, issuedAt: saved.issuedAt, expiresAt: saved.expiresAt };
    } else sessionStorage.removeItem(SESSION_KEY);
  } catch { sessionStorage.removeItem(SESSION_KEY); }
  scheduleExpiry();
  if (typeof window !== 'undefined') {
    window.addEventListener('focus', checkExpiry);
    window.addEventListener('pageshow', checkExpiry);
    document.addEventListener('visibilitychange', checkExpiry);
  }
  return { auth: {
    onAuthStateChange(callback) {
      listeners.add(callback);
      return { data: { subscription: { unsubscribe() { listeners.delete(callback); } } } };
    },
    async getSession() { checkExpiry(); return { data: { session } }; },
    async signInWithPassword(credentials) {
      try {
        const account = await verifyLocalCredentials(credentials, records);
        if (!account) return { data: { user: null, session: null }, error: { message: 'Invalid email or password' } };
        const issuedAt = now();
        const expiresAt = issuedAt + SESSION_DURATION_MS;
        session = { user: { id: account.id, email: String(credentials.email).trim() }, issuedAt, expiresAt };
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({ accountId: account.id, issuedAt, expiresAt }));
        scheduleExpiry();
        emit('SIGNED_IN');
        return { data: { user: session.user, session }, error: null };
      } catch { return { data: { user: null, session: null }, error: { message: 'Unable to verify access. Open the app through localhost or HTTPS.' } }; }
    },
    async signOut() { clearSession(); emit('SIGNED_OUT'); return { error: null }; },
  } };
}
