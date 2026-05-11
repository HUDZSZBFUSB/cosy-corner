"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const VIDEOS = [
  { src: "https://cosycorner-3497.myshopify.com/cdn/shop/videos/c/vp/99b0b25149424b278632ace161588d6d/99b0b25149424b278632ace161588d6d.HD-720p-1.6Mbps-82674045.mp4" },
  { src: "https://cosycorner-3497.myshopify.com/cdn/shop/videos/c/vp/6226a0b7e0954082aa6eb51bb052119f/6226a0b7e0954082aa6eb51bb052119f.HD-1080p-2.5Mbps-82674046.mp4" },
  { src: "https://cosycorner-3497.myshopify.com/cdn/shop/videos/c/vp/dfc67adbb2284edebee057e451678a64/dfc67adbb2284edebee057e451678a64.HD-720p-1.6Mbps-82674047.mp4" },
  { src: "https://cosycorner-3497.myshopify.com/cdn/shop/videos/c/vp/8fe5ca44be554fd9a585421c2d84eead/8fe5ca44be554fd9a585421c2d84eead.HD-1080p-3.3Mbps-82674048.mp4" },
];

export default function VideoTestimonials() {
  const [playing, setPlaying] = useState(null);
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container-page">
        <h2 className="text-center text-[18px] md:text-2xl font-bold tracking-tight max-w-3xl mx-auto leading-snug px-4 mb-6 md:mb-8">
          <strong className="font-extrabold">N°1</strong> DES VENTES DANS{" "}
          <strong className="font-extrabold">+20</strong> PAYS PLUS DE{" "}
          <strong className="font-extrabold">40,000 CLIENTS SATISFAITS</strong>
        </h2>

        <Swiper
          modules={[FreeMode, Mousewheel]}
          freeMode={{ enabled: true, momentum: true }}
          mousewheel={{ forceToAxis: true }}
          grabCursor
          slidesPerView={2.2}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 3.2, spaceBetween: 12 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
          }}
        >
          {VIDEOS.map((v, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"
                style={{
                  background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(to bottom, #ff9a9e, #fad0c4) border-box",
                  border: "2px solid transparent",
                }}
                onClick={() => setPlaying(playing === i ? null : i)}
              >
                {/* Always render the video — preload="metadata" shows the first frame
                    sharply (no low-res poster) and only loads bytes when played. */}
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  src={v.src}
                  preload="metadata"
                  playsInline
                  muted
                  controls={playing === i}
                  autoPlay={playing === i}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {playing !== i && (
                  <button
                    aria-label="Play"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <span className="w-12 h-12 rounded-full bg-white/35 backdrop-blur-md flex items-center justify-center shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
