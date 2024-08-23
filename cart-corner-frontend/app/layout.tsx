import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/src/lib/Providers";
import Footer from "@/src/components/Footer";
import TopHeader from "@/src/components/TopHeader";
import NavBar from "@/src/components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cart Corner",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <TopHeader />
          <NavBar />
          <div className="min-h-[60vh]">{children}</div>
          <Footer />
          <ToastContainer autoClose={1000} />
        </body>
      </Providers>
    </html>
  );
}
