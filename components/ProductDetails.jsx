"use client";

import { useState } from "react";
import { product as defaultProduct } from "@/lib/product";
import ProductGallery from "./ProductGallery";
import BundleSelector from "./BundleSelector";
import DeliveryTimeline from "./DeliveryTimeline";
import TrustPayment from "./TrustPayment";
import BuzzBanner from "./BuzzBanner";
import FeatureList from "./FeatureList";

export default function ProductDetails({ product = defaultProduct }) {
  const [variant, setVariant] = useState(product.variants[0]);

  const giftLabel = product.giftLabel || "Coussin décoratif coordonné";
  const giftDesc = product.giftDesc || "Offert avec chaque commande.";
  const giftImage = product.giftImage || "https://astrasale.com/cdn/shop/files/shopping_2.webp?v=1776557360";

  return (
    <div className="container-page py-6 md:py-10 overflow-x-hidden">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <ProductGallery images={product.gallery} activeImage={variant.image} />

        <div className="min-w-0">
          {/* Social proof */}
          <a href="#avis" className="inline-flex items-center gap-3 group">
            <div className="flex -space-x-2">
              {product.reviews.slice(0, 4).map((r, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={r.avatar} alt={r.name} className="w-8 h-8 rounded-full border-2 border-white object-cover bg-neutral-100" />
              ))}
            </div>
            <span className="text-sm text-neutral-700">
              <strong>{product.rating}/5</strong> basé sur <strong>+{product.reviewCount.toLocaleString("fr-FR")} achats</strong>
            </span>
          </a>

          <h1 className="mt-4 text-2xl md:text-4xl font-bold leading-tight">{product.title}</h1>

          {/* Price */}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-[#d0021b] font-bold text-lg md:text-xl">
              {product.price.toFixed(2).replace(".", ",")}€
            </span>
            <span className="text-neutral-400 line-through text-sm">
              {product.compareAtPrice.toFixed(2).replace(".", ",")}€
            </span>
            <span className="bg-neutral-200 text-black px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
              {product.badge}
            </span>
          </div>

          {/* Gift box */}
          <div className="mt-5 flex gap-3 items-center bg-white border border-dashed border-neutral-300 rounded-md p-3">
            <div className="w-14 h-14 shrink-0 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={giftImage} alt="Cadeau" className="w-12 h-12 object-contain rounded" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider">+1 CADEAU OFFERT</div>
              <p className="text-sm text-neutral-700 mt-0.5">
                <strong>{giftLabel}</strong> {giftDesc}
              </p>
            </div>
          </div>

          <FeatureList features={product.features} />

          <BundleSelector product={product} variant={variant} onVariantChange={setVariant} />

          <DeliveryTimeline />

          <TrustPayment />

          <BuzzBanner />

          {/* Accordion details */}
          <div className="mt-8 border-t border-neutral-200">
            {product.details.map((d, i) => (
              <details key={i} className="group border-b border-neutral-200">
                <summary className="py-4 flex items-center justify-between font-medium">
                  <span>{d.q}</span>
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="pb-5 text-sm text-neutral-700 leading-relaxed space-y-1">
                  {Array.isArray(d.a[0])
                    ? (
                      <ul className="space-y-1">
                        {d.a.map((row, j) => (
                          <li key={j}>
                            <strong>{row[0]} :</strong> {row[1]}
                          </li>
                        ))}
                      </ul>
                    )
                    : d.a.map((line, j) => <p key={j}>{line}</p>)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
