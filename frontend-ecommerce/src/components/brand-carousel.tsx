import Link from "next/link";
import { BrandType } from "../../types/brand";
import SkeletonSchema from "./skeleton-schema";
import { useGetBrands } from "../../api/useGetBrands";
import { ResponseType } from "../../types/response";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import React from "react";

export function BrandCarousel() {
  const { result, loading, error }: ResponseType = useGetBrands();

  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {loading && <SkeletonSchema grid={4} />}
        {!loading &&
          result.map((brand: BrandType) => {
            const { documentId, slug, logo, image, website, name } = brand;
            return (
              <CarouselItem
                key={documentId}
                className="md:basis-1/2 lg:basis-1/3 group"
              >
                <div
                  className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg group"
                  key={documentId}
                >
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${logo.url}`}
                      alt={logo.alternativeText}
                      className="absolute rounded-full top-3 left-3 w-8 h-8 z-10 transition duration-300 ease-in-out hover:scale-120"
                    />
                  </a>
                  <Link href={`/brand/${slug}`}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                      alt={image.alternativeText}
                      className="max-w-[270] transition duration-300 ease-in-out rounded-lg group-hover:scale-110"
                    />
                    <p className="absolute w-full py-2 bottom-5 text-white text-center backdrop-blur-lg">
                      {name}
                    </p>
                  </Link>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselPrevious className="text-primary hover:text-primary cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115"/>
      <CarouselNext className="text-primary hover:text-primary cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115 hidden md:flex" />
    </Carousel>
  );
}

export function CarouselPlugin() {}

export default BrandCarousel;
