// components/Layout/NavbarConditional.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";

export default function NavbarConditional() {
  const pathname = usePathname();
  
  return (
    <>
      {pathname === "/" ? <Navbar /> : <NavbarTwo />}
    </>
  );
}