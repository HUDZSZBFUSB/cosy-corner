import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[680px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.shopify.com/s/files/1/0996/5512/3321/files/generated-image_15.png?v=1776879786"
          alt="Cosy Corner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 text-center px-5">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight drop-shadow-sm max-w-3xl text-white" style={{ color: "#ffffff" }}>
            Le fauteuil qui donne du caractère à votre salon
          </h1>
          <p className="mt-3 max-w-xl text-sm md:text-base opacity-90 text-white" style={{ color: "#ffffff" }}>
            Formes rondes · Pivotant 360° · Tissu Techno 3D
          </p>
          <Link href="/products/bubble-sofa-mini" className="btn-primary mt-6 bg-white text-black hover:bg-neutral-100">
            Acheter maintenant
          </Link>
        </div>
      </div>
    </section>
  );
}
