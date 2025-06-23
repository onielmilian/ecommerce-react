import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { ProductType } from "@/src/types/product";
import { useCart } from "@/src/hooks/use-cart";
import { useGetCurrency } from "@/src/hooks/useGetCurrency";
import { cn } from "@/src/lib/utils";

interface CartItemProps {
  product: ProductType;
}

const CartItem = ({ product }: CartItemProps) => {
  const router = useRouter();
  const { removeItem } = useCart();

  const currencyParsed = useGetCurrency(product);

  return (
    <li className="flex py-6 border-b">
      <div
        onClick={() => router.push(`/products/${product.slug}`)}
        className="cursor-pointer"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.image.url}`}
          alt="product"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="font-bold">
            {product.price}
            {currencyParsed}
          </p>

          <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-background bg-foreground rounded-full w-fit">
              {product.color}
            </p>
          </div>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-foreground border shadow-md p-1 hover:scale-110 transition duration-300"
            )}
          >
            <X
              size={20}
              onClick={() => removeItem(product.id)}
              color="background"
            />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
