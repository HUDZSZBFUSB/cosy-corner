export const metadata = {
  title: "Suivi de commande — Cosy Corner",
};

export default function SuiviPage() {
  return (
    <section className="container-page py-16 md:py-24 max-w-lg mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Suivi de commande</h1>
      <p className="text-neutral-500 text-center mb-10 text-[15px]">Entrez votre numéro de commande pour suivre votre livraison.</p>

      <form method="GET" action="#" className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-neutral-700">Numéro de commande</label>
          <input
            name="order"
            type="text"
            placeholder="ex. CC-12345"
            className="border border-neutral-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-neutral-700">Email</label>
          <input
            name="email"
            type="email"
            placeholder="vous@exemple.fr"
            className="border border-neutral-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <button type="submit" className="w-full bg-black text-white rounded-full py-4 font-bold tracking-wider uppercase text-[14px] hover:bg-neutral-800 transition mt-2">
          Suivre ma commande
        </button>
      </form>

      <p className="text-center text-[13px] text-neutral-500 mt-8">
        Besoin d&apos;aide ?{" "}
        <a href="/contact" className="underline hover:text-black">Contactez-nous</a>
      </p>
    </section>
  );
}
