import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/src/lib/Providers";

export const metadata: Metadata = {
  title: "Cart Corner Admin",
  description: "Cart corner is an e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
