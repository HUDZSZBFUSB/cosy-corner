import { product as defaultProduct } from "@/lib/product";

export default function FAQ({ product = defaultProduct }) {
  return (
    <section id="faq" className="bg-neutral-50 py-12 md:py-16">
      <div className="container-page max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">QUESTIONS FRÉQUENTES</h2>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200 bg-white rounded-md">
          {product.faq.map((f, i) => (
            <details key={i} className="group px-5 py-4">
              <summary className="flex items-center justify-between gap-4 font-medium">
                <span>{f.q}</span>
                <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
