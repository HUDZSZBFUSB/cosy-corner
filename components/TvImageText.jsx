const CDN = "https://astrasale.com/cdn/shop/files/";

const ROWS = [
  {
    img: `${CDN}gif1.webp`,
    badgeIcon: `${CDN}store-alert.svg`,
    badgeText: <>NOTÉ <strong>4,9/5</strong> PAR DES ACHETEURS VÉRIFIÉS</>,
    heading: "Votre téléviseur ne devrait pas rester confiné dans une seule pièce",
    body: (
      <>
        <p>Leviya vous offre un superbe <strong>écran 4K</strong> sur un <strong>socle portable</strong> que vous pouvez installer où vous le souhaitez, puis orienter en fonction de ce que vous regardez.</p>
        <p className="mt-3">Que ce soit pour préparer le dîner dans la cuisine ou pour vous détendre au lit, c'est la solution épurée et moderne pour profiter du <strong>streaming sans le fouillis des câbles</strong>.</p>
        <p className="mt-3">Posez-le, allumez-le, et transformez n'importe quel espace en <strong>la meilleure place de la maison</strong>.</p>
      </>
    ),
    reverse: false,
  },
  {
    img: `${CDN}gif2.webp`,
    badgeIcon: `${CDN}cart-arrow-up.svg`,
    badgeText: "Environ 1,500 commandes par jour",
    heading: "Pourquoi vous allez l'adorer",
    features: [
      { icon: `${CDN}4k.avif`,      title: "Affichage 4K Brillant",         desc: "32 pouces tactiles, image cristalline, couleurs éclatantes. Parfait pour les films, le gaming ou les appels vidéo." },
      { icon: `${CDN}magic.avif`,   title: "Design Ajustable et Portable",  desc: "Pivotez, inclinez, déplacez. L'écran s'adapte à votre espace en quelques secondes." },
      { icon: `${CDN}snap.avif`,    title: "Prêt en quelques secondes",     desc: "Pas d'installation, pas d'appareil supplémentaire. Allumez, connectez-vous au Wi-Fi et c'est parti." },
      { icon: `${CDN}connect.avif`, title: "Smart et Connecté",             desc: "YouTube, TikTok, Chrome et bien plus. Tout est accessible directement depuis Android." },
    ],
    reverse: true,
  },
];

export default function TvImageText() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container-page flex flex-col gap-16 md:gap-24">
        {ROWS.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col ${row.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-14 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={row.img} alt="" className="w-full h-auto object-cover" loading="lazy" />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-900 text-[13px] font-semibold px-3 py-1.5 rounded-md self-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={row.badgeIcon} alt="" className="w-4 h-4 object-contain shrink-0" />
                <span>{row.badgeText}</span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold leading-snug">{row.heading}</h2>

              {/* Body text or feature list */}
              {row.body && (
                <div className="text-[15px] text-neutral-700 leading-relaxed">{row.body}</div>
              )}
              {row.features && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {row.features.map((f, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.icon} alt="" className="w-10 h-10 object-contain shrink-0 mt-0.5" loading="lazy" />
                      <div>
                        <p className="text-[14px] font-bold text-neutral-900">{f.title}</p>
                        <p className="text-[13px] text-neutral-600 mt-0.5 leading-snug">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
