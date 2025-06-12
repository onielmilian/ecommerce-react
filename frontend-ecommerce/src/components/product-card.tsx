import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { Card, CardContent } from "./ui/card";
import { ProductType } from "../../types/product";
import { useGetCurrency } from "../../hooks/useGetCurrency";
import { useRouter } from "next/navigation";
import { useCart } from "../../hooks/use-cart";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { documentId, name, price, image, slug, color } = product;
  const currencyParsed = useGetCurrency(product);
  const { addItem } = useCart();

  const router = useRouter();

  return (
    <Card
      className="py-4 border-none sm:border dark:border-none border-gray-200 group"
      key={documentId}
    >
      <CardContent className="relative flex items-center justify-center px-6 py-2 h-[250px] w-full">
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
          alt="Imagen de producto destacado"
          className="h-full w-full object-contain max-h-full max-w-full"
        />
        <div className="absolute w-full px-6 transition duration-200 sm:opacity-0 sm:group-hover:opacity-100 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => router.push(`/products/${product.slug}`)}
              icon={<Expand size={20} />}
              className="text-gray-600 z-99"
            />
            <IconButton
              onClick={() => addItem(product)}
              icon={<ShoppingCart size={20} />}
              className="text-gray-600 z-99"
            />
          </div>
        </div>
      </CardContent>
      <div className="flex items-center justify-between px-2">
        <h3 className="text-sm font-bold">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm px-2 py-1 bg-foreground text-background rounded-full w-fit">
            {color}
          </p>
          <p className="text-sm mx-4 text-gray-900 dark:text-foreground">
            {currencyParsed}
            <b className="font-semibold text-gray-900 dark:text-foreground">
              {" "}
              {price}
            </b>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
