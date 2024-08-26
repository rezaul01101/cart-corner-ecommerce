
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { baseUrl } from "../helpers/config/envConfig";

const ShortProductCart = ({product,removeHandle}:any) => {
    const images = JSON.parse(product?.data?.images || "[]"); 
  return (
    <div className="flex items-center my-4">
      <div className="relative w-[60px] h-[60px] mr-1 p-1 border rounded-sm">
        <Image
          src={`${baseUrl()}${images[0]}`}
          className="h-[60px] w-full rounded-xl"
          sizes="100vw"
          layout="fill"
          objectFit="contain"
          alt="product name"
        />
        <div onClick={()=>removeHandle(product)} className=" text-sm absolute -top-2 left-0 bg-red-500 text-white px-1 rounded-md cursor-pointer">
          X
        </div>
      </div>
      <div className="w-2/3">
        <p className="font-bold text-md line-clamp-1">
          {product?.data?.name}
        </p>
        <p className="text-sm text-yellow-500">৳{product?.data?.price}</p>
      </div>
      <div className="w-8 flex flex-col items-center justify-center">
        <div className="text-white w-6 h-6 bg-yellow-400 flex items-center justify-center text-sm rounded-full cursor-pointer">
          <FaMinus />
        </div>
        <div className="text-sm w-5 flex items-center justify-center">{product?.cart_count}</div>
        <div className="text-white w-6 h-6 bg-yellow-400 flex items-center justify-center text-sm rounded-full cursor-pointer">
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default ShortProductCart;
