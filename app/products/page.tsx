import { ChevronLeft, ChevronRight, Search, Star, Zap } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const InterFont = Inter({
  subsets: ["latin"],
});
export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const totalPages = Math.ceil(products.length / 4);
  const start = (currentPage - 1) * 4;
  const paginatedProducts = products.slice(start, start + 4);
  return (
    <div className={`${InterFont.className} flex flex-col gap-8 md:mx-10 my-8`}>
      <div
        className={`flex gap-12 md:gap-0 md:flex-row md:justify-between flex-col md:items-end text-center`}
      >
        <div className="flex items-start justify-start gap-2 flex-col">
          <div className="sm:text-4xl text-2xl  md:text-6xl text-start text-[#191C1E] font-bold">
            Study Essentials
          </div>
          <div className="md:text-2xl text-lg font-normal text-start text-[#454650]">
            Discover our curated collection of soft, aesthetic supplies
          </div>
          <div className="flex gap-2 px-3 items-center  text-start text-xs sm:text-sm md:text-xl py-2 bg-[#A5B4FC]/20 text-[#4B5A9C] font-medium rounded-full ">
            <span>
              <Zap />
            </span>
            <span>Lightning fast via Static Site Generation (SSG)</span>
          </div>
        </div>
        <div className="hidden">
          <input
            placeholder="Search supplies..."
            className="relative outline-[#4B5A9C] font-medium text-lg text-[#4B5A9C]  sm:pl-14 placeholder:text-[#767681] bg-[#F2F4F6] transition-all duration-300 flex gap-2 rounded-full px-4 py-3.5"
          />
          <div className="absolute hidden sm:block px-4 py-3.5">
            <Search className="text-[#767681] " />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:justify-center xl:items-center  gap-12 place-items-center">
        {paginatedProducts.map((item: any) => (
          <Link
            href={`/products/${item.id}`}
            className={
              "bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:cursor-pointer transition-all duration-300 hover:scale-[110%] flex flex-col w-[300px] h-[450px] rounded-3xl"
            }
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={120}
              height={192}
              className="bg-[#A5B4FC]/60 rounded-t-3xl  w-full p-4 h-[195px] flex justify-start  items-start object-contain"
            />
            <div className={`p-6 flex flex-col flex-1 gap-4`}>
              <div className={`text-[#5F5A7C] text-md `}>{item.category}</div>
              <div className="text-2xl text-[#191C1E] font-bold h-16 overflow-hidden">
                {item.title}
              </div>
              <div className="flex gap-1  ">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.round(item.rating.rate) ? "#1B6B4F" : "none"}
                    className={
                      i < Math.round(item.rating.rate)
                        ? "text-[#1B6B4F]"
                        : "text-[#767681]"
                    }
                  />
                ))}
                <div className="text-[#767681]">({item.rating.count})</div>
              </div>
              <div className="flex mt-auto justify-between items-center ">
                <div className="text-[#4B5A9C] font-bold text-2xl">
                  ${item.price}
                </div>
                <div className="text-[#4B5A9C] cursor-pointer transition-all duration-300 hover:scale-[110%] font-medium text-md bg-[#A5B4FC]/30 py-2 px-4 rounded-full">
                  Details
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-10 justify-center">
        <Link
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition ${currentPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-slate-100"} `}
          href={`/products?page=${currentPage - 1}`}
        >
          <ChevronLeft size={20} />
        </Link>
        {(() => {
          const pages: (number | string)[] = [];
          if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
              pages.push(i);
            }
          } else {
            pages.push(1);
            if (currentPage > 3) {
              pages.push("...");
            }
            for( 
              let i = Math.max(2, currentPage -1);
              i <= Math.min(totalPages - 1, currentPage + 1);
              i++
            ){
              pages.push(i);
            }
            if(currentPage < totalPages - 2){
              pages.push("...")
            }
            pages.push(totalPages)
          }
          return pages.map((item, index) =>
            item === "..." ? (
              <span
                key={index}
                className={`flex bg-white rounded-full h-12 w-12 items-center justify-center `}
              >
                ...
              </span>
            ) : (
              <Link
                key={item}
                href={`/products?page=${item}`}
                className={`flex  h-12 w-12 items-center justify-center rounded-full transition ${currentPage === item ? "bg-[#4B5A9C] text-white" : "bg-white hover:bg-slate-100"} `}
              >
                {item}
              </Link>
            ),
          );
        })()}
        <Link
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition ${currentPage === totalPages ? "pointer-events-none opacity-50" : "hover:bg-slate-100"} `}
          href={`/products?page=${currentPage + 1}`}
        >
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
}