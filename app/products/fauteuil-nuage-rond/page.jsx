import ProductDetails from "@/components/ProductDetails";
import PressMarquee from "@/components/PressMarquee";
import SalonSection from "@/components/SalonSection";
import HowItWorks from "@/components/HowItWorks";
import UnboxingSteps from "@/components/UnboxingSteps";
import ScrollingFeatures from "@/components/ScrollingFeatures";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import EmailSignup from "@/components/EmailSignup";
import StickyAddToCart from "@/components/StickyAddToCart";
import { nuageRondProduct } from "@/lib/products/nuage-rond";

export const metadata = {
  title: "Fauteuil Nuage Rond — Cosy Corner",
  description: "Le Fauteuil Nuage Rond. Forme ronde enveloppante, tissu Techno 3D, pivotant 360°. Livraison gratuite.",
};

export default function NuageRondPage() {
  return (
    <>
      <ProductDetails product={nuageRondProduct} />
      <PressMarquee />
      <SalonSection />
      <HowItWorks />
      <UnboxingSteps steps={nuageRondProduct.steps} />
      <ScrollingFeatures />
      <ReviewsCarousel product={nuageRondProduct} />
      <FAQ product={nuageRondProduct} />
      <TrustBadges />
      <EmailSignup />
      <StickyAddToCart product={nuageRondProduct} />
    </>
  );
}
