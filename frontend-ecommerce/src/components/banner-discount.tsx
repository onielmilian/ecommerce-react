import Link from "next/link";
import { Gem } from "lucide-react";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-20 text-center">
      <h2 className="uppercase text-2xl inline-flex items-center font-black text-primary bg-gray-300 dark:bg-background">
        ¡Oferta exclusiva en móviles! <span className="ml-2"><Gem strokeWidth={3}/></span>
      </h2>
      <h3 className="mt-3 font-semibold">
        Descuentos de hasta <b>30% OFF</b> en los últimos smartphones.
      </h3>
      <h3 className="mt-1 font-semibold">
        <b>Compra ahora </b>y disfruta de <b>envío gratis</b> +{" "}
        <b>garantía oficial</b>.
      </h3>

      <div className="max-w-md mx-auto flex justify-center gap-8 mt-8 ">
        <Link href="/products" className={`${buttonVariants()} transition duration-400 ease-in-out hover:scale-110`}>
          Comprar
        </Link>
        <Link href="#" className={`${buttonVariants({ variant: "outline" })} transition duration-400 ease-in-out hover:scale-110`}>
          Más información
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
