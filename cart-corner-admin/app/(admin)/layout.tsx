"use client";
import LeftSidebar from "@/src/components/ui/LeftSidebar";
import TopBar from "@/src/components/ui/Topbar";
import { storeUserInfo } from "@/src/redux/features/user/userSlice";
import { getUserInfo, isLoggedIn } from "@/src/services/auth.service";
import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export const metadata: Metadata = {
//   title: "Admin panel",
//   description: "Cart corner is an e-commerce app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const dispatch = useDispatch();
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    const userInfo = getUserInfo();
    dispatch(storeUserInfo(userInfo));
    setIsLoading(true);
  }, [router, isLoading]);

  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <div className="flex h-screen bg-gray-100">
          <LeftSidebar isOpen={sidebarOpen} />
          <div className="flex-1 flex flex-col">
            <TopBar toggleSidebar={toggleSidebar} />
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
