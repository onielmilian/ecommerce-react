"use client";
import { Separator } from "@/src/components/ui/separator";
import { useCart } from "../../../../hooks/use-cart";
import { Button } from "@/src/components/ui/button";
import CartItem from "./components/cart-item";

const Page = () => {
  const { items, removeAll } = useCart();

  const prices = items.map((product) => product.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:py-8">
      <h1 className="mb-5 text-3xl font-bold">Carrito de compras</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p>No hay productos en el carrito</p>}

          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item}/>
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-200 dark:bg-background">
            <p className="mb-3 text-lg font-semibold">Orden de compra</p>
            <Separator />

            <div className="flex justify-between gap-5 my-4">
              <p>Monto total</p>
              <p>{totalPrice}$</p>
            </div>

            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" onClick={() => console.log('/buy')} >Comprar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
