// Fantom checkout redirect. Fantom handles PSP, 3DS, Apple/Google Pay,
// order creation and emails — we just forward the cart.

import { TIKTOK_PIXEL_ID, ttq } from "./tiktok";

const FANTOM_SITE_KEY = "sk_7e506d96d13cb2c93dfae88c59c57285";
const FANTOM_BASE = "https://checkout.elarroo.com/c/direct";
const FANTOM_CURRENCY = "EUR";

// TikTok Events API access token (passed through to Fantom so they can fire
// the server-side Purchase event on order completion).
const TT_ACCESS_TOKEN = "351bf388934b4b1d9f14ccbf449acfba64a4b8cd";

function toFantomItem(it) {
  return {
    productId: it.handle,
    title: it.title,
    price: it.price,
    quantity: it.qty,
    image: it.image,
    ...(it.variant ? { variantId: it.variant } : {}),
  };
}

export function goToFantomCheckout(items) {
  if (!items || items.length === 0) return;

  const cartItems = items.map(toFantomItem);
  const total = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

  // Fire client-side InitiateCheckout for TikTok before leaving the site.
  ttq("InitiateCheckout", {
    value: Number(total.toFixed(2)),
    currency: FANTOM_CURRENCY,
    contents: cartItems.map((i) => ({
      content_id: i.productId,
      content_name: i.title,
      content_type: "product",
      quantity: i.quantity,
      price: i.price,
    })),
  });

  const cartB64 = btoa(
    String.fromCharCode(...new TextEncoder().encode(JSON.stringify(cartItems)))
  );

  // Forward the TikTok click id from the current URL if present (ads land
  // with ?ttclid=... — Fantom deduplicates the conversion on their side).
  let ttclid = "";
  try {
    ttclid = new URLSearchParams(window.location.search).get("ttclid") || "";
  } catch {}

  let checkoutUrl =
    FANTOM_BASE +
    "?site_key=" + FANTOM_SITE_KEY +
    "&cart=" + encodeURIComponent(cartB64) +
    "&currency=" + FANTOM_CURRENCY +
    "&tt_pixel=" + TIKTOK_PIXEL_ID +
    "&tt_access_token=" + TT_ACCESS_TOKEN +
    "&success_url=" + encodeURIComponent("https://cosy-corner.shop/merci") +
    (ttclid ? "&ttclid=" + encodeURIComponent(ttclid) : "");

  // In-app browser escape for Android (Facebook/Instagram/TikTok/Pinterest/LinkedIn).
  try {
    const ua = navigator.userAgent || "";
    const isInApp =
      /FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Pinterest|LinkedInApp/i.test(ua);
    const isAndroid = /Android/i.test(ua) && !/iPhone|iPad|iPod/i.test(ua);
    if (isInApp && isAndroid) {
      const u = new URL(checkoutUrl);
      checkoutUrl =
        "intent://" +
        u.host +
        u.pathname +
        u.search +
        "#Intent;scheme=https;package=com.android.chrome;" +
        "S.browser_fallback_url=" + encodeURIComponent(checkoutUrl) + ";end";
    }
  } catch (e) {}

  window.location.href = checkoutUrl;
}
