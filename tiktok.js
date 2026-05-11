export const TIKTOK_PIXEL_ID = "D7L8HNRC77U8R92P98Q0";

export function ttq(event, data) {
  if (typeof window === "undefined") return;
  const q = window.ttq;
  if (!q || typeof q.track !== "function") return;
  try { q.track(event, data); } catch {}
}
