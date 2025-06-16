"use client";

import ProductCard from "@/src/components/product-card";
import { ProductType } from "../../types/product";

interface ProductListClientProps {
  products: ProductType[];
}

const ProductListClient = ({ products }: ProductListClientProps) => {
  return (
    <div className="grid gap-5 mx-auto max-w-[340px] sm:grid-cols-2 sm:max-w-2xl lg:grid-cols-3 lg:max-w-5xl ">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};

export default ProductListClient;
