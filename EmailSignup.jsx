"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-14 md:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white">
          {/* Background sofa image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.shopify.com/s/files/1/0996/5512/3321/files/bubble_fauteuil_120_pers1_F169_2.webp?v=1776879785"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />

          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-14">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/70 mb-4">
                <span className="w-6 h-px bg-white/60" />
                Newsletter
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Rejoignez la famille <span className="text-white/80">ScreenLab</span>
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed max-w-md">
                Soyez les premiers informés des nouvelles collections, des offres
                spéciales, et recevez <strong className="text-white">10% de remise</strong> sur votre première commande.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {[
                  "Accès anticipé aux nouveaux coloris",
                  "Offres privées réservées aux abonnés",
                  "Livraison offerte sur la 1ʳᵉ commande",
                ].map((t, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div className="flex items-center">
              <div className="w-full rounded-2xl bg-white/10 backdrop-blur p-6 md:p-7 border border-white/15">
                {done ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold">Merci, c'est noté !</p>
                    <p className="text-white/60 text-sm mt-1">Votre code arrive par email.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email) setDone(true);
                    }}
                    className="space-y-3"
                  >
                    <label className="block text-xs uppercase tracking-wider text-white/60">
                      Votre e-mail
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                      <input
                        type="email"
                        required
                        placeholder="vous@exemple.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 pl-11 pr-4 rounded-full border border-white/25 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-white/70 focus:bg-white/10 transition"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-white text-black rounded-full h-12 font-bold tracking-wider uppercase text-[13px] hover:bg-white/90 transition"
                    >
                      Je m'inscris
                    </button>
                    <p className="text-[11px] text-white/50 leading-relaxed">
                      En vous inscrivant, vous acceptez de recevoir nos e-mails marketing.
                      Vous pouvez vous désinscrire à tout moment.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
