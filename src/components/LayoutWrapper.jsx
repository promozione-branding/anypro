
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar and Footer on /admin and all /admin/* routes
  const isAdminRoute =
    pathname === "/admin" || pathname.startsWith("/admin/");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <main>{children}</main>

      {!isAdminRoute && <Footer  />}
    </>
  );
}

