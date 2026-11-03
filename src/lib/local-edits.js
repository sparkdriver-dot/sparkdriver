/** Browser-local edits, independent of the hosting provider. */
export const PICKUP_ADDRESS_KEY = 'spark-pickup-address-v1';
export const ORDER_EDITS_KEY = 'spark-order-edits-v1';
export function readPickupAddress(fallback) {
  try { return localStorage.getItem(PICKUP_ADDRESS_KEY)?.trim() || fallback; } catch { return fallback; }
}
export function savePickupAddress(address) {
  const value = String(address).trim();
  if (!value) throw new Error('Enter a pickup address.');
  localStorage.setItem(PICKUP_ADDRESS_KEY, value);
  return value;
}
export function readOrderState(order) {
  try {
    const all = JSON.parse(localStorage.getItem(ORDER_EDITS_KEY) || '{}');
    const saved = all[order.id];
    if (saved && Array.isArray(saved.items) && saved.items.every(item => typeof item.name === 'string' && Number.isSafeInteger(item.max) && item.max >= 0)) {
      const restored = { ...order, items: saved.items };
      const quantities = Object.fromEntries(restored.items.map(item => [item.name, Number.isSafeInteger(saved.quantities?.[item.name]) && saved.quantities[item.name] >= 0 ? saved.quantities[item.name] : item.max]));
      return { order: restored, quantities };
    }
  } catch {}
  return { order, quantities: Object.fromEntries(order.items.map(item => [item.name, item.max])) };
}
export function saveOrderState(order, quantities) {
  let all;
  try { all = JSON.parse(localStorage.getItem(ORDER_EDITS_KEY) || '{}'); } catch { all = {}; }
  localStorage.setItem(ORDER_EDITS_KEY, JSON.stringify({ ...all, [order.id]: { items: order.items, quantities } }));
}
/** A virtual scan plan: two steps per unit, without allocating an array per unit. */
export function createScanPlan(items, quantities) {
  const groups = items.map(item => ({ name: item.name, count: quantities[item.name] ?? item.max }));
  const length = groups.reduce((sum, item) => sum + item.count * 2, 0);
  return { length, stepAt(index) {
    let offset = Math.max(0, Math.min(index, length - 1));
    for (const item of groups) {
      if (offset < item.count * 2) return { name: item.name, pass: offset % 2 + 1 };
      offset -= item.count * 2;
    }
    return undefined;
  } };
}
