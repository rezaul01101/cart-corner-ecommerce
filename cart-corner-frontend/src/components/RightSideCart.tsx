import { useDispatch, useSelector } from "react-redux";
import ShortProductCart from "./ShortProductCart";
import Link from "next/link";
import { removeProductInCart } from "@/src/redux/features/product/productSlice";

const RightSideCart = ({ isOpen, setIsOpen }: any) => {
  const dispatch = useDispatch();
  const store: any = useSelector((state) => state);
  const products = store?.product?.productCart;

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  const removeProduct = (item: any) => {
    dispatch(removeProductInCart(item?.data?.id));
  };

  return (
    <div className="relative">
      {/* Cart Modal */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 w-80" : "translate-x-full"
        }`}
      >
        <div className="bg-yellow-500 h-1"></div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-center">Cart review</h2>

          {/* Add your product list here */}
          <div className="mt-5 h-[78vh] overflow-y-auto w-72">
            {products?.map((item: any) => (
              <ShortProductCart
                removeHandle={removeProduct}
                product={item}
                key={item?.data?.id}
              />
            ))}
          </div>
          {/* Add more products as needed */}
          <div className="w-full flex gap-3 items-center h-[15vh]">
            <Link
              className="py-3 px-2 bg-gray-600 w-full text-center text-white rounded-md"
              href={"/cart"}
            >
              <div onClick={() => setIsOpen(!isOpen)}>View Cart</div>
            </Link>
            <Link
              className="py-3 px-2 bg-yellow-400 w-full text-center text-white rounded-md"
              href={"/cart"}
            >
              Checkout
            </Link>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={toggleCart}
          className="absolute top-0 left-0 mt-4 ml-4"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RightSideCart;
