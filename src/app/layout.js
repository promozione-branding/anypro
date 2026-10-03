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
  title: "Table Games & Board Games Manufacturer in India | AnyPro",
  description: "Discover AnyPro, a trusted Table Games & Board Games manufacturer and wholesaler in India. Explore Chess, Carrom, Foosball, Air Hockey and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="font-[var(--font-poppins)]">
        <SmoothScroll />
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}