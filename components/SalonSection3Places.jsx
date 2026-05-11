const FEATURES = [
  {
    icon: "https://astrasale.com/cdn/shop/files/svgviewer-output_98.svg?v=1775008489&width=200",
    title: "3 places en confort total.",
    desc: "238 cm de générosité, des coussins profonds et enveloppants. Inoubliable.",
  },
  {
    icon: "https://astrasale.com/cdn/shop/files/svgviewer-output_86_1.svg?v=1775175344&width=200",
    title: "Design arrondi iconique.",
    desc: "Lignes organiques et formes sculptées qui transforment n'importe quelle pièce.",
  },
  {
    icon: "https://astrasale.com/cdn/shop/files/svgviewer-output_89.svg?v=1775175343&width=200",
    title: "Tissu Techno 3D premium.",
    desc: "Doux, texturé, résistant. Un revêtement qui change tout au toucher.",
  },
  {
    icon: "https://astrasale.com/cdn/shop/files/svgviewer-output_35.svg?v=1774641184&width=200",
    title: "Une couleur pour chaque intérieur.",
    desc: "Large palette de coloris pour s'intégrer parfaitement chez vous.",
  },
];

function Badge({ icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-900 text-[13px] font-medium px-3 py-1.5 rounded-md mb-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" className="w-5 h-5 object-contain shrink-0" />
      <span>{children}</span>
    </div>
  );
}

export default function SalonSection3Places() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container-page space-y-10 md:space-y-14">
        {/* Row 1: Sofa image | Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://astrasale.com/cdn/shop/files/ezgif-59668b8eac590cc7.webp?v=1776556517&width=1200"
            alt="Astra 3D Bubble Sofa 3 Places"
            className="w-full rounded-lg object-cover aspect-square"
          />
          <div>
            <Badge icon="https://astrasale.com/cdn/shop/files/svgviewer-output_8.svg?v=1774641364&width=100">
              PLUS DE 10 200 VENDUS CETTE SEMAINE
            </Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
              VOTRE SALON A DU STYLE. MAIS IL MANQUE LA PIÈCE DONT TOUT LE MONDE PARLE.
            </h2>
            <div className="space-y-3 text-neutral-700 leading-relaxed">
              <p>La plupart des canapés font leur travail. Ils s'assoient, ils fonctionnent, ils disparaissent dans la pièce.</p>
              <p>
                <strong>Le 3D Bubble Sofa 3 Places</strong> fait l'inverse. Inspiré du design Bubble iconique, il accueille 3 personnes dans un confort total sur 238 cm de luxe organique et arrondi.
              </p>
              <p className="font-semibold text-neutral-900">
                Un canapé. Une transformation totale. Zéro compromis.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Content (with 4 features) | Image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <Badge icon="https://astrasale.com/cdn/shop/files/cart-arrow-up.svg?v=1773885779&width=100">
              Environ <strong className="ml-1">1 500+</strong>
              <span>&nbsp;commandes</span>
              <strong className="ml-1">par jour</strong>
            </Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5 leading-tight">
              POURQUOI VOUS ALLEZ L'ADORER
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.icon} alt="" className="w-7 h-7 object-contain" />
                  <div>
                    <div className="font-bold text-[14px] text-neutral-900 leading-snug">{f.title}</div>
                    <p className="text-[13px] text-neutral-600 leading-snug mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://astrasale.com/cdn/shop/files/ezgif-3fe4a218d83c84fb.webp?v=1776556516&width=1200"
            alt="Détails 3D Bubble Sofa 3 Places"
            className="w-full rounded-lg object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
