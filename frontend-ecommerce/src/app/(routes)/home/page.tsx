import BannerDiscount from "../../../components/banner-discount";
import CarouselTextBanner from "../../../components/carousel-text-banner";
import ChooseBrand from "../../../components/choose-brands";
import FeaturedProducts from "../../../components/featured-products";

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
