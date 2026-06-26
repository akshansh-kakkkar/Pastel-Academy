"use client";
import { Menu, X } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const InterFont = Inter({
  subsets: ["latin"],
});

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div
        className={`sm:mx-10 mx-4 items-center text-center px-10 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] mt-4 py-4 flex justify-between rounded-full bg-[#FFFFFF] ${InterFont.className}`}
      >
        <Link href={'/'} className={`font-semibold text-xl sm:text-2xl text-[#4B5A9C]`}>
          PastelAcademy
        </Link>
        <div className="hidden sm:block flex gap-12 transition-all duration-300 font-medium text-lg text-[#454650]">
          <Link
            href={"/"}
            className={`${pathName === "/" ? "border-b-4 font-bold text-[#4b5a9c] rounded-sm border-[#4B5A9C] " : ""} mx-4 transition-all font-medium duration-300`}
          >
            Home
          </Link>
          <Link
            href={"/products"}
            className={`py-1  transition-all font-medium mx-4 duration-300 ${pathName === "/products" ? "border-b-4 font-bold text-[#4B5A9C] rounded-sm border-[#4B5A9C]" : ""}`}
          >
            Products
          </Link>
          <Link
            href={"/dashboard"}
            className={`py-1 mx-4 font-medium transition-all duration-300 ${pathName === "/dashboard" ? "border-b-4 font-bold text-[#4b5a9c] rounded-sm border-[#4B5A9C]" : ""}`}
          >
            Dashboard
          </Link>
        </div>
        <motion.div
        initial={{rotate : 0}}
        animate={{rotate : isOpen ? 360 : 0}}
        transition={{duration : 0.3}}
          onClick={toggleOpen}
          className={`p-2 sm:hidden z-50 block rounded-full cursor-pointer hover:bg-[#4b5a9c3f]`}
        >
          {isOpen ? (
            <X size={20} className="text-[#4B5A9C]" />
          ) : (
            <Menu size={20} className="text-[#4B5A9C]" />
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ x: -100, opacity: 0 }}
            className={`${InterFont.className} relative   sm:hidden `}
          >
            <div className="flex z-50 absolute  mt-2 items-center px-22 py-24 text-center justify-center flex-col w-[180px] h-[120px]  mx-6 px-4 bg-white inset-0 rounded-lg  shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] ">
              <div
                onClick={() => setIsOpen(false)}
                className="absolute  left-4 top-4"
              >
                <X size={18} />
              </div>
              <div className="flex text-left p-4 flex-col gap-4">
                <Link
                  href={"/"}
                  className={`${pathName === "/" ? "text-white   rounded-md bg-[#4B5A9C] " : ""} py-1 px-4 text-start w-[100px] transition-all duration-300`}
                >
                  Home
                </Link>
                <Link
                  href={"/products"}
                  className={`py-1 px-4 w-[100px] transition-all duration-300 ${pathName === "/products" ? " rounded-md text-start text-white bg-[#4B5A9C]" : ""}`}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
