import { pressLogos } from "@/lib/product";

export default function PressMarquee({ title = "VU DANS" }) {
  const logos = [...pressLogos, ...pressLogos, ...pressLogos];
  return (
    <section className="bg-[#f9f9f9] py-6 md:py-8 overflow-hidden border-y border-neutral-200">
      <h2 className="text-center font-bold text-[11px] md:text-[13px] tracking-widest uppercase text-neutral-400 mb-4">
        {title}
      </h2>
      <div className="overflow-hidden">
        <div className="flex items-center gap-10 animate-marquee-slow w-max">
          {logos.map((l, i) => (
            <span
              key={i}
              className="text-[15px] md:text-[17px] font-black tracking-tight text-neutral-300 shrink-0 select-none uppercase"
            >
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
