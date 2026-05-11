"use client";

import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    img: "https://astrasale.com/cdn/shop/files/generated-image_8.png?v=1776587004&width=900",
    title: "Choisissez votre coloris",
    desc: "Plusieurs teintes disponibles pour coller à votre univers déco. Sélectionnez le vôtre directement sur la fiche.",
  },
  {
    img: "https://astrasale.com/cdn/shop/files/generated-image_5.png?v=1776586845&width=900",
    title: "Posez et orientez",
    desc: "Aucun montage, aucune contrainte. Pivotez à 360° selon vos envies.",
  },
  {
    img: "https://astrasale.com/cdn/shop/files/generated-image_7.png?v=1776586845&width=900",
    title: "Profitez",
    desc: "Installez-vous et laissez vos invités vous demander où vous l'avez trouvé.",
  },
];

export default function HowItWorks() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    function onScroll() {
      const cards = el.querySelectorAll("[data-card]");
      if (!cards.length) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let min = Infinity;
      cards.forEach((c, i) => {
        const mid = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(mid - center);
        if (d < min) { min = d; best = i; }
      });
      setCurrent(best + 1);
    }
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-10 md:py-16">
      <div className="container-page">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 md:mb-8">
          COMMENT ÇA MARCHE
        </h2>

        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth -mx-5 px-5 pb-2"
        >
          {CARDS.map((c, i) => (
            <article
              key={i}
              data-card
              className="shrink-0 snap-center w-[82%] sm:w-[55%] md:w-[calc((100%-3rem)/3)]"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 font-bold text-lg text-neutral-900">{c.title}</h3>
              <p className="text-[15px] text-neutral-500 mt-1.5 leading-relaxed">{c.desc}</p>
            </article>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-neutral-500 tabular-nums">
          {current} / {CARDS.length}
        </p>
      </div>
    </section>
  );
}
