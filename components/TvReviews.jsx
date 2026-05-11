"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const CDN = "https://astrasale.com/cdn/shop/files/";

const REVIEWS = [
  { name: "Jeanne S.", image: `${CDN}r1.jpg`, text: "Je ne pensais pas que j'utiliserais le mode portrait… et pourtant, je m'en sers tous les jours. Je l'ai acheté pour sa portabilité, mais l'écran vertical est un vrai plus inattendu. Les vidéos d'entraînement et de recettes sont bien plus faciles à suivre. L'image est également d'une netteté exceptionnelle." },
  { name: "Marco L.",  image: `${CDN}r2.jpg`, text: "Idéal pour mon petit appartement. Je n'ai pas la place pour installer un gros téléviseur fixe, et je déteste avoir des câbles partout. Ce modèle est épuré et je peux le déplacer de mon canapé à mon lit en quelques secondes." },
  { name: "Pierre T.", image: `${CDN}r5.jpg`, text: "J'étais sceptique à cause du prix. Je ne vais pas mentir, je m'attendais à un produit de mauvaise qualité. Il est arrivé rapidement, bien emballé, et la qualité de l'écran est tout à fait correcte pour le streaming. L'installation a été plus simple que celle de mon ancienne smart TV." },
  { name: "Dylan H.",  image: `${CDN}r6.jpg`, text: "Je la pose près du plan de travail quand je cuisine. Je la mets à la verticale pour regarder des vidéos étape par étape, puis je la retourne pour regarder une émission pendant que je mange. C'est le genre d'achat qui me fait me dire : « Pourquoi n'y ai-je pas pensé plus tôt ? »" },
  { name: "Sarah I.",  image: `${CDN}r8.jpg`, text: "Avec Android TV, c'est tout simple. Je ne voulais pas d'une nouvelle interface bizarre. Celle-ci me semble familière, les applications sont faciles à installer et le système mémorise mes préférences. Ça fonctionne très bien avec mon haut-parleur Bluetooth aussi." },
  { name: "Thierry B.", image: `${CDN}r9.jpg`, text: "J'en ai acheté un… puis un deuxième. Le premier est resté à l'étage, mais mon partenaire n'arrêtait pas de me le piquer pour l'emmener au bureau. J'en ai commandé un autre et maintenant, on est tous les deux contents 😂" },
];

export default function TvReviews() {
  return (
    <section id="avis" className="bg-white py-12 md:py-16">
      <div className="container-page">
        <p className="text-center text-[15px] md:text-[17px] font-bold uppercase tracking-[0.04em] text-neutral-900 mb-8 md:mb-10">
          Ce que disent plus de 25,000 clients
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
            1024: { slidesPerView: 4 },
          }}
        >
          {REVIEWS.map((r, i) => (
            <SwiperSlide key={i}>
              <article className="bg-white rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.13)] overflow-hidden flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col gap-2.5 flex-1">
                  <p className="text-[14px] leading-[1.55] text-neutral-700 m-0">{r.text}</p>
                  <div className="flex flex-col gap-1 mt-auto pt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#00b67a] text-[17px] tracking-wider leading-none">★★★★★</span>
                      <span className="text-[12px] font-semibold text-[#00b67a]">Vérifié</span>
                    </div>
                    <p className="text-[14px] font-bold text-neutral-900 m-0">{r.name}</p>
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
