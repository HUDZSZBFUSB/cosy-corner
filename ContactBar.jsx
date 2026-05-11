export default function ContactBar() {
  return (
    <div className="w-full border-b border-neutral-200 bg-white">
      <a
        href="/contact"
        className="flex items-center justify-center gap-2 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black hover:text-neutral-500 transition"
      >
        <span>Besoin d'aide ? Contactez-nous</span>
        <span>→</span>
      </a>
    </div>
  );
}
