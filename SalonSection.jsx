const FEATURES = [
  {
    icon: "https://astrasale.com/cdn/shop/files/svgviewer-output_98.svg?v=1775008489&width=200",
    title: "Des formes qui font tourner les têtes.",
    desc: "Silhouette ronde et enveloppante, lignes organiques et souples.",
  },
  {
    icon: "https://astrasale.com/cdn/shop/files/svgviewer-output_86_1.svg?v=1775175344&width=200",
    title: "Pivotant à 360°.",
    desc: "Orientez-le vers la télé ou vers vos invités selon votre humeur.",
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

export default function SalonSection() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container-page space-y-10 md:space-y-14">
        {/* Row 1: Sofa image | Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://astrasale.com/cdn/shop/files/ezgif-7a43b301bd70d05b.webp?v=1776578453&width=1200"
            alt="Le Cosy Corner"
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
              <p>Votre salon a du style. Mais il manque la pièce dont tout le monde parle.</p>
              <p>
                <strong>Le Cosy Corner</strong> est cette pièce. Des formes rondes et généreuses, un tissu Techno 3D au toucher unique, une base pivotante à 360°. Il transforme n'importe quel espace en salon de design.
              </p>
              <p className="font-semibold text-neutral-900">
                Un fauteuil. Un statement. Zéro compromis.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Content (with 4 features) | Image (reversed) */}
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
            src="https://astrasale.com/cdn/shop/files/ezgif-72f5e484c2c082e5.webp?v=1776578450&width=1200"
            alt="Détails"
            className="w-full rounded-lg object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
