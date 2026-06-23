"use client"
import { Inter } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"

const InterFont = Inter({
    subsets :['latin']
})
export default function Footer(){
    const pathName = usePathname();
    return (
        <div className={`lg:flex-row lg:gap-0 gap-5 flex-col ${InterFont.className} bg-[#F2F4F6] flex justify-between items-center text-center px-10 py-8`}>
            <div className={`text-2xl  font-bold text-[#4B5A9C]`}>PastelAcademy</div>
            <div className="text-sm sm:text-md font-semibold text-[#1B6B4F]">&copy; 2026 PastelAcademy. Learning made soft.</div>
            <div className={`flex gap-6 text-[#454650] text-md font-bold`}>
                <Link href={'/'} className={`${pathName === "/" ? "text-[#4b5A9c] border-b-2" : ""} transition-all duration-300`}>Home</Link>
                <Link className={`${pathName === "/products" ? "text-[#4b5A9c] border-b-2" : ""} transition-all duration-300`} href={'/products'}>Products</Link>
                <Link className={`${pathName === "/dashboard" ? "text-[#4b5A9c] border-b-2" : ""} transition-all duration-300`} href={'/dashboard'}>Dashboard</Link>
            </div>
        </div>
    )
}