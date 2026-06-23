import { ArrowRight, LayoutDashboard, ShoppingBag } from "lucide-react"
import { Inter } from "next/font/google"
import Image from "next/image"

const InterFont = Inter({
    subsets : ['latin']
})
export default function page(){
    return (
        <div className={`${InterFont.className} flex-col flex gap-4 my-12  justify-center items-center text-center w-full h-full `}>
          <div className="bg-[#A5B4FC] rounded-full text-[#354484] font-semibold py-2 px-4">
            Pastel Academy
          </div>
          <div className="text-5xl font-bold text-[#4b5a9c]">
            Welcome to Soft Learning
          </div>
          <div className="text-[#454650] font-normal text-xl text-center max-w-250">
            Explore the seamless intergration of custom API routes within a modern, pastel-themed Next.js application. Learning has never looked so approachable.
          </div>
          <div className="mt-8 flex flex-col justify-center items-center p-8 gap-4 bg-[#DDE1FF] rounded-xl">
            <div className="relative w-20 h-20 bg-[#FFFFFF] rounded-full">
                <Image fill src={'/images/hand-wave.svg'} alt="hand-wave-icon" className="absolute p-4"  />
            </div>
            <div className="font-semibold text-[#001354] text-4xl">Message from API</div>
            <div className="bg-[#FFFFFF]  px-16 py-5 text-xl text-[#334282] rounded-lg">"Hello from /api/hello! The Server is running smoothly!"</div>
          </div>
          <div className="sm:grid flex flex-col sm:grid-cols-2 gap-4 ">
            <div className="col-span-1 transition-all duration-300 hover:scale-[105%]  flex items-start cursor-pointer group flex-col gap-2 p-4 justify-start text-start bg-white rounded-xl">
                <div className=" bg-[#A6F2CF] rounded-full p-4"><ShoppingBag className="text-[#247155]" size={32} /></div>
                <div className="text-[#191c1E] text-2xl font-semibold">Products</div>
                <div className="text-xl font-normal text-[#454650] max-w-120">Browse our collection of soft, educational resources and courses.</div>
                <div className="text-[#247155]  flex gap-2">View Catalog <span className="group-hover:translate-x-2 transition-all duration-300"><ArrowRight /></span></div>
            </div>
                        <div className="col-span-1 transition-all duration-300 hover:scale-[105%]  flex items-start cursor-pointer group flex-col gap-2 p-4 justify-start text-start bg-white rounded-xl">
                <div className=" bg-[#B9B3D9] rounded-full p-4"><LayoutDashboard className="text-[#494465]" size={32} /></div>
                <div className="text-[#191c1E] text-2xl font-semibold">Dashboard</div>
                <div className="text-xl font-normal text-[#454650] max-w-120">Browse our collection of soft, educational resources and courses.</div>
                <div className="text-[#5F5A7C]  flex gap-2">View Catalog <span className="group-hover:translate-x-2 transition-all duration-300"><ArrowRight /></span></div>
            </div>
          </div>
        </div>
    )
}