import Image from "next/image";
import { BsBagPlus } from "react-icons/bs";
import { baseUrl } from "../helpers/config/envConfig";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { storeCart } from "@/src/redux/features/product/productSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const images = JSON.parse(product?.images || "[]");
  const handleCart = (data: any) => {
    const productCart = {
      data: data,
      cart_count: 1,
    };
    dispatch(storeCart(productCart));
    toast("Product added in cart");
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden my-4 cursor-pointer relative">
      <Link href={`/product/${[product?.id]}/${product?.name}`}>
        <div className="relative w-full h-[200px]">
          <Image
            src={`${baseUrl()}${images[0]}`}
            className="h-[200px] w-full rounded-xl"
            sizes="100vw"
            layout="fill"
            objectFit="cover"
            alt={product?.name}
          />
          <div className=" text-sm absolute top-2 left-2 bg-green-500 text-white px-1 rounded-md">
            new
          </div>
        </div>
      </Link>
      <Link href={`/product/${[product?.id]}/${product?.name}`}>
        <div className="p-4">
          <p className="text-gray-600 mt-1 line-clamp-1">
            {product?.category?.name}
          </p>
          <h2 className="font-semibold line-clamp-2 mb-9">{product?.name}</h2>
        </div>
      </Link>
      <div className="absolute bottom-3 flex justify-between w-full items-center">
        <p className="text-yellow-500 pl-3">৳{product?.price}</p>
        <div
          onClick={() => handleCart(product)}
          className=" bg-yellow-400 w-10 h-9 cursor-pointer  rounded-l-md text-white flex items-center justify-center"
        >
          <BsBagPlus />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
