import BannerDiscount from "@/src/components/banner-discount";
import CarouselTextBanner from "@/src/components/carousel-text-banner";
import ChooseBrand from "@/src/components/choose-brands";
import FeaturedProducts from "@/src/components/featured-products";

export default async function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseBrand />
    </main>
  );
}
