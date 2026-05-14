const ADMIN_URL = "http://localhost:4000";

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
 * Track a checkout funnel event → cosy-admin live feed.
 * step: "add_to_cart" | "cart_viewed" | "payment_initiated"
 */
export async function trackCheckout({ items = [], cart_total = 0, step = "add_to_cart", email = "", name = "", completed = false }) {
  const session_id = getSessionId();
  if (!session_id) return;
  try {
    await fetch(`${ADMIN_URL}/api/webhook/checkout`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ session_id, items, cart_total, step, email, name, completed }),
    });
  } catch { /* admin non dispo */ }
}

/**
 * Track a page view → cosy-admin live feed.
 */
export async function trackPageview({ page = "", ref = "" } = {}) {
  if (typeof window === "undefined") return;
  try {
    await fetch(`${ADMIN_URL}/api/webhook/pageview`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ page: page || window.location.pathname, ref }),
    });
  } catch { /* admin non dispo */ }
}
