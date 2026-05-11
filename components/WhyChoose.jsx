export default function WhyChoose() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container-page space-y-10 md:space-y-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.postimg.cc/wBbmGzq7/Gemini-Generated-Image-bks425bks425bks4.png?v=1775177652&width=1200"
            alt="Pourquoi choisir Cosy Corner"
            className="w-full h-[360px] md:h-[500px] object-contain rounded-lg"
          />
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-neutral-600 mb-4">
              <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center">✓</span>
              Reconnu dans plus de 20 pays
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">POURQUOI CHOISIR Cosy Corner ?</h2>
            <p className="text-neutral-700 leading-relaxed">
              Cosy Corner est né d'une simple frustration : il existe d'excellents produits, mais ils sont presque toujours hors de prix ou impossibles à trouver au même endroit.
            </p>
            <p className="text-neutral-700 leading-relaxed mt-3">
              Nous avons donc créé la boutique dont nous avons toujours rêvé. Un seul endroit, des produits triés sur le volet, un véritable rapport qualité-prix et un cadeau gratuit dans chaque colis, parce que c'est tout simplement notre philosophie.
            </p>
            <p className="text-neutral-700 leading-relaxed mt-3">
              Avec plus de 40 000 clients à notre actif, nous continuons de faire exactement cela.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center md:[&>*:first-child]:order-last">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.postimg.cc/ydc8yCkD/Gemini-Generated-Image-7vo0mf7vo0mf7vo0.png"
            alt=""
            className="w-full h-[360px] md:h-[500px] object-cover rounded-lg"
          />
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-neutral-600 mb-4">
              <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center">♡</span>
              Vous êtes entre de bonnes mains
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Voici ce sur quoi vous pouvez toujours compter</h2>
            <ul className="space-y-4">
              {[
                { t: "Plus de 40 000 avis vérifiés à travers le monde", i: "★" },
                { t: "Livraison express gratuite pour chaque commande", i: "✈" },
                { t: "Garantie de remboursement de 30 jours, sans condition", i: "✓" },
                { t: "Reconnu dans plus de 20 pays", i: "🌍" },
              ].map((f, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-9 h-9 shrink-0 rounded-full bg-neutral-100 flex items-center justify-center text-sm">
                    {f.i}
                  </span>
                  <p className="text-neutral-800 pt-1">{f.t}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
