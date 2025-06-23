import { Skeleton } from "@/src/components/ui/skeleton";

const SkeletonProduct = () => {
  return (
    <div className=" max-w-[900px] py-4 px-4 mx-auto sm:py-8 sm:px-24">
      <div className="grid sm:grid-cols-2  ">
        <div className="rounded-xl h-[200px] mb-4">
          <Skeleton className="h-[200px] w-[200px] rounded-xl" />
        </div>
        <div className="sm:px-4 grid space-y-2 ">
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-3/5 rounded-xl" />
            <Skeleton className="h-8 w-2/5 rounded-xl" />
          </div>
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-full rounded-xl" />
          <Skeleton className="h-6 w-1/5 rounded-xl" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-5/5 rounded-xl" />
            <Skeleton className="h-8 w-1/5 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
