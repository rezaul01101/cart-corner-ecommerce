"use client";
import { authKey } from "@/src/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/src/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from "react-redux";
import logo from "@/public/assets/user/logo.png";

interface TopBarProps {
  toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar }) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  const store: any = useSelector((state) => state);
  const authUserInfo = store?.user?.userInfo;

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6 relative">
      <button onClick={toggleSidebar} className="text-xl">
        <FaBarsStaggered />
      </button>
      <div className="flex items-center">
        <span className="mr-3">{authUserInfo?.name}</span>
        <div className="relative" ref={dropdownRef}>
          <Image
            src={logo}
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
              <ul className="py-2">
                <Link
                  href="/profile"
                  className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                >
                  <FaUser className="mr-2" />
                  <span>Profile</span>
                </Link>
                <div
                  onClick={() => logOut()}
                  className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                >
                  <FaSignOutAlt className="mr-2" />
                  <span>Logout</span>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
