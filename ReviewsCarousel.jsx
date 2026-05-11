"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const TESTIMONIALS = [
  {
    name: "Jenna R.",
    text: "Acheté pour le style, converti par le confort. La mousse est moelleuse avec un bon maintien, la forme arrondie invite à s'y blottir. Zéro montage, utilisable le jour même.",
    image: "https://astrasale.com/cdn/shop/files/default_name_cd04c5d4-ec4d-46f0-a83a-5f6395eb7244.webp?v=1774666384",
  },
  {
    name: "Marco L.",
    text: "Enfin un fauteuil élégant ET confortable. Douillet sans paraître négligé, il s'intègre parfaitement dans mon salon. Mes invités le remarquent à chaque fois.",
    image: "https://astrasale.com/cdn/shop/files/default_name_6_cd105ed8-cfc6-4787-b37e-b10dcc16c422.webp?v=1774666384",
  },
  {
    name: "Ashley M.",
    text: "Idéal pour se détendre le soir. J'utilise ce fauteuil presque tous les soirs pour regarder la télévision ou lire. Il est très profond et offre un excellent soutien. Il m'est même arrivé de m'y assoupir à plusieurs reprises. Il est extrêmement confortable.",
    image: "https://astrasale.com/cdn/shop/files/default_name_1_12e7e6a3-8c0f-41fb-abcb-cc481ff38667.jpg?v=1774666384",
  },
  {
    name: "Dylan H.",
    text: "Sceptique au début, mais bluffé. Le rembourrage est ferme et qualitatif, rien de bon marché. Après quelques heures pour prendre sa forme, il était incroyablement confortable.",
    image: "https://astrasale.com/cdn/shop/files/default_name_5_6267bcac-d6cd-4835-80f2-d192cbcbe7d4.webp?v=1774666384",
  },
  {
    name: "Priya S.",
    text: "Très confortable une fois gonflé. Un peu plus long que prévu, mais le résultat est là : excellent maintien et look moderne. Je le recommande sans hésiter.",
    image: "https://astrasale.com/cdn/shop/files/default_name_3_5c7bf230-174e-498f-aaef-4440e04b0d44.webp?v=1774666471",
  },
  {
    name: "Lena B.",
    text: "Exactement ce que je voulais. Au début, le premier restait à l'étage, puis mon partenaire n'arrêtait pas de me le piquer. J'en ai commandé un autre et maintenant, on est tous les deux contents 😂",
    image: "https://astrasale.com/cdn/shop/files/default_name_2_d310634a-3cea-48fe-8bd2-328eba7ec83e.webp?v=1774666523",
  },
];

export default function ReviewsCarousel() {
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
