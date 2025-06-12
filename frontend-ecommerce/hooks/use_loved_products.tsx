import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "../types/product";
import { toast } from "sonner";

interface UseLovedProductsProps {
  lovedItems: ProductType[];
  addLovedItem: (data: ProductType) => void;
  removeLovedItem: (id: number) => void;
  removeAllLovedItems: () => void;
}

export const useLovedProducts = create(
  persist<UseLovedProductsProps>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingLovedItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingLovedItem) {
          return toast("El producto ya está en tu lista de favoritos 💔");
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });
        toast("Producto añadido a tu lista de favoritos ❤️‍🔥");
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        toast("Producto eliminado de tu lista de favoritos 💔");
      },

      removeAllLovedItems: () => {
        set({
          lovedItems: [],
        });
        toast("Se han eliminado todos los productos de la lista");
      },
    }),
    {
      name: "loved-products",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
