"use client";
import { useParams, useRouter } from "next/navigation";
import { useGetBrandProducts } from "../../../../../api/useGetBrandProducts";
import { ResponseType } from "../../../../../types/response";
import { useGetBrand } from "../../../../../api/useGetBrand";
import BrandProductList from "@/src/components/brand-product-list";
import BrandHeader from "./components/brand-header";

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
