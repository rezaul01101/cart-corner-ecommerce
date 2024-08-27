"use client";
import Image from "next/image";
import Link from "next/link";
import {
  useProductDetailsQuery,
  useProductListQuery,
} from "@/src/redux/api/productApi";
import { useParams } from "next/navigation";
import { baseUrl } from "@/src/helpers/config/envConfig";
import ProductDetailsSlider from "@/src/components/ProductDetailsSlider";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import ProductCard from "@/src/components/ProductCard";
import { useDispatch } from "react-redux";
import { storeCart } from "@/src/redux/features/product/productSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [mainImage, setMainImage] = useState<any>("");
  const { product } = useParams();
  let productId = 0;
  if (product.length > 0) {
    productId = Number(product[0]);
  }
  const { data: products, refetch } = useProductListQuery([]);
  const { data } = useProductDetailsQuery(productId);
  const images = JSON.parse(data?.images || "[]");
  const productDescription = JSON.parse(data?.description || "[]");

  const mainImageHandle = (image: any) => {
    setMainImage(image);
  };
  const handleCart = () => {
    const productCart = {
      data: data,
      cart_count: count,
    };

    dispatch(storeCart(productCart));
  };
  return (
    <div className="container m-auto py-5">
      <div className="flex">
        <Link className="" href={"/"}>
          Home
        </Link>
        &nbsp;/&nbsp;
        <Link href={"/product"}>Product</Link>
      </div>
      <div className="grid grid-cols-2 mt-5 gap-10">
        <div className="">
          <div className="relative w-full h-[450px] border rounded-lg">
            {images?.length > 0 && (
              <Image
                src={
                  mainImage
                    ? `${baseUrl()}${mainImage}`
                    : `${baseUrl()}${images[0]}`
                }
                className="h-[200px] w-full rounded-xl"
                sizes="100vw"
                layout="fill"
                objectFit="contain"
                alt={"product"}
              />
            )}
          </div>
          <div className="flex gap-2 my-3 border py-3 rounded-lg">
            <ProductDetailsSlider images={images} setImage={mainImageHandle} />
          </div>
        </div>
        <div>
          <p className="text-xl text-gray-500">{data?.category?.name}</p>
          <h2 className="text-2xl font-semibold my-2">{data?.name}</h2>
          <div className="flex items-center gap-2">
            <h2 className="text-md font-semibold my-2 text-red-400">
              ৳<s>{data?.price}</s>
            </h2>
            <h2 className="text-xl font-semibold my-2 text-red-500">
              ৳{data?.price - data?.discount}
            </h2>
          </div>
          <p className="text-md my-2">
            Brand: <span>{data?.brand?.name}</span>
          </p>
          <p className=" line-clamp-[10]">
            {" "}
            <span className="font-bold">Description</span> : {data?.short_description}
          </p>
          <div className="mt-10 flex gap-5">
            {/* counting */}
            <div className="flex border w-36 items-center justify-around h-14 rounded-md">
              <div
                className="w-10 cursor-pointer flex items-center justify-center text-sm"
                onClick={() => (count > 1 ? setCount(count - 1) : 1)}
              >
                <FaMinus />
              </div>
              <div className="text-md">{count}</div>
              <div
                className="w-10 flex items-center justify-center text-sm cursor-pointer"
                onClick={() => setCount(count + 1)}
              >
                <FaPlus />
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCart()}
              className="bg-yellow-500 h-14 rounded-lg w-full flex items-center justify-center font-semibold text-white text-xl cursor-pointer hover:bg-yellow-400"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto mt-10 p-4">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-gray-900 font-medium py-2 border-b-2 border-yellow-400"
              >
                Description
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 font-medium py-2"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 font-medium py-2"
              >
                Seller Info
              </a>
            </li>
          </ul>
        </div>

        {/* Content Section */}
        <div className="mt-6">
          <div
            dangerouslySetInnerHTML={{
              __html: productDescription,
            }}
          />
        </div>
      </div>
      <div className="m-auto">
        <div className="flex items-center mt-5">
          <h2 className="text-xl font-semibold">Related Products</h2>
          <div className="flex-grow h-px bg-gray-200 mx-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
          {products?.map(
            (item: any, index: number) =>
              index < 5 && <ProductCard product={item} key={item?.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
