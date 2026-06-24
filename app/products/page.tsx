import { ListFilter, Search, Star, Zap } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
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
    <div className={`${InterFont.className} flex flex-col gap-8 mx-10 my-8`}>
      <div className={`flex justify-between items-end text-center`}>
        <div className="flex items-start justify-start gap-2 flex-col">
          <div className="text-6xl text-[#191C1E] font-bold">
            Study Essentials
          </div>
          <div className="text-2xl font-normal text-[#454650]">
            Discover our curated collection of soft, aesthetic supplies
          </div>
          <div className="flex gap-2 px-3 text-xl py-2 bg-[#A5B4FC]/20 text-[#4B5A9C] font-medium rounded-full ">
            <span>
              <Zap />
            </span>
            <span>Lightning fast via Static Site Generation (SSG)</span>
          </div>
        </div>
        <div className="flex  items-center gap-4">
          <div className=" bg-[#F2F4F6]  flex gap-2 rounded-full px-4 py-3.5">
            <Search className="text-[#767681]" />
            <input
              placeholder="Search supplies..."
              className="outline-none placeholder:text-[#767681]"
            />
          </div>
          <div className="bg-[#F2F4F6] cursor-pointer hover:bg-[#767681]/10 transition-all duration-300 text-[#4B5A9C] px-4 py-3.5 rounded-full">
            <ListFilter />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 place-items-center">
        {paginatedProducts.map((item: any) => (
          <div
            className={"bg-white flex flex-col w-[300px] h-[450px] rounded-xl"}
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={120}
              height={192}
              className="bg-[#A5B4FC]/60 rounded-t-xl  w-full p-4 h-[195px] flex justify-start  items-start object-contain"
            />
            <div className={`p-6 flex flex-col flex-1 gap-4`}>
              <div className={`text-[#5F5A7C] text-md `}>{item.category}</div>
              <div className="text-2xl text-[#191C1E] font-bold">
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
                <div className="text-[#4B5A9C] font-bold text-xl">
                  ${item.price}
                </div>
                <div className="text-[#4B5A9C] cursor-pointer transition-all duration-300 hover:scale-[110%] font-medium text-md bg-[#A5B4FC]/30 py-2 px-4 rounded-full">
                  Details
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
