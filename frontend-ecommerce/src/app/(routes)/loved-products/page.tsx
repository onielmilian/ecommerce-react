"use client";
import { useLovedProducts } from "@/src/hooks/use_loved_products";
import LovedItem from "./components/loved-item";

const Page = () => {
  const { lovedItems, removeAllLovedItems } = useLovedProducts();

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:py-8">
      <h1 className="mb-5 text-3xl font-bold">Productos favoritos</h1>

      <div>
        <div>
          {lovedItems.length === 0 && (
            <p>No hay productos en tu lista de favoritos</p>
          )}
          <ul>
            {lovedItems.map((item) => (
              <LovedItem product={item} key={item.id}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
