const ADMIN_URL = "https://cosy-saas.vercel.app";

function getSessionId() {
  if (typeof window === "undefined") return null;
  let id = sessionStorage.getItem("cosy_sess");
  if (!id) {
    id = "sess_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
    sessionStorage.setItem("cosy_sess", id);
  }
  return id;
}

/**
 * Track a checkout funnel event to the local admin dashboard.
 * step: "add_to_cart" | "cart_viewed" | "payment_initiated"
 * Silently fails if admin dashboard is not running.
 */
export async function trackCheckout({ items = [], cart_total = 0, step = "add_to_cart", email = "", name = "", completed = false }) {
  const session_id = getSessionId();
  if (!session_id) return;
  try {
    const res = await fetch(`${ADMIN_URL}/api/webhook/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id, items, cart_total, step, email, name, completed }),
    });
    if (!res.ok) {
      console.warn("[cosy-track] webhook error", res.status, await res.text());
    } else {
      console.log("[cosy-track] ✓ checkout tracked", step, cart_total + "€");
    }
  } catch (err) {
    console.warn("[cosy-track] fetch failed →", err.message);
  }
}

/**
 * Track a page view to the local admin dashboard.
 */
export async function trackPageview({ page = "", ref = "" } = {}) {
  if (typeof window === "undefined") return;
  try {
    await fetch(`${ADMIN_URL}/api/webhook/pageview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: page || window.location.pathname, ref }),
    });
  } catch {
    // Fail silently
  }
}
