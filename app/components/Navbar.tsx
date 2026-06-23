"use client";
import { Menu, X } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const InterFont = Inter({
  subsets: ["latin"],
});

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`sm:mx-10 mx-4 items-center text-center px-10 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] mt-4 py-4 flex justify-between rounded-full bg-[#FFFFFF] ${InterFont.className}`}
      >
        <div className={`font-semibold text-xl sm:text-2xl text-[#4B5A9C]`}>
          PastelAcademy
        </div>
        <div className="hidden sm:block flex gap-6 transition-all duration-300 font-medium text-lg text-[#454650]">
          <Link
            href={"/"}
            className={`${pathName === "/" ? "border-b-4 rounded-md border-[#4B5A9C] " : ""} py-1 px-4 transition-all duration-300`}
          >
            Home
          </Link>
          <Link
            href={"/products"}
            className={`py-1 px-4 transition-all duration-300 ${pathName === "/products" ? "border-b-4 rounded-md border-[#4B5A9C]" : ""}`}
          >
            Products
          </Link>
          <Link
            href={"/dashboard"}
            className={`py-1 px-4 transition-all duration-300 ${pathName === "/dashboard" ? "border-b-4 rounded-md border-[#4B5A9C]" : ""}`}
          >
            Dashboard
          </Link>
        </div>
        <div
          className={`p-2 sm:hidden block rounded-full cursor-pointer hover:bg-[#4b5a9c3f]`}
        >
          <Menu size={20} className="text-[#4B5A9C]" />
        </div>
      </div>
      <div
        className={`sm:hidden p-24 flex relative  mt-2 items-center text-center justify-center flex-col w-[180px] h-[120px]  mx-6 px4 bg-white inset-0 rounded-lg  shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] `}
      >
        <div className="absolute right-4 top-4">
          <X size={18} />
        </div>
        <div className="flex text-left p-4 flex-col gap-4">
          <Link
            href={"/"}
            className={`${pathName === "/" ? "text-white   rounded-md bg-[#4B5A9C] " : ""} py-1 px-4 text-start w-[120px] transition-all duration-300`}
          >
            Home
          </Link>
          <Link
            href={"/products"}
            className={`py-1 px-4 w-[120px] transition-all duration-300 ${pathName === "/products" ? " rounded-md text-start text-white bg-[#4B5A9C]" : ""}`}
          >
            Products
          </Link>
          <Link
            href={"/dashboard"}
            className={`py-1 px-4 transition-all duration-300 ${pathName === "/dashboard" ? "rounded-md text-white text-start bg-[#4B5A9C]" : ""}`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
