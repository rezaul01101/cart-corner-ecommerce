"use client";
import Image from "next/image";
import Link from "next/link";
import { useProductDetailsQuery } from "@/src/redux/api/productApi";
import { useParams } from "next/navigation";
import { baseUrl } from "@/src/helpers/config/envConfig";
import ProductDetailsSlider from "@/src/components/ProductDetailsSlider";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState<any>("");
  const { product } = useParams();
  let productId = 0;
  if (product.length > 0) {
    productId = Number(product[0]);
  }
  const { data } = useProductDetailsQuery(productId);
  const images = JSON.parse(data?.images || "[]");
  

  const mainImageHandle = (image: any) => {
    setMainImage(image);
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
                src={ mainImage ? `${baseUrl()}${mainImage}`: `${baseUrl()}${images[0]}` }
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
          <p>
            {" "}
            <span className="font-bold">Description</span> : {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
