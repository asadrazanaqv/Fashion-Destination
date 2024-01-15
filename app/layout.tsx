import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion Destination",
  description: "We sell only the most exclusive and high quality products for you. We are the best so come and shop with us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
            <ShoppingCartModal />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
