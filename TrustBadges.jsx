export default function TrustBadges() {
  const items = [
    {
      t: "Livraison gratuite",
      d: "Livraison à domicile dans toute l'Europe",
      i: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          <rect x="1" y="5" width="15" height="12" rx="1"/>
          <path d="M16 9h4l3 4v4h-7z"/>
          <circle cx="6" cy="18" r="2"/>
          <circle cx="18" cy="18" r="2"/>
        </svg>
      ),
    },
    {
      t: "Garantie du meilleur prix",
      d: "Nous avons les meilleurs prix du marché.",
      i: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          <path d="M12 2l9 4v6c0 5-3.5 9.5-9 10-5.5-.5-9-5-9-10V6l9-4z"/>
          <path d="M8 12l3 3 5-6"/>
        </svg>
      ),
    },
    {
      t: "Échange en toute simplicité",
      d: "Sans poser de questions",
      i: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
          <path d="M4 4v6h6"/>
          <path d="M20 20v-6h-6"/>
          <path d="M5 10a7 7 0 0112-3l3 3"/>
          <path d="M19 14a7 7 0 01-12 3l-3-3"/>
        </svg>
      ),
    },
    {
      t: "Avis 5 étoiles",
      d: "La satisfaction client est notre priorité n° 1",
      i: (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="https://astrasale.com/cdn/shop/files/stars-5_1.svg?v=1773456288&width=200"
          alt=""
          className="h-5 w-auto"
        />
      ),
    },
  ];
  return (
    <section className="container-page py-10 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-3">{it.i}</div>
            <div className="font-bold text-sm">{it.t}</div>
            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
