"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";

function pad(n) { return String(n).padStart(2, "0"); }

function useMidnightCountdown() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  if (now === null) return "00:00:00";
  const d = new Date(now);
  const midnight = new Date(d);
  midnight.setHours(24, 0, 0, 0);
  const s = Math.max(0, Math.floor((midnight - d) / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

function ColorSelect({ value, onChange, variants, label = "Couleur" }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className="text-[13px] text-neutral-600 mb-1.5">{label}</div>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-40 flex items-center justify-between rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm hover:border-neutral-500"
        >
          <span className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full border border-neutral-300"
              style={{ background: value.swatch }}
            />
            {value.name}
          </span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {open && (
          <div className="absolute z-20 mt-1 w-40 max-h-64 overflow-y-auto bg-white border border-neutral-200 rounded-md shadow-lg">
            {variants.map((v) => (
              <button
                key={v.name}
                type="button"
                onClick={() => { onChange(v); setOpen(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50"
              >
                <span
                  className="w-4 h-4 rounded-full border border-neutral-300"
                  style={{ background: v.swatch }}
                />
                {v.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BundleSelector({ product, variant, onVariantChange }) {
  const hasColors = product.hasColorVariants !== false;
  const bundle = product.bundle || {
    x1Price: product.price, x1Compare: product.compareAtPrice,
    x2Price: product.price * 2 - 10, x2Compare: product.compareAtPrice * 2,
    x2Badge: "-10€ supplémentaires",
  };

  const BUNDLES = [
    { id: "x1", qty: 1, label: product.title, price: bundle.x1Price, compare: bundle.x1Compare, badge: null },
    { id: "x2", qty: 2, label: product.title, price: bundle.x2Price, compare: bundle.x2Compare, badge: bundle.x2Badge },
  ];

  const [selected, setSelected] = useState("x1");
  const [variant2, setVariant2] = useState(
    product.variants.find((v) => v.name !== variant.name) || product.variants[0]
  );
  const { addItem } = useCart();
  const time = useMidnightCountdown();

  function add() {
    const current = BUNDLES.find((b) => b.id === selected);
    if (selected === "x1") {
      addItem({
        handle: product.handle,
        title: product.title,
        variant: hasColors ? variant.name : undefined,
        swatch: hasColors ? variant.swatch : undefined,
        price: current.price,
        image: variant.image,
        qty: 1,
      });
    } else {
      const unit = current.price / 2;
      const titleX2 = `${product.title} (pack × 2)`;
      addItem({
        handle: product.handle,
        title: titleX2,
        variant: hasColors ? variant.name : undefined,
        swatch: hasColors ? variant.swatch : undefined,
        price: unit,
        image: variant.image,
        qty: 1,
      });
      addItem({
        handle: product.handle,
        title: titleX2,
        variant: hasColors ? variant2.name : undefined,
        swatch: hasColors ? variant2.swatch : undefined,
        price: unit,
        image: hasColors ? variant2.image : variant.image,
        qty: 1,
      });
    }
  }

  return (
    <div className="mt-6 w-full">
      {/* Countdown banner */}
      <div
        className="rounded-xl text-center py-3 px-4 text-[14px] font-semibold text-neutral-900"
        style={{ backgroundColor: "#FFF5D7" }}
      >
        Achetez plus, économisez – fin dans{" "}
        <span className="font-bold tabular-nums">{time}</span>
      </div>

      {/* Bundle options */}
      <div className="mt-4 w-full space-y-3">
        {BUNDLES.map((b) => {
          const active = selected === b.id;
          return (
            <div
              key={b.id}
              role="radio"
              aria-checked={active}
              tabIndex={0}
              onClick={() => setSelected(b.id)}
              onKeyDown={(e) => (e.key === " " || e.key === "Enter") && setSelected(b.id)}
              className={`w-full text-left rounded-2xl px-5 py-5 bg-white transition cursor-pointer ${
                active ? "border-2 border-black" : "border border-neutral-200 hover:border-neutral-400"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`mt-0.5 w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
                    active ? "border-black" : "border-neutral-300"
                  }`}
                >
                  {active && <span className="w-2.5 h-2.5 rounded-full bg-black" />}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-bold text-[18px] leading-tight text-neutral-900">
                      x{b.qty} {b.label}
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-[18px] leading-tight text-neutral-900">
                        €{b.price.toFixed(2).replace(".", ",")}
                      </div>
                      <div className="text-[13px] text-neutral-400 line-through leading-tight mt-0.5">
                        €{b.compare.toFixed(2).replace(".", ",")}
                      </div>
                    </div>
                  </div>

                  {b.badge && (
                    <div className="mt-2">
                      <span className="inline-block text-[12px] bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                        {b.badge}
                      </span>
                    </div>
                  )}

                  {hasColors && active && b.id === "x1" && (
                    <div className="mt-3">
                      <ColorSelect value={variant} onChange={onVariantChange} variants={product.variants} />
                    </div>
                  )}

                  {hasColors && active && b.id === "x2" && (
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <ColorSelect value={variant} onChange={onVariantChange} variants={product.variants} label="Couleur 1" />
                      <ColorSelect value={variant2} onChange={setVariant2} variants={product.variants} label="Couleur 2" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={add}
        className="btn-atc mt-5 w-full rounded-full py-5 font-bold tracking-wider uppercase text-[15px] flex items-center justify-center gap-3 transition"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 8h13l-1.2 8.2a2 2 0 01-2 1.8H8.2a2 2 0 01-2-1.8L5 8z" />
          <path d="M9 8V6a3 3 0 016 0v2" />
        </svg>
        Ajouter au panier
      </button>
    </div>
  );
}
