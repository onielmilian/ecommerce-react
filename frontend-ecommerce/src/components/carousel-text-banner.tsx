"use client";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import { Card, CardContent } from "@/src/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const dataCarouselBanner = [
  {
    id: 1,
    title: "¡Lleva la última tecnología en tu bolsillo!",
    description:
      "Descubre los smartphones más innovadores con ofertas exclusivas. Calidad y potencia al mejor precio.",
    link: "/productos/nuevos-lanzamientos",
  },
  {
    id: 2,
    title: "Renueva tu móvil hoy",
    description:
      "Aprovecha descuentos increíbles en modelos top y accesorios originales. ¡Tu nuevo teléfono te espera!",
    link: "/ofertas",
  },
  {
    id: 3,
    title: "Smartphones para todos los estilos",
    description:
      "Desde cámaras profesionales hasta baterías de larga duración. Encuentra el móvil perfecto para ti.",
    link: "/categorias/smartphones",
  },
  {
    id: 4,
    title: "Compra segura y envío rápido",
    description:
      "Disfruta de la mejor experiencia de compra con garantía oficial y entrega en 24 horas.",
    link: "/envios-y-garantias",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          {dataCarouselBanner.map(({ id, title, description, link }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(`/${link}`)}
              className="cursor-pointer"
            >
              <Card className="shadow-none border-none bg-transparent">
                <CardContent className="flex flex-col justify-center items-center text-center">
                  <p className="sm:text-lg text-wrap dark:text-secondary">
                    {title}
                  </p>
                  <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
