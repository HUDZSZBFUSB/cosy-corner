"use client";

import { useRef, useState } from "react";

const CDN = "//astrasale.com/cdn/shop/files/";

const STEPS = [
  {
    img: `${CDN}Capture_d_ecran_2026-02-07_a_17.36.30.webp`,
    title: "Placez-le où vous voulez",
    desc: "Déplacez l'écran où bon vous semble. Dans la cuisine, la chambre, sur votre bureau ou votre canapé. Il suffit de le poser et de commencer à regarder.",
  },
  {
    img: `${CDN}Capture_d_ecran_2026-02-07_a_17.36.38.webp`,
    title: "Connectez-vous et regardez",
    desc: "Allumez-le, connectez-vous au Wi-Fi et ouvrez vos applications préférées. Tout est prêt en quelques secondes.",
  },
  {
    img: `${CDN}Capture_d_ecran_2026-02-07_a_17.36.50.webp`,
    title: "Restez connecté",
    desc: "Regardez des séries, naviguez sur Internet ou passez des appels vidéo. Faites pivoter l'écran et contrôlez-le d'un simple toucher.",
  },
];

export default function TvHowItWorks() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const startX = useRef(0);

  function onTouchStart(e) {
    startX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    const dx = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) < 40) return;
    if (dx > 0) setActive((p) => Math.min(p + 1, STEPS.length - 1));
    else setActive((p) => Math.max(p - 1, 0));
  }

  return (
    <section className="bg-[#efeefd] py-10 md:py-16">
      <div className="container-page">
        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10">COMMENT ÇA FONCTIONNE</h2>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[16px] text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-[14px] text-neutral-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div
            ref={trackRef}
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(calc(-${active * 100}% - ${active * 16}px))` }}
            >
              {STEPS.map((step, i) => (
                <div key={i} className="w-full shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm mr-4">
                  <div className="aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[16px] text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-[14px] text-neutral-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[#6c6ef7]" : "w-2 bg-neutral-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
