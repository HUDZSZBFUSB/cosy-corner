"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const CDN = "https://cdn.shopify.com/s/files/1/0996/5512/3321/files/";

const TESTIMONIALS = [
  {
    name: "Camille R.",
    text: "Dès son arrivée, mon salon est devenu un espace totalement différent. La forme est encore plus impressionnante en vrai qu'en photo.",
    image: `${CDN}hhh17.jpg?v=1777916050`,
  },
  {
    name: "Marc T.",
    text: "On tient à trois confortablement. La profondeur des coussins est incroyable. On n'est jamais retournés à notre ancien canapé.",
    image: `${CDN}hhh19.jpg?v=1777916050`,
  },
  {
    name: "Inès B.",
    text: "Tous ceux qui viennent chez moi me demandent d'où il vient. Le tissu est doux et la forme est introuvable ailleurs sur le marché.",
    image: `${CDN}hhh20.jpg?v=1777916050`,
  },
  {
    name: "Thomas D.",
    text: "Les deux coussins offerts sont parfaitement assortis. Une vraie attention aux détails. Je recommande sans hésitation.",
    image: `${CDN}hhh18.jpg?v=1777916050`,
  },
];

export default function ReviewsCarousel3Places() {
  return (
    <section id="avis" className="bg-white py-12 md:py-16">
      <div className="container-page">
        <p className="text-center text-[15px] md:text-[17px] font-bold uppercase tracking-[0.04em] text-neutral-900 mb-8 md:mb-10">
          Ce que disent plus de 40,000 clients
        </p>

        <Swiper
          modules={[FreeMode, Mousewheel]}
          freeMode={{ enabled: true, momentum: true }}
          mousewheel={{ forceToAxis: true }}
          grabCursor
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <article className="bg-white rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.13)] overflow-hidden flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col gap-2.5 flex-1">
                  <p className="text-[14px] leading-[1.55] text-neutral-700 m-0">{t.text}</p>
                  <div className="flex flex-col gap-1 mt-auto pt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#00b67a] text-[17px] tracking-wider leading-none">★★★★★</span>
                      <span className="text-[12px] font-semibold text-[#00b67a]">Vérifié</span>
                    </div>
                    <p className="text-[14px] font-bold text-neutral-900 m-0">{t.name}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
