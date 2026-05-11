export default function ScrollingFeatures() {
  const items = [
    { t: "LIVRAISON GRATUITE", icon: (
      <svg viewBox="0 0 50 50" fill="none" className="w-6 h-6">
        <path d="M25 2L18.3 4.7C15.3 6.3 11.1 8.1 5 9.6c.2 14.4 5.2 23.9 10.2 29.8 4.8 5.6 9.1 7.8 9.8 8.1 1.3-.7 19.6-10.9 20-38-6.1-1.4-10.3-3.3-13.3-4.8C28.5 3.1 26.6 2 25 2z" fill="#000" fillOpacity=".1"/>
        <path d="M32.7 14.6L24 28.1 18.7 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
    { t: "PAIEMENT SÉCURISÉ", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ) },
    { t: "SATISFAIT OU REMBOURSÉ", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ) },
  ];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <section className="bg-neutral-50 border-y border-neutral-200 py-3 overflow-hidden">
      <div className="flex items-center gap-10 animate-marquee w-max">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide whitespace-nowrap">
            {it.icon}
            <span>{it.t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
