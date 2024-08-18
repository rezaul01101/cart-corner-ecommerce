import Image from "next/image";
import Product1 from '@/public/assets/images/product1.jpg'

function ProductCard({product}:any) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden my-4 cursor-pointer">
      <div className="relative">
        <Image src={product?.image} alt="Product Image" className="w-full h-38 object-cover" />
        <div className="text-sm absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full">
          NEW
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mt-1">{product?.category}</p>
        <h2 className="font-semibold ">{product?.name}</h2>
        <p className="mt-1">${product?.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;