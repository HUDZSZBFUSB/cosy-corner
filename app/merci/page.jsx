"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const ADMIN_URL = "https://cosy-saas.vercel.app";

export default function MerciPage() {
  const params   = useSearchParams();
  const { items, total, setOpen } = useCart();
  const fired    = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Lire les paramètres renvoyés par Fantom dans l'URL
    const order_id = params.get("order_id") || params.get("id")    || `ord_${Date.now()}`;
    const email    = params.get("email")    || "";
    const name     = params.get("name")     || params.get("billing_name") || "";
    const amount   = parseFloat(params.get("total") || params.get("amount") || total || 0);

    // Construire la liste d'articles depuis le panier (encore dispo en mémoire)
    const cartItems = items.map((it) => ({
      productId:   it.handle,
      title:       it.title,
      price:       it.price,
      quantity:    it.qty,
      image:       it.image,
      ...(it.variant ? { variantId: it.variant } : {}),
    }));

    // 1. Fire TikTok Purchase event côté client
    try {
      if (typeof window !== "undefined" && window.ttq) {
        window.ttq.track("Purchase", {
          value:    amount,
          currency: "EUR",
          contents: cartItems.map((i) => ({
            content_id:   i.productId,
            content_name: i.title,
            content_type: "product",
            quantity:     i.quantity,
            price:        i.price,
          })),
        });
      }
    } catch (e) {
      console.warn("[merci] ttq.track failed:", e);
    }

    // Server-side CompletePayment
    try { window.TTTracker?.track("CompletePayment"); } catch {}

    // 2. Notifier le SaaS admin (appel navigateur → localhost:4000)
    fetch(`${ADMIN_URL}/api/webhook/order`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order_id,
        email,
        name,
        total:  amount,
        items:  cartItems,
        status: "paid",
      }),
    }).catch((e) => console.warn("[merci] admin notify failed:", e.message));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-neutral-50">
      <div className="max-w-md w-full text-center">

        {/* Icône succès */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="text-3xl font-black tracking-tight text-neutral-900 mb-3">
          Commande confirmée !
        </h1>
        <p className="text-neutral-500 text-[15px] leading-relaxed mb-8">
          Merci pour votre achat. Vous recevrez un email de confirmation avec le numéro de suivi dès l'expédition de votre colis.
        </p>

        <div className="space-y-3">
          <a
            href="/"
            className="block w-full bg-black text-white rounded-full py-4 font-bold tracking-wider uppercase text-[13px] hover:bg-neutral-800 transition"
          >
            Continuer mes achats
          </a>
          <a
            href="/pages/suivi"
            className="block w-full border border-neutral-300 text-neutral-700 rounded-full py-4 font-semibold text-[13px] hover:border-neutral-500 transition"
          >
            Suivre ma commande
          </a>
        </div>

      </div>
    </div>
  );
}
