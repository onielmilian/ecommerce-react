import SkeletonSchema from "@/src/components/skeleton-schema";
import ProductCard from "@/src/components/product-card";
import { ProductType } from "@/src/types/product";

interface ProductListProps {
  productResult: any;
  productLoading: boolean;
}

const BrandProductList = ({
  productResult,
  productLoading,
}: ProductListProps) => {
  return (
    <div className=" grid gap-5 mx-auto max-w-[340px] sm:grid-cols-2 sm:max-w-2xl lg:grid-cols-3 lg:max-w-5xl ">
      {productLoading && <SkeletonSchema grid={3} />}
      {!productLoading && productResult && productResult !== null && (
        <>
          {productResult.map((product: ProductType) => {
            return <ProductCard key={product.documentId} product={product} />;
          })}
        </>
      )}
    </div>
  );
};

export default BrandProductList;
