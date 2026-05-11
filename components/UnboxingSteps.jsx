export default function UnboxingSteps({ steps }) {
  if (!steps || !steps.length) return null;
  return (
    <section className="py-12 md:py-16 bg-neutral-50">
      <div className="container-page">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-neutral-500 mb-3">
            <span className="w-6 h-px bg-neutral-300" />
            Étapes de déballage
            <span className="w-6 h-px bg-neutral-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            En 3 étapes, prêt à l'emploi
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-7">
          {steps.map((s) => (
            <article
              key={s.n}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col"
            >
              <div className="aspect-square bg-neutral-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-semibold">
                  Étape {s.n}
                </div>
                <h3 className="mt-1 text-lg font-bold text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-[14px] text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
