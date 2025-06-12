import { Separator } from "@/src/components/ui/separator";

interface BrandHeaderProps {
  productLoading: boolean;
  productResult: any;
  brandResult: any;
  brandLoading: boolean;
}

const BrandHeader = ({
  productResult,
  productLoading,
  brandLoading,
  brandResult,
}: BrandHeaderProps) => {
  return (
    <div className="max-w-6xl py-4 mx-auto sm:px-22 sm:py-14">
      {!productLoading && productResult && productResult !== null && (
        <div>
          <h3 className="text-3xl font-medium inline-flex items-center">
            Productos de {productResult[0].brand.name}
            {!brandLoading && brandResult && brandResult !== null && (
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${brandResult.logo.url}`}
                className="inline-block h-8 w-auto ml-3"
              />
            )}
          </h3>

          <p className="text-gray-700 my-1 dark:text-foreground">
            Descubre la mejor selección de productos de{" "}
            {productResult[0].brand.name}.
          </p>
        </div>
      )}
      <Separator className="mt-4"/>
    </div>
  );
};

export default BrandHeader;
