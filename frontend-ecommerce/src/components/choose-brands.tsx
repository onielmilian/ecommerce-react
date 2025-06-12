"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandType } from "../../types/brand";
import { ResponseType } from "../../types/response";
import { useGetBrands } from "../../api/useGetBrands";
import { Sparkles } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import BrandCarousel from "./brand-carousel";

const ChooseBrand = () => {

  return (
    <div className="max-w-6xl mx-auto py-4 sm:py-14 sm:px-24">
      <h3 className="px-6 mb-4 text-3xl sm:pb-8 inline-flex items-center transition duration-300 ease-in-out hover:scale-110">
        Selecciona la marca que más te gusta{" "}
        <span className="ml-2 mt-2">
          <Sparkles />
        </span>
      </h3>

      <BrandCarousel />

    </div>
  );
};

export default ChooseBrand;
