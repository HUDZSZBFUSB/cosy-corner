import Link from "next/link";
import Hero from "@/components/Hero";
import PressMarquee from "@/components/PressMarquee";
import EmailSignup from "@/components/EmailSignup";

const PRODUCTS = [
  {
    handle: "bubble-sofa-mini",
    href: "/products/bubble-sofa-mini",
    title: "3D Bubble Sofa Mini",
    subtitle: "Pivotant 360° · Tissu Techno 3D",
    price: 29.9,
    compare: 49.99,
    tag: "Bestseller",
    image: "https://cdn.shopify.com/s/files/1/0996/5512/3321/files/generated-image_15.png?v=1776879786",
  },
  {
    handle: "bubble-sofa-3-places",
    href: "/products/bubble-sofa-3-places",
    title: "3D Bubble Sofa 3 Places",
    subtitle: "238 cm · 3 personnes · Tissu Techno 3D",
    price: 29.9,
    compare: 49.99,
    tag: "Nouveau",
    image: "https://cdn.shopify.com/s/files/1/0996/5512/3321/files/hhh01_2.png?v=1777925909",
  },
  {
    handle: "fauteuil-nuage-rond",
    href: "/products/fauteuil-nuage-rond",
    title: "Fauteuil Nuage Rond",
    subtitle: "Forme ronde · Mousse mémoire de forme",
    price: 29.9,
    compare: 49.99,
    tag: null,
    image: "/products/nuage-rond/01.png",
  },
  {
    handle: "leviya-tv",
    href: "/products/leviya-tv",
    title: "TV 4K Portable",
    subtitle: "Écran tactile 81 cm · Android OS · 6h autonomie",
    price: 29.99,
    compare: 119.0,
    tag: "Déstockage",
    image: "https://astrasale.com/cdn/shop/files/tv1.png",
  },
];

export const metadata = {
  title: "Cosy Corner — Mobilier design & tech pour votre intérieur",
  description: "Bubble Sofa, Fauteuil Nuage Rond, TV 4K Portable. Livraison gratuite, retours 30 jours.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressMarquee />

      <section className="bg-white py-14 md:py-20">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Nos produits</h2>
          <p className="text-center text-neutral-500 text-[15px] mb-10">Design, confort et livraison gratuite.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PRODUCTS.map((p) => (
              <Link key={p.handle} href={p.href} className="group flex flex-col rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="relative aspect-square bg-neutral-50 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  {p.tag && (
                    <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-black text-white px-2 py-1 rounded">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="font-bold text-[14px] leading-tight">{p.title}</p>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-snug">{p.subtitle}</p>
                  <div className="mt-auto pt-3 flex items-baseline gap-2">
                    <span className="font-bold text-[15px]">{p.price.toFixed(2).replace(".", ",")} €</span>
                    <span className="text-[12px] text-neutral-400 line-through">{p.compare.toFixed(2).replace(".", ",")} €</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EmailSignup />
    </>
  );
}
