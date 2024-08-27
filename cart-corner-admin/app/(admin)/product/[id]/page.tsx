"use client";
import { baseUrl } from "@/src/helpers/config/envConfig";
import { useProductDetailsQuery } from "@/src/redux/api/productApi";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: productDetails, refetch } = useProductDetailsQuery(id);
  const images = JSON.parse(productDetails?.images || "[]");
  const productDescription = JSON.parse(productDetails?.description || "[]");
  return (
    <div className="bg-white shadow-md rounded p-6 w-full">
      <h3 className="my-3">Product Details</h3>
      <hr className="mb-3" />
      <h5 className="mb-1">
        <span className="font-bold text-red-500">Name</span>:{" "}
        {productDetails?.name}
      </h5>
      <h5>
        <span className="font-bold text-red-500">Description</span>:{" "}
        {productDetails?.short_description}
      </h5>
      <h5>
        <span className="font-bold text-red-500"> Category</span>:{" "}
        {productDetails?.category?.name}
      </h5>
      <h5 className="mb-2">
        <span className="font-bold text-red-500"> Brand</span>:{" "}
        {productDetails?.brand?.name}
      </h5>
      <h5 className=" mb-2">
        Price: &nbsp;
        <span className="text-red-400 font-bold">
          {productDetails?.price} BDT
        </span>
      </h5>
      <h5 className="mb-2">
        Discount Price: &nbsp;
        <span className="text-red-500 font-bold">
          {productDetails?.discount} BDT
        </span>
      </h5>

      <div className="grid gap-2 grid-cols-6 mt-5">
        {images?.map((item: string, index: number) => (
          <div
            key={index}
            className=" border-gray-500 border flex items-center justify-center rounded-lg"
          >
            <Image
              src={baseUrl() + item}
              width={100}
              height={120}
              className=" object-cover"
              alt={productDetails?.name}
            />
          </div>
        ))}
      </div>
      <div>
        <h3 className="my-2 text-xl font-bold text-red-500">Description</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: productDescription,
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
