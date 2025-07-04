"use client";

import { Expand, ShoppingCart, Star } from "lucide-react";
import SkeletonSchema from "./skeleton-schema";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "@/src/components/product-card";
import { ResponseType } from "@/src/types/response";
import { useGetFeaturedProducts } from "@/src/api/useGetFeaturedProducts";
import { ProductType } from "@/src/types/product";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3
        className="px-6 text-3xl sm:pb-8 inline-flex items-center transition duration-300 ease-in-out hover:scale-110"
        style={{ transformOrigin: "center center" }}
      >
        Productos destacados{" "}
        <span className="ml-2 mt-2">
          <Star />
        </span>
      </h3>
      <Carousel>
        <CarouselContent>
          {loading && <SkeletonSchema grid={3} />}

          {result !== null &&
            result.map((product: ProductType) => {
              const { documentId } = product;

              return (
                <CarouselItem
                  key={documentId}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1 mx-auto">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="text-primary hover:text-primary cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115" />
        <CarouselNext className="text-primary hover:text-primary cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115 hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
