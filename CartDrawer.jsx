"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { goToFantomCheckout } from "@/lib/fantom";

function useReservation(durationSec = 300) {
  const [s, setS] = useState(durationSec);
  useEffect(() => {
    const t = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export default function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, total } = useCart();
  const time = useReservation(300);
  const freeShippingThreshold = 29;
  const remaining = Math.max(0, freeShippingThreshold - total);
  const progress = Math.min(100, (total / freeShippingThreshold) * 100);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 shadow-2xl transition-transform flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: "100vh", maxHeight: "100dvh" }}
      >
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-5 h-14 border-b border-neutral-200">
          <span className="font-black text-[20px] tracking-[-0.03em] uppercase leading-none select-none">ScreenLab</span>
          <button onClick={() => setOpen(false)} aria-label="Fermer" className="p-1 hover:opacity-70">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Reservation banner */}
        <div
          className="shrink-0 px-5 py-2.5 border-b border-neutral-100 text-center text-[13px]"
          style={{ backgroundColor: "#FFF5D7" }}
        >
          <span className="text-neutral-700">Votre panier est réservé pendant </span>
          <span className="font-bold tabular-nums">{time}</span>
        </div>

        {/* Free-shipping progress */}
        <div className="shrink-0 px-5 py-3 border-b border-neutral-200">
          <p className="text-xs text-neutral-700 mb-2">
            {remaining > 0 ? (
              <>Ajoutez <strong>{remaining.toFixed(2).replace(".", ",")}€</strong> pour débloquer la livraison gratuite.</>
            ) : (
              <>🎉 Livraison gratuite débloquée !</>
            )}
          </p>
          <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-black transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Items - scrollable */}
        <div className="flex-1 min-h-0 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-neutral-500">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
                <path d="M3 4h2.4l2.7 12.3a2 2 0 001.95 1.57h7.9a2 2 0 001.95-1.57L21.5 8H6" />
                <circle cx="10" cy="20.5" r="1.3" fill="currentColor" stroke="none" />
                <circle cx="17" cy="20.5" r="1.3" fill="currentColor" stroke="none" />
              </svg>
              <p>Votre panier est vide</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((it, idx) => (
                <li key={idx} className="flex gap-3 border-b border-neutral-100 pb-4">
                  <div className="relative w-20 h-20 rounded overflow-hidden shrink-0 bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={it.image} alt={it.title} className="absolute inset-0 w-full h-full object-cover" />
                    {it.swatch && (
                      <span
                        className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white shadow"
                        style={{ backgroundColor: it.swatch }}
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium leading-tight">{it.title}</div>
                    {it.variant && (
                      <div className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full border border-neutral-300" style={{ backgroundColor: it.swatch }} />
                        Couleur : {it.variant}
                      </div>
                    )}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center border border-neutral-300 rounded">
                        <button onClick={() => updateQty(it.handle, it.variant, it.qty - 1)} className="w-7 h-7 hover:bg-neutral-100">−</button>
                        <span className="w-7 text-center text-sm">{it.qty}</span>
                        <button onClick={() => updateQty(it.handle, it.variant, it.qty + 1)} className="w-7 h-7 hover:bg-neutral-100">+</button>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{(it.price * it.qty).toFixed(2)} €</div>
                        <button onClick={() => removeItem(it.handle, it.variant)} className="text-xs text-neutral-500 hover:text-black mt-1">
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer - always visible */}
        <div className="shrink-0 border-t border-neutral-200 p-5 space-y-3 bg-white">
          <div className="flex justify-between text-sm">
            <span>Sous-total</span>
            <span className="font-semibold">{total.toFixed(2)} €</span>
          </div>
          <p className="text-xs text-neutral-500">Livraison gratuite · Taxes incluses</p>
          <button
            disabled={items.length === 0}
            onClick={() => goToFantomCheckout(items)}
            className="w-full bg-black text-white rounded-full py-4 font-bold tracking-wider uppercase text-[14px] hover:bg-neutral-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Commander
          </button>
        </div>
      </aside>
    </>
  );
}
