export const TIKTOK_PIXEL_ID = "D7TKIPBC77UEPF9JUHPG";

export function ttq(event, data) {
  if (typeof window === "undefined") return;
  const q = window.ttq;
  if (!q || typeof q.track !== "function") return;
  try { q.track(event, data); } catch {}
}
