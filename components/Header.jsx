"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";

const LINKS = [
  { href: "/products/bubble-sofa-mini", label: "Bubble Sofa Mini" },
  { href: "/products/bubble-sofa-3-places", label: "Bubble Sofa 3 Places" },
  { href: "/products/fauteuil-nuage-rond", label: "Fauteuil Nuage Rond" },
  { href: "/products/leviya-tv", label: "TV 4K Portable" },
  { href: "/pages/suivi", label: "Suivi de commande" },
  { href: "/#avis", label: "Avis" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-neutral-100">
        <div className="container-page relative flex items-center h-14 md:h-16">
          {/* Left: hamburger */}
          <button
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(true)}
            className="p-2 -ml-2 hover:opacity-70"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Center: logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-black text-[22px] tracking-[-0.03em] uppercase leading-none select-none">ScreenLab</span>
          </Link>

          {/* Right: cart */}
          <button
            aria-label="Panier"
            onClick={() => setOpen(true)}
            className="relative p-2 -mr-2 ml-auto hover:opacity-70"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 4h2.4l2.7 12.3a2 2 0 001.95 1.57h7.9a2 2 0 001.95-1.57L21.5 8H6" />
              <circle cx="10" cy="20.5" r="1.3" fill="currentColor" stroke="none" />
              <circle cx="17" cy="20.5" r="1.3" fill="currentColor" stroke="none" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                {count}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Menu drawer (left) */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed inset-y-0 left-0 w-80 max-w-[85%] bg-white z-50 shadow-2xl transition-transform flex flex-col ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ height: "100vh", maxHeight: "100dvh" }}
      >
        <div className="shrink-0 flex items-center justify-between px-5 h-14 border-b border-neutral-200">
          <span className="font-black text-[18px] tracking-[-0.03em] uppercase leading-none">ScreenLab</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Fermer" className="p-1 hover:opacity-70">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 min-h-0 overflow-y-auto py-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-5 py-4 text-[15px] hover:bg-neutral-50 border-b border-neutral-100"
            >
              <span>{l.label}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
