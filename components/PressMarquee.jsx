import { pressLogos } from "@/lib/product";

export default function PressMarquee({ title = "VU DANS" }) {
  const logos = [...pressLogos, ...pressLogos];
  return (
    <section className="bg-[#f9f9f9] py-6 md:py-8">
      <h2 className="text-center font-bold text-[13px] md:text-[15px] tracking-wide mb-3">{title}</h2>
      <div className="overflow-hidden">
        <div className="flex items-center gap-12 animate-marquee-slow w-max">
          {logos.map((l, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={l.src}
              alt={l.name}
              className="h-6 md:h-8 w-auto opacity-80 shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
