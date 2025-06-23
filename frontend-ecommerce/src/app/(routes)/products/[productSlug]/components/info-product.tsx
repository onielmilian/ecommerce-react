import { Separator } from "@/src/components/ui/separator";
import { ProductType } from "../../../../../types/product";
import { useGetCurrency } from "../../../../../../hooks/useGetCurrency";
import { Button } from "@/src/components/ui/button";
import { Heart, HeartCrack } from "lucide-react";
import InfoProductDetail from "./info-product-detail";
import { useLovedProducts } from "../../../../../../hooks/use_loved_products";

interface InfoProductProps {
  product: ProductType;
}

const InfoProduct = ({ product }: InfoProductProps) => {
  const currency = useGetCurrency(product);
  const { addLovedItem } = useLovedProducts();

  return (
    <div>
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="px-2 py-1 text-xs text-background bg-foreground rounded-full">
            {product.color}
          </p>
          <p className="px-2 py-1 text-xs">{product.brand.name}</p>
        </div>
      </div>
      <Separator className="my-4" />

      <InfoProductDetail product={product} />

      <Separator className="my-4" />
      <p className="my-4 text-xl">
        {currency}
        {product.price}
      </p>
      <div className="flex items-center gap-5 cursor-pointer">
        <Button className="w-4/5" onClick={() => {}}>
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1.5}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLovedItem(product)}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
