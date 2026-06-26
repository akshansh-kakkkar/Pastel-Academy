import { Inter } from "next/font/google";
import Link from "next/link";
const interFont = Inter({
    subsets : ['latin']
})
export default function Page(){
    return (
        <div className={` flex flex-col gap-12 w-full min-h-[75vh] justify-center items-center text-center ${interFont.className}`}>
            <div className="animate-wiggle text-9xl text-[#4b5a9c]  animate-bounce font-bold">404</div>
            <div className="text-2xl text-[#191C1E] capitalize font-bold">Opps It Looks Like Something went Wrong</div>
            <Link href={'/'} className={` bg-[#4b5a9c] cursor-pointer text-white text-3xl font-bold transition-all duration-300 hover:scale-[110%] px-12 sm:px-32 md:px-48 py-2 rounded-full`}>Go Back</Link>
        </div>
    )
}