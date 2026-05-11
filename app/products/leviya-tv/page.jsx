import ProductDetails from "@/components/ProductDetails";
import PressMarquee from "@/components/PressMarquee";
import TvImageText from "@/components/TvImageText";
import TvHowItWorks from "@/components/TvHowItWorks";
import ScrollingFeatures from "@/components/ScrollingFeatures";
import TvReviews from "@/components/TvReviews";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import EmailSignup from "@/components/EmailSignup";
import StickyAddToCart from "@/components/StickyAddToCart";
import { leviyaTvProduct } from "@/lib/products/leviya-tv";

export const metadata = {
  title: "TV 4K Portable — Cosy Corner",
  description: "La TV 4K Portable. Écran tactile 81 cm, Android OS, autonomie 6h. Stylet tactile offert, livraison gratuite.",
};

export default function LeviyaTvPage() {
  return (
    <>
      <ProductDetails product={leviyaTvProduct} />
      <PressMarquee />
      <TvImageText />
      <TvHowItWorks />
      <ScrollingFeatures />
      <TvReviews />
      <FAQ product={leviyaTvProduct} />
      <TrustBadges />
      <EmailSignup />
      <StickyAddToCart product={leviyaTvProduct} />
    </>
  );
}
