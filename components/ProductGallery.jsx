"use client";

import { useEffect, useRef, useState } from "react";

export default function ProductGallery({ images, activeImage, tintColor }) {
  const [index, setIndex] = useState(0);
  const wheelTimer = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    if (activeImage) {
      const i = images.indexOf(activeImage);
      if (i >= 0) setIndex(i);
    }
  }, [activeImage, images]);

  // Desktop: scroll wheel
  function handleWheel(e) {
    e.preventDefault();
    const dir = e.deltaY > 0 ? 1 : -1;
    clearTimeout(wheelTimer.current);
    wheelTimer.current = setTimeout(() => {
      setIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    }, 50);
  }

  // Mobile: swipe
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }
  function handleTouchEnd(e) {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return;
    if (dx > 0) setIndex((p) => Math.min(p + 1, images.length - 1));
    else setIndex((p) => Math.max(p - 1, 0));
  }

  return (
    <div className="w-full min-w-0 md:sticky md:top-20">

      {/* ── Mobile carousel with peek ── */}
      <div className="md:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(calc(-${index * 88}% - ${index * 8}px))` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="relative shrink-0 overflow-hidden bg-neutral-50 cursor-pointer select-none"
              style={{ width: "86%", marginRight: "4%" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-auto block pointer-events-none" />
              {tintColor && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: tintColor, mixBlendMode: "multiply", opacity: 0.85 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-black" : "w-1.5 bg-neutral-300"}`}
            />
          ))}
        </div>
      </div>

      {/* ── Desktop: scroll wheel + thumbnails ── */}
      <div className="hidden md:block">
        <div
          className="relative w-full bg-neutral-50 rounded-lg overflow-hidden cursor-ns-resize select-none"
          onWheel={handleWheel}
          style={{ touchAction: "none" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[index]} alt="" className="w-full h-auto block pointer-events-none" />
          {tintColor && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: tintColor, mixBlendMode: "multiply", opacity: 0.85 }}
            />
          )}
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-[11px] px-2 py-1 rounded-full pointer-events-none select-none">
            {index + 1} / {images.length}
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition ${
                i === index ? "border-black" : "border-transparent"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-full object-cover" />
              {tintColor && (
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: tintColor, mixBlendMode: "multiply", opacity: 0.85 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
