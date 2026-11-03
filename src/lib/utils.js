/** Recovered lib/utils.js — editable application data and helpers. */
export const formatTime = (e, t = !1) =>
  e.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    ...(t ? { second: "2-digit" } : {}),
  });

export const addMinutes = (e, t) => new Date(e.getTime() + t * 6e4);

export const parseDuration = (e) => Number.parseInt(e, 10) || 30;

export const hashSeed = (e) =>
  [...e].reduce((t, r) => (Math.imul(31, t) + r.charCodeAt(0)) | 0, 7) >>> 0;

export const seededRandom = (e) => Math.abs(Math.sin(e) * 1e4) % 1;

export const orderReference = (e) =>
  `#${String(Math.floor(1e8 + seededRandom(hashSeed(e)) * 9e8))}`;

export const distanceMiles = (e, t) => {
  const r = (l) => (l * Math.PI) / 180,
    n = r(t.lat - e.lat),
    s = r(t.lng - e.lng),
    i = r(e.lat),
    o = r(t.lat),
    a = Math.sin(n / 2) ** 2 + Math.cos(i) * Math.cos(o) * Math.sin(s / 2) ** 2;
  return 3958.8 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export const nearbyCoordinates = (e, t, r) => {
  const n = hashSeed(r),
    s = Math.sqrt(seededRandom(n)) * t,
    i = seededRandom(n + 11) * 2 * Math.PI,
    o = 3958.8,
    a = (e.lat * Math.PI) / 180,
    l = (e.lng * Math.PI) / 180,
    c = s / o,
    u = Math.asin(
      Math.sin(a) * Math.cos(c) + Math.cos(a) * Math.sin(c) * Math.cos(i),
    ),
    d =
      l +
      Math.atan2(
        Math.sin(i) * Math.sin(c) * Math.cos(a),
        Math.cos(c) - Math.sin(a) * Math.sin(u),
      );
  return { lat: (u * 180) / Math.PI, lng: (d * 180) / Math.PI };
};

export const formatAddress = (e, t) => {
  const r = [e.house_number, e.road].filter(Boolean).join(" "),
    n = e.city || e.town || e.village || e.hamlet;
  return (
    [r, n, e.state, e.postcode].filter(Boolean).join(", ") ||
    t ||
    "Randomized delivery location nearby"
  );
};

export const longitudeToTile = (e, t) => Math.floor(((e + 180) / 360) * 2 ** t);

export const latitudeToTile = (e, t) =>
  Math.floor(
    ((1 -
      Math.log(
        Math.tan((e * Math.PI) / 180) + 1 / Math.cos((e * Math.PI) / 180),
      ) /
        Math.PI) /
      2) *
      2 ** t,
  );

export const initialQuantities = (e) =>
  Object.fromEntries(e.items.map((t) => [t.name, t.max]));

export const countItems = (e, t) =>
  e.items.reduce((r, n) => r + (t[n.name] ?? n.max), 0);

export const calculateTotal = (e, t) =>
  e.items
    .reduce(
      (r, n) =>
        r + Number(n.price.replace(/[^0-9.]/g, "")) * (t[n.name] ?? n.max),
      0,
    )
    .toLocaleString("en-US", { style: "currency", currency: "USD" });
