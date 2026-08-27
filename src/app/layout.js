import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Toy Park",
  description: "Toy Park",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="font-[var(--font-poppins)]">
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}