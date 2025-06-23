"use client";
import { useParams, useRouter } from "next/navigation";
import BrandHeader from "./components/brand-header";
import BrandProductList from "@/src/components/brand-product-list";
import { ResponseType } from "@/src/types/response";
import { useGetBrand } from "@/src/api/useGetBrand";
import { useGetBrandProducts } from "@/src/api/useGetBrandProducts";

const Page = () => {
  const params = useParams();
  const { brandSlug } = params;
  const {
    result: productResult,
    loading: productLoading,
    error: productError,
  }: ResponseType = useGetBrandProducts(brandSlug as string | string[]);
  const {
    result: brandResult,
    loading: brandLoading,
    error: brandError,
  }: ResponseType = useGetBrand(brandSlug as string);

  const router = useRouter();

  return (
    <>
      <BrandHeader
        brandLoading={brandLoading}
        brandResult={brandResult}
        productLoading={productLoading}
        productResult={productResult}
      />
      <BrandProductList
        productLoading={productLoading}
        productResult={productResult}
      />
    </>
  );
};

export default Page;
