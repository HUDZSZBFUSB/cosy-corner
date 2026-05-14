const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7 text-neutral-700">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
        <path d="M9 9h.01M15 9h.01" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
    title: "Des formes qui font tourner les têtes.",
    desc: "Silhouette ronde et enveloppante, lignes organiques et souples.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7 text-neutral-700">
        <path d="M12 2a10 10 0 1 0 10 10" strokeLinecap="round" />
        <path d="M22 2l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Pivotant à 360°.",
    desc: "Orientez-le vers la télé ou vers vos invités selon votre humeur.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7 text-neutral-700">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3H8L2 7h20l-6-4z" strokeLinejoin="round" />
      </svg>
    ),
    title: "Tissu Techno 3D premium.",
    desc: "Doux, texturé, résistant. Un revêtement qui change tout au toucher.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7 text-neutral-700">
        <circle cx="6.5" cy="6.5" r="3.5" />
        <circle cx="17.5" cy="6.5" r="3.5" />
        <circle cx="6.5" cy="17.5" r="3.5" />
        <circle cx="17.5" cy="17.5" r="3.5" />
      </svg>
    ),
    title: "Une couleur pour chaque intérieur.",
    desc: "Large palette de coloris pour s'intégrer parfaitement chez vous.",
  },
];

function Badge({ icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-900 text-[13px] font-medium px-3 py-1.5 rounded-md mb-4">
      <span className="shrink-0">{icon}</span>
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
            src="/poster1.jpg"
            alt="Le Cosy Corner"
            className="w-full rounded-lg object-cover aspect-square"
          />
          <div>
            <Badge icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            }>
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
            <Badge icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 8h13l-1.2 8.2a2 2 0 01-2 1.8H8.2a2 2 0 01-2-1.8L5 8z" />
                <path d="M9 8V6a3 3 0 016 0v2" />
                <path d="M12 3v2" strokeLinecap="round" />
              </svg>
            }>
              Environ <strong className="ml-1">1 500+</strong>
              <span>&nbsp;commandes</span>
              <strong className="ml-1">par jour</strong>
            </Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5 leading-tight">
              POURQUOI VOUS ALLEZ L&apos;ADORER
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {f.icon}
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
            src="/poster2.jpg"
            alt="Détails"
            className="w-full rounded-lg object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
