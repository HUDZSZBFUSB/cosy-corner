export default function AnnouncementBar() {
  return (
    <div className="w-full bg-gradient-to-br from-white to-neutral-50 border-b border-neutral-200">
      <div className="flex items-center justify-center gap-1.5 px-4 py-1 text-[10px] uppercase font-bold text-black whitespace-nowrap">
        <span>Excellent</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://astrasale.com/cdn/shop/files/stars-5_1.svg?v=1773456288&width=200"
          alt="5 étoiles Trustpilot"
          className="h-2.5 w-auto shrink-0"
        />
        <span className="font-bold uppercase tracking-wide text-[12px] md:text-[13px]">
          4,4/5 SUR PLUS DE 40 000 AVIS
        </span>
      </div>
    </div>
  );
}
