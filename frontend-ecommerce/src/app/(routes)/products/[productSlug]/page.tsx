"use client";
import { useParams, useRouter } from "next/navigation";
import { ResponseType } from "../../../../types/response";
import { useGetProduct } from "../../../../api/getProduct";
import SkeletonProduct from "@/src/components/skeleton-product";
import ImageProduct from "./components/image-product";
import InfoProduct from "./components/info-product";

const Page = () => {
  const params = useParams();
  const { productSlug } = params;
  const { result, loading, error }: ResponseType = useGetProduct(
    productSlug as string
  );
  if (result !== null && !loading) {
    console.log(result);
  }
  if (result === null) {
    return <SkeletonProduct />;
  }

  return (
    !loading &&
    result !== null && (
      <div className="max-w-[900px] py-4 px-4 mx-auto sm:py-8 sm:px-24 ">
        <div className="grid sm:grid-cols-2">
          <ImageProduct imageUrl={result.image.url} />
          <div className="sm:px-4 ">
            <InfoProduct product={result} />
          </div>
        </div>
      </div>
    )
  );
};
export default Page;
