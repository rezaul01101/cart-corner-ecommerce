import Image from "next/image";
import Product1 from "@/public/assets/images/product1.jpg";
import { baseUrl } from "../helpers/config/envConfig";
import Link from "next/link";

const ProductCard = ({ product }: any) => {
  const images = JSON.parse(product?.images || "[]");
  return (
    <Link href={`/product/${[product?.id]}/${product?.name}`} className="bg-white shadow-md rounded-lg overflow-hidden my-4 cursor-pointer">
      <div className="relative w-full h-[200px]">
        <Image
          src={`${baseUrl()}${images[0]}`}
          className="h-[200px] w-full rounded-xl"
          sizes="100vw"
          layout="fill"
          objectFit="cover"
          alt={product?.name}
        />
        <div className=" text-sm absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full">
          NEW
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mt-1 line-clamp-1">{product?.category?.name}</p>
        <h2 className="font-semibold line-clamp-2">{product?.name}</h2>
        <p className="mt-1">${product?.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
