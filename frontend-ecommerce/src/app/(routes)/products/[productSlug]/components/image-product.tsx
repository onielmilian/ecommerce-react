
interface ImageProductProps {
  imageUrl: string
}

const ImageProduct = ({imageUrl}: ImageProductProps) => {
  return (
    <div className="rounded-xl h-[200px] mb-4">
      <img
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`}
        className="h-full w-full object-contain max-h-full max-w-full"
      />
    </div>
  );
};

export default ImageProduct;
