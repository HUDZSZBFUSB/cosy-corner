import ProductDetails from "@/components/ProductDetails";
import PressMarquee from "@/components/PressMarquee";
import SalonSection3Places from "@/components/SalonSection3Places";
import HowItWorks3Places from "@/components/HowItWorks3Places";
import ScrollingFeatures from "@/components/ScrollingFeatures";
import ReviewsCarousel3Places from "@/components/ReviewsCarousel3Places";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import EmailSignup from "@/components/EmailSignup";
import StickyAddToCart from "@/components/StickyAddToCart";
import { bubbleSofa3PlacesProduct } from "@/lib/products/bubble-sofa-3-places";

export const metadata = {
  title: "3D Bubble Sofa 3 Places — Cosy Corner",
  description: "Le canapé 3D Bubble Sofa 3 Places. 238 cm, tissu Techno 3D, large palette de coloris. Livraison gratuite.",
};

export default function BubbleSofa3PlacesPage() {
  return (
    <>
      <ProductDetails product={bubbleSofa3PlacesProduct} />
      <PressMarquee />
      <SalonSection3Places />
      <HowItWorks3Places />
      <ScrollingFeatures />
      <ReviewsCarousel3Places product={bubbleSofa3PlacesProduct} />
      <FAQ product={bubbleSofa3PlacesProduct} />
      <TrustBadges />
      <EmailSignup />
      <StickyAddToCart product={bubbleSofa3PlacesProduct} />
    </>
  );
}
