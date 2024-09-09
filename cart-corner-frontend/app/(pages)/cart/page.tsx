"use client";
import { baseUrl } from "@/src/helpers/config/envConfig";
import { decreaseProductCount, increaseProductCount, selectTotalPrice } from "@/src/redux/features/product/productSlice";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const store: any = useSelector((state) => state);
  const products = store?.product?.productCart;
  const totalPrice = useSelector(selectTotalPrice);

  const stringToParseImage = (images: any) => {
    const imagesData = JSON.parse(images || "[]");
    if (imagesData?.length > 0) {
      return imagesData[0];
    } else {
      return null;
    }
  };

  const handleIncreaseProduct = (id:number) => {
    dispatch(increaseProductCount(id));
  };
  const handleDecreaseProduct = (id:number) => {
    dispatch(decreaseProductCount(id));
  };
  return (
    <div className="container mx-auto w-full min-h-screen py-8">
      {/* Grid Container */}
      <div className="w-full  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Cart Items and Coupon */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          {/* Free Shipping Notification */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <p className="text-center text-sm font-semibold text-gray-800 mb-2">
              Your order qualifies for free shipping!
            </p>
            <div className="w-full h-1 bg-green-500 rounded-full"></div>
          </div>

          {/* Cart Items */}
          <div className="space-y-6">
            <table className="w-full">
              <thead className="my-6">
                <tr>
                  <td className="text-center">Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {products.map((item: any, index: number) => (
                  <tr key={index} className="my-3">
                    <td className="grid grid-cols-5 gap-3 items-center mb-3">
                      <div className="relative w-16 h-16 mr-1 p-1 border rounded-sm">
                        <Image
                          src={
                            stringToParseImage &&
                            `${baseUrl()}${stringToParseImage(
                              item?.data?.images
                            )}`
                          }
                          className="w-16 h-16 object-cover rounded"
                          sizes="100vw"
                          layout="fill"
                          objectFit="contain"
                          alt="product name"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-800 col-span-4 w-3/4">
                        {item?.data?.name}
                      </p>
                    </td>
                    <td className=" w-24">
                      <p className="text-sm text-gray-500">
                        ৳{(item?.data?.price).toLocaleString()}
                      </p>
                    </td>
                    <td className="w-24">
                      <div className="flex items-center space-x-2">
                        <button  onClick={() => handleDecreaseProduct(item?.data?.id)} className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                          -
                        </button>
                        <span className="text-sm font-medium text-gray-800">
                          {item?.cart_count}
                        </span>
                        <button onClick={() => handleIncreaseProduct(item?.data?.id)} className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <p className="text-sm font-semibold text-gray-800">
                        ৳{(item?.data?.price * item?.cart_count).toLocaleString()}
                      </p>
                    </td>
                    <td>
                      <button className="text-gray-500 hover:text-red-600 text-xl ml-2">
                        x
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Coupon Code Section */}
          <div className="mt-6 flex items-center justify-between ">
            <div className="flex w-2/3">
              <input
                type="text"
                placeholder="Coupon code"
                className=" mr-5 border border-gray-300 p-2 text-sm rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 w-72  text-sm rounded-md hover:bg-yellow-400 focus:ring-1">
                Apply coupon
              </button>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 text-sm rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500">
              Remove All
            </button>
          </div>
        </div>

        {/* Right Section: Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            CART TOTALS
          </h2>
          <div className="space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between text-sm font-medium text-gray-800">
              <p>Subtotal</p>
              <p>৳{totalPrice.toLocaleString()}</p>
            </div>
            {/* Shipping Options */}
            <div className="text-sm font-medium text-gray-800">
              <p className="mb-2">Shipping</p>
              <div>
                <label className="block">
                  <input
                    type="radio"
                    name="shipping"
                    className="mr-2"
                    defaultChecked
                  />
                  <span className="text-gray-700">Free shipping</span>
                </label>
                <label className="block">
                  <input type="radio" name="shipping" className="mr-2" />
                  <span className="text-gray-700">Local pickup</span>
                </label>
                <p className="text-xs mt-1 text-gray-500">Shipping to AL.</p>
                <a href="#" className="text-xs text-blue-500 hover:underline">
                  Change address
                </a>
              </div>
            </div>
            {/* Total */}
            <div className="flex justify-between text-xl font-bold text-gray-800 mt-4">
              <p>Total</p>
              <p>৳{totalPrice.toLocaleString()}</p>
            </div>
          </div>
          {/* Checkout Button */}
          <button className="mt-6 w-full bg-yellow-500 text-white py-3 rounded text-sm font-medium hover:bg-yellow-400">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
