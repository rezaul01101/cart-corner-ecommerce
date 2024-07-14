"use client";
import Link from "next/link";
import React from "react";
import {
  FaClipboardList,
  FaChartPie,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaShoppingCart,
} from "react-icons/fa";

import { AiFillProduct } from "react-icons/ai";


interface Submenu {
  title: string;
  url?:string;
}

interface MenuItem {
  title: string;
  icon: JSX.Element;
  url?:string;
  submenus: Submenu[];
}

interface SidebarProps {
  isOpen: boolean;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: <FaChartPie />,
    url:'/dashboard',
    submenus: [],
  },
  {
    title: "Products",
    icon: <AiFillProduct />,
    url:'#',
    submenus: [
      { title: "Add New Product",url:'/product'},
      { title: "Product List",url:'/product/list' },
      { title: "Category",url:'#' },
      { title: "Brand",url:'#' },
      { title: "Attribute",url:'#' },
      { title: "Colors",url:'#' },
    ],
  },
  {
    title: "Sales",
    icon: <FaShoppingCart />,
    url:'#',
    submenus: [{ title: "All Orders",url:'#' }, { title: "Pending Orders",url:'#' }],
  },
  {
    title: "Reports",
    icon: <FaClipboardList />,
    url:'#',
    submenus: [],
  },
  // Add more menu items here if needed
];

const LeftSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [openMenus, setOpenMenus] = React.useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleMenu = (index: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={`h-screen bg-gray-900 text-white flex flex-col transition-width duration-300 ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden`}
    >
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className={`text-2xl font-bold ${isOpen ? "block" : "hidden"}`}>
          CART CORNER
        </h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="p-4">
          {menuItems.map((item:MenuItem, index) => (
            <li key={index} className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMenu(index)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className={`ml-3 ${isOpen ? "block" : "hidden"}`}>
                    <Link href={item?.url}>{item.title}</Link>
                  </span>
                </div>
                {item.submenus.length > 0 &&
                  (openMenus[index] ? <FaChevronUp /> : <FaChevronDown />)}
              </div>
              {item.submenus.length > 0 && (
                <ul
                  className={`pl-8 my-3 transition-all duration-300 ease-in-out ${
                    openMenus[index]
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {item.submenus.map((submenu:Submenu, subIndex) => (
                    <li key={subIndex} className="my-4 flex items-center cursor-pointer">
                      <Link href={submenu?.url}>{submenu.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-16 border-t border-gray-700 flex items-center justify-center">
        <FaSignOutAlt className="mr-3" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default LeftSidebar;
