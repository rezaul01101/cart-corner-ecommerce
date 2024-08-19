"use client";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu: any) => {
    setActiveMenu(menu);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-yellow-500 h-2"></div>

      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            {/* Left Side - Links */}
            <div className="flex space-x-4">
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
                  <div className="absolute bg-white shadow-lg rounded-md py-2 w-64">
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

              <Link href="/legal-notice" className="text-gray-800 font-semibold">Legal Notice
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/about" className="text-gray-800 font-semibold">
                  About Us{" "}
                </Link>
                {activeMenu === "about" && isMenuOpen && (
                  <div className="absolute bg-white shadow-lg rounded-md py-4 grid grid-cols-2 gap-4 p-4 w-64">
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
            <div className="flex items-center">
              <span className="text-gray-800 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884l2-2A3 3 0 018.122 5.12l.707-.707a1 1 0 00-1.415-1.414L6.707 3.707A1 1 0 015.122 2.293l-.707.707A3 3 0 005.88 8.121l-.707.707a1 1 0 101.414 1.415l.707-.707A3 3 0 018.12 14.88l-.707.707A1 1 0 106.707 17.3l.707-.707a3 3 0 004.243 0l.707-.707a1 1 0 00-1.414-1.415l-.707.707a1 1 0 01-1.415-1.414l.707-.707a1 1 0 101.415-1.415l-.707-.707a3 3 0 00-4.242-4.243l-.707-.707a1 1 0 00-1.415 1.415l.707.707a1 1 0 01-1.415 1.415l-.707-.707a3 3 0 000-4.243L2.003 5.884z" />
                </svg>
                Hotline: 1-001-234-5678
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
