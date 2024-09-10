"use client";
import { baseUrl } from "@/src/helpers/config/envConfig";
import {
  decreaseProductCount,
  increaseProductCount,
  removeProductInCart,
  selectTotalPrice,
} from "@/src/redux/features/product/productSlice";
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

  const handleIncreaseProduct = (id: number) => {
    dispatch(increaseProductCount(id));
  };
  const handleDecreaseProduct = (id: number) => {
    dispatch(decreaseProductCount(id));
  };
  const removeProduct = (id: number) => {
    dispatch(removeProductInCart(id));
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
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Full Name"
                className=" mr-5 border border-gray-300 p-2 text-sm rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className=" mr-5 border border-gray-300 p-2 text-sm rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Phone Number"
                className=" mr-5 border border-gray-300 p-2 text-sm rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
            <div className=" col-span-2">
              <textarea
                rows={10}
                placeholder="Details shipping address"
                className=" mr-5 border border-gray-300 p-2 text-sm rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Order Summery
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
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
