const DEFAULT_FEATURES = [
  "Des formes qui font tourner les têtes · Silhouette ronde et enveloppante, lignes organiques. On ne s'en lasse pas.",
  "Pivotant à 360° · Orientez-le vers la télé, la fenêtre ou vos invités. Il suit votre humeur.",
  "Tissu Techno 3D premium · Doux, texturé, résistant. Un revêtement qui change tout au toucher et au regard.",
  "Une couleur pour chaque intérieur · Large palette de coloris pour s'intégrer parfaitement à votre décor.",
];

function splitFeature(line) {
  const i = line.indexOf("·");
  if (i < 0) return { title: line.trim(), desc: "" };
  return { title: line.slice(0, i).trim(), desc: line.slice(i + 1).trim() };
}

export default function FeatureList({ features = DEFAULT_FEATURES }) {
  const items = features.map((f) =>
    typeof f === "string" ? splitFeature(f) : f
  );

  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((f, i) => (
        <li key={i} className="flex gap-2.5 items-start">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 mt-1 shrink-0 text-neutral-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
          <p className="text-[14px] leading-snug text-neutral-800">
            <span className="font-semibold text-neutral-900">{f.title}</span>
            {f.desc && (
              <>
                {" "}
                <span className="text-neutral-600">· {f.desc}</span>
              </>
            )}
          </p>
        </li>
      ))}
    </ul>
  );
}
