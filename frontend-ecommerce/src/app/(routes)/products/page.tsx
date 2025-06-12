// src/app/products/page.tsx
import { Search } from "@/src/components/search";
import { getProducts } from "../../../../api/getProducts";
import { ProductType } from "../../../../types/product";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import ReactMarkdown from "react-markdown";
import { PaginationComponent } from "../../../components/pagination-component";

interface LinkCardProps {
  documentId: string;
  name: string;
  description: string;
}

function LinkCard({ documentId, name, description }: Readonly<LinkCardProps>) {
  return (
    <Link href={`/dashboard/summaries/${documentId}`}>
      <Card className="relative">
        <CardHeader>
          <CardTitle className="leading-8 text-pink-500">
            {name || "Video Summary"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="card-markdown prose prose-sm max-w-none
            prose-headings:text-gray-900 prose-headings:font-semibold
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-4
            prose-ol:list-decimal prose-ol:pl-4">
            <ReactMarkdown>
              {description.slice(0, 164) + " [read more]"}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string } | Promise<{ page?: string; query?: string }>;
}) {
  const params = await searchParams;

  const query       = params?.query ?? "";
  const currentPage = params?.page ? Number(params.page) : 1;

  const { data, meta } = await getProducts(query, currentPage);
  const pageCount      = meta?.pagination?.pageCount ?? 1;

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <Search />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item: ProductType) => (
          <LinkCard key={item.documentId} {...item} />
        ))}
      </div>

      <PaginationComponent pageCount={pageCount} />
    </div>
  );
}