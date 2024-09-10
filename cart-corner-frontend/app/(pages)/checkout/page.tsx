"use client";
import { selectTotalPrice } from "@/src/redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOrderCreateMutation } from "@/src/redux/api/orderApi";

type Inputs = {
  full_name: string;
  email: string;
  phone_number: string;
  shipping_address: string;
  special_message: string;
};

const Checkout = () => {
  const [orderCreate] = useOrderCreateMutation();
  const dispatch = useDispatch();
  const store: any = useSelector((state) => state);
  const products = store?.product?.productCart;
  const totalPrice: number = useSelector(selectTotalPrice);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const orderData = {
      orderUserData: data,
      products: products,
      paymentMethod: 'CASH_ON_DELIVERY',
    };
    try {
      const res = await orderCreate(orderData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("full_name", { required: true })}
                  name="full_name"
                  type="text"
                  placeholder="Full Name"
                  className=" mr-5 border border-gray-300 p-2 text-sm rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
              <div className="">
                <input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className=" mr-5 border border-gray-300 p-2 text-sm rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
              <div className="">
                <input
                  {...register("phone_number")}
                  name="phone_number"
                  type="text"
                  placeholder="Phone Number"
                  className=" mr-5 border border-gray-300 p-2 text-sm rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
              <div className=" col-span-2">
                <textarea
                  {...register("shipping_address", { required: true })}
                  name="shipping_address"
                  rows={10}
                  placeholder="Details shipping address"
                  className=" mr-5 border border-gray-300 p-2 text-sm rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
              <div className=" col-span-2">
                <textarea
                  {...register("special_message")}
                  name="special_message"
                  rows={5}
                  placeholder="Special message for us"
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
            <button
              type="submit"
              className="mt-6 w-full bg-yellow-500 text-white py-3 rounded text-sm font-medium hover:bg-yellow-400"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
