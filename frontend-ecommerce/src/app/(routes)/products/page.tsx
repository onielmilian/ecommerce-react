import { getProducts } from "@/src/api/getProducts";
import { PaginationComponent } from "@/src/components/pagination-component";
import ProductListClient from "@/src/components/product-list-client";
import { Search } from "@/src/components/search";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?:
    | { page?: string; query?: string }
    | Promise<{ page?: string; query?: string }>;
}) {
  const params = await searchParams;

  const query = params?.query ?? "";
  const currentPage = params?.page ? Number(params.page) : 1;

  const { data, meta } = await getProducts(query, currentPage);
  const pageCount = meta?.pagination?.pageCount ?? 1;

  if (!data) return null;
  console.log("data: ", data);

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <Search />
      <ProductListClient products={data} />
      <PaginationComponent pageCount={pageCount} />
    </div>
  );
}
