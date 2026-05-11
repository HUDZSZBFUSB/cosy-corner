import ProductDetails from "@/components/ProductDetails";
import PressMarquee from "@/components/PressMarquee";
import SalonSection from "@/components/SalonSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import ImageTextCta from "@/components/ImageTextCta";
import ScrollingFeatures from "@/components/ScrollingFeatures";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import EmailSignup from "@/components/EmailSignup";
import StickyAddToCart from "@/components/StickyAddToCart";
import RelatedProducts from "@/components/RelatedProducts";
import { product } from "@/lib/product";

export const metadata = {
  title: "3D Bubble Sofa Mini — Cosy Corner",
  description: "Le fauteuil 3D Bubble Sofa Mini. Tissu Techno 3D, pivotant 360°, plusieurs coloris. Livraison gratuite.",
};

export default function BubbleSofaMiniPage() {
  return (
    <>
      <ProductDetails product={product} />
      <PressMarquee />
      <SalonSection />
      <HowItWorks />
      <WhyChoose />
      <ImageTextCta />
      <ScrollingFeatures />
      <ReviewsCarousel product={product} />
      <FAQ product={product} />
      <TrustBadges />
      <EmailSignup />
      <RelatedProducts />
      <StickyAddToCart product={product} />
    </>
  );
}
