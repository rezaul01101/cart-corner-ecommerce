"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";
import RightSideCart from "./RightSideCart";
import Image from "next/image";

import logo from "@/public/assets/images/new_logo.png";

const NavBar = () => {
  const [isRightSideCartOpen, setIsRightSideCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const store: any = useSelector((state) => state);
  const cart = store?.product?.productCart;

  const handleMouseEnter = (menu: any) => {
    setActiveMenu(menu);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 38) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full z-50 transition-all duration-300 ease-in-out ${
        isSticky ? "fixed top-0 bg-white shadow-lg" : "relative"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-yellow-500 h-1"></div>

      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            <Link href={'/'} className="relative w-[150px] ">
              <Image src={logo} alt="logo" />
            </Link>
            {/* Left Side - Links */}
            <div className="flex space-x-14">
              <Link href="/" className="text-gray-800 font-semibold">
                Home
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("delivery")}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/delivery" className="text-gray-800 font-semibold">
                  Delivery
                </Link>
                {activeMenu === "delivery" && isMenuOpen && (
                  <div className="absolute bg-white shadow-lg rounded-md py-2 w-64 z-50">
                    <Link
                      href="/delivery/option1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Option 1
                    </Link>
                    <Link
                      href="/delivery/option2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Option 2
                    </Link>
                    <Link
                      href="/delivery/option3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Option 3
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/legal-notice"
                className="text-gray-800 font-semibold"
              >
                Legal Notice
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/about" className="text-gray-800 font-semibold">
                  About Us
                </Link>
                {activeMenu === "about" && isMenuOpen && (
                  <div className="absolute bg-white shadow-lg rounded-md py-4 grid grid-cols-2 gap-4 p-4 w-64 z-50">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Company</h3>
                      <Link
                        href="/about/history"
                        className="block text-gray-800 hover:bg-gray-200"
                      >
                        Our History
                      </Link>
                      <Link
                        href="/about/team"
                        className="block text-gray-800 hover:bg-gray-200"
                      >
                        Our Team
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Services</h3>
                      <Link
                        href="/about/consulting"
                        className="block text-gray-800 hover:bg-gray-200"
                      >
                        Consulting
                      </Link>
                      <Link
                        href="/about/support"
                        className="block text-gray-800 hover:bg-gray-200"
                      >
                        Support
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/secure-payment"
                className="text-gray-800 font-semibold"
              >
                Secure Payment{" "}
              </Link>
            </div>

            {/* Right Side - Hotline */}
            <div className="flex items-center space-x-4">
              <div
                className="text-3xl font-bold relative cursor-pointer"
                onClick={() => setIsRightSideCartOpen(!isRightSideCartOpen)}
              >
                <MdOutlineShoppingBag />
                <div className=" absolute text-white -top-2 -right-1 w-5 bg-red-500 text-sm rounded-full flex items-center justify-center">
                  {cart?.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <RightSideCart
        isOpen={isRightSideCartOpen}
        setIsOpen={setIsRightSideCartOpen}
      />
    </div>
  );
};

export default NavBar;
