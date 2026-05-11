"use client";

import { useCart } from "@/lib/cart-context";

const RELATED = [
  {
    handle: "bubble-sofa-3-places",
    title: "3D Bubble Sofa 3 Places",
    price: 39.9,
    compare: 99.99,
    image: "https://cdn.shopify.com/s/files/1/0996/5512/3321/files/Gemini_Generated_Image_ciq88ociq88ociq8.png?v=1776879786",
    tag: "Bestseller",
  },
  {
    handle: "protection-livraison",
    title: "Protection lors de la livraison",
    price: 5.0,
    compare: null,
    image: "https://cdn.shopify.com/s/files/1/0996/5512/3321/files/shipping-protection.png?v=1776944958",
    tag: "Recommandé",
  },
];

export default function RelatedProducts() {
  const { addItem } = useCart();
  return (
    <section className="container-page py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Complétez votre commande</h2>
      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {RELATED.map((p) => (
          <article key={p.handle} className="group border border-neutral-200 rounded-xl overflow-hidden bg-white flex flex-col">
            <div className="aspect-[4/3] bg-neutral-50 relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition" />
              {p.tag && (
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-black text-white px-2 py-1 rounded">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold">{p.title}</h3>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-bold">{p.price.toFixed(2).replace(".", ",")}€</span>
                {p.compare && (
                  <span className="text-xs text-neutral-400 line-through">{p.compare.toFixed(2).replace(".", ",")}€</span>
                )}
              </div>
              <button
                onClick={() => addItem({ handle: p.handle, title: p.title, price: p.price, image: p.image, qty: 1 })}
                className="btn-secondary mt-4 w-full"
              >
                Ajouter
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
