"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { trackCheckout } from "@/lib/track";

export default function StickyAddToCart({ product }) {
  const [visible, setVisible] = useState(false);
  const { addItem, items, total } = useCart();

  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 700); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function add() {
    const v = product.variants[0];
    const item = {
      handle: product.handle,
      title: product.title,
      variant: product.hasColorVariants ? v.name : undefined,
      swatch: product.hasColorVariants ? v.swatch : undefined,
      price: product.price,
      image: v.image,
      qty: 1,
    };
    addItem(item);
    trackCheckout({
      items: [...items, item],
      cart_total: total + product.price,
      step: "add_to_cart",
    });
    // TikTok AddToCart
    try {
      window.ttq?.track("AddToCart", {
        value: product.price, currency: "EUR",
        contents: [{ content_id: product.handle, content_name: product.title, content_type: "product", quantity: 1, price: product.price }],
      });
    } catch {}
    // Server-side AddToCart
    try { window.TTTracker?.track("AddToCart"); } catch {}
  }

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-t border-neutral-200 transition-transform ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="container-page flex items-center gap-3 py-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.gallery[0]}
          alt=""
          className="w-12 h-12 rounded-md object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm truncate">{product.title}</div>
          <div className="text-[13px] text-neutral-700">
            <span className="font-bold">€{product.price.toFixed(2).replace(".", ",")}</span>
            <span className="ml-1.5 text-neutral-400 line-through text-[12px]">
              €{product.compareAtPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>
        <button
          onClick={add}
          aria-label="Ajouter au panier"
          className="btn-atc w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 8h13l-1.2 8.2a2 2 0 01-2 1.8H8.2a2 2 0 01-2-1.8L5 8z" />
            <path d="M9 8V6a3 3 0 016 0v2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
