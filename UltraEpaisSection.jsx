const FEATURES = [
  {
    icon: "https://astrasale.com/cdn/shop/files/eau.webp?v=1774663549&width=200",
    title: "Confort rond et enveloppant",
    desc: "Un siège surdimensionné et enveloppant qui permet à tout votre corps de se détendre.",
  },
  {
    icon: "https://astrasale.com/cdn/shop/files/magic_2.avif?v=1774663549&width=200",
    title: "Sans affaissement",
    desc: "La mousse à ressorts intégrés reste moelleuse et soutenante sans s'écraser ni perdre sa forme.",
  },
  {
    icon: "https://astrasale.com/cdn/shop/files/tissu.avif?v=1774663549&width=200",
    title: "Tissu ultra-doux",
    desc: "Une matière confortable et douce pour la peau, agréable et accueillante.",
  },
  {
    icon: "https://astrasale.com/cdn/shop/files/croix-cercle.avif?v=1774663549&width=200",
    title: "Zéro montage",
    desc: "Déballez simplement, laissez gonfler et profitez d'un confort total.",
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

export default function UltraEpaisSection() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container-page space-y-12">
        {/* Row 1: Image (Ultra-Épais) | Heading + description */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons-nuage/ultra-epais.png"
            alt="Ultra-Épais Ultra-Confortable"
            className="w-full rounded-2xl object-cover aspect-square"
          />
          <div>
            <Badge icon="https://astrasale.com/cdn/shop/files/store-alert.svg?v=1773884427&width=100">
              NOTÉ <strong className="ml-1">4,9/5</strong>
              <span>&nbsp;PAR DES ACHETEURS VÉRIFIÉS</span>
            </Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
              Le fauteuil dont vous ne voudrez jamais vous lever
            </h2>
            <div className="space-y-3 text-neutral-700 leading-relaxed">
              <p>
                La plupart des <strong>fauteuils d'appoint</strong> sont esthétiques… mais rigides et oubliables.
                <br />
                Ce <strong>fauteuil rond en mousse</strong> vous invite à <strong>vous enfoncer, vous étirer et vraiment vous détendre</strong>.
              </p>
              <p>
                Pensé pour <strong>se prélasser, lire ou faire la sieste</strong>, il offre un <strong>confort instantané</strong> sans outils ni montage.
                <br />
                Les clients confirment qu'il devient leur <strong>place préférée dès le premier jour</strong>.
                <br />
                Une fois installé chez vous, <strong>tout le reste semble superflu</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: 4 features grid (image right, content left) */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <Badge icon="https://astrasale.com/cdn/shop/files/cart-arrow-up.svg?v=1773885779&width=100">
              Environ <strong className="ml-1">1 500+</strong>
              <span>&nbsp;commandes</span>
              <strong className="ml-1">par jour</strong>
            </Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5 leading-tight">
              Pourquoi vous allez adorer ce fauteuil
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
            src="https://astrasale.com/cdn/shop/files/snaptik_7514480942912884014_v3_1.webp?v=1774665956&width=1200"
            alt=""
            className="w-full rounded-2xl object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
