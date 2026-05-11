import Link from "next/link";

export default function ImageTextCta() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.shopify.com/s/files/1/0996/5512/3321/files/bubble_fauteuil_120_pers1_F169_2.webp?v=1776879785"
          alt="Livraison rapide"
          className="w-full rounded-lg object-cover aspect-[4/3]"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Livraison rapide et Gratuite</h2>
          <p className="text-neutral-700 leading-relaxed">
            Contrairement à d'autres marques, nous disposons d'un stock permanent, ce qui nous permet de vous livrer votre commande en quelques jours, et non en plusieurs mois.
          </p>
          <p className="text-neutral-700 leading-relaxed mt-3">
            De plus, elle vous est livrée dans des cartons d'expédition standard, et non par un service de fret coûteux.
          </p>
          <Link href="/products/bubble-sofa-mini" className="btn-primary mt-6">
            Acheter maintenant
          </Link>
        </div>
      </div>
    </section>
  );
}
