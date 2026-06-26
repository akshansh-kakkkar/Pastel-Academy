"use client";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Inter } from "next/font/google";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
const interFont = Inter({
  subsets: ["latin"],
});
export default function Page() {
  const searchParams = useSearchParams();
  const perPageItems = 8;
  const page = searchParams.get("page");
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    {
      refreshInterval: 10000,
    },
  );
  const colors = [
    "bg-indigo-200 text-indigo-700",
    "bg-emerald-200 text-emerald-700",
    "bg-violet-200 text-violet-700",
    "bg-pink-200 text-pink-700",
    "bg-amber-200 text-amber-700",
    "bg-sky-200 text-sky-700",
  ];
  const router = useRouter()
  const totalPages = Math.ceil((data?.length || 0 )/ perPageItems);
  const CurrentPage = Number(page) || 1;
  const startPage = (CurrentPage - 1) * perPageItems;
  const paginatedItems = data?.slice(startPage, startPage + perPageItems) || [];
  if (isLoading) {
    return (
      <div className="w-full min-h-[75vh] flex items-center justify-center text-center">
        <Loader2 className="animate-spin  text-[#4B5A9C]" size={64} />
      </div>
    );
  }
  if (error) {
    return <div>Failed</div>;
  }
  return (
    <div className={`my-10 mx-4 sm:mx-10 flex flex-col gap-6 ${interFont.className}`}>
      <div className="flex flex-col gap-2">
        <div
          className={`${interFont.className} text-5xl font-bold text-[#191C1E]`}
        >
          Dashboard
        </div>
        <div className="text-xl max-w-250 text-[#454650] font-normal">
          Welcome back. This dashboard uses Client Side Rendering (CSR) powered
          by SWR for seamless lightweight data fetching.
        </div>
      </div>
      <div>
        <div className="bg-[#F2F4F6] px-4 md:px-12 py-8 border border-[#d4d4d4]  rounded-t-3xl">
          <div className="font-bold text-3xl text-[#191C1E]">
            Recent Discussions
          </div>
        </div>
        <div className="border  rounded-3xl flex justify-center flex-col border-t-0 border-[#C6C6C6] rounded-t-none">
          {paginatedItems.map((item: any) => {
            const color = colors[item.id % colors.length];
            return (
              <div
                key={item.id}
                className="border-b gap-6 transition-all duration-300 cursor-pointer flex group items-center  h-full w-full border-[#C6C6C6] py-6  px-4 md:px-12"
              >
                <div
                  className={` sm:w-14 w-12 h-12 sm:h-14 flex items-center text-center justify-center font-bold px-4 py-4 rounded-full text-xl sm:text-2xl ${color}`}
                >
                  {item.title.charAt(0).toUpperCase()}
                </div>
                <div className="text-sm md:text-lg text-[#767681] font-medium group-hover:text-[#4B5A9C] capitalize">
                  {item.body}
                </div>
              </div>
            );
          })}
          <div className="bg-[#F2F4F6] gap-4 flex items-center justify-end text-center  px-12 py-8 rounded-b-3xl">
            <button disabled={CurrentPage===1}  onClick={()=>{if(CurrentPage > 1){
              router.push(`/dashboard?page=${CurrentPage - 1}`)
            }}} className={`bg-white disabled:bg-white border border-[#C6C6C6] hover:text-white hover:bg-[#4b5a9c] text-[#191C1E] disabled:cursor-not-allowed disabled:text-[#191C1E] transition-all duration-300 cursor-pointer p-1 rounded-md`}><ChevronLeft size={24} /></button>
            <div className="font-medium text-[#4B5A9C] text-xl">{CurrentPage} of {totalPages}</div>
            <button disabled={CurrentPage === totalPages} onClick={()=>{if(CurrentPage < totalPages){
              router.push(`/dashboard?page=${CurrentPage + 1}`)
            }}} className={`bg-white cursor-pointer hover:bg-[#4b5a9c] hover:text-white transition-all duration-300 disabled:cursor-not-allowed disabled:bg-white disabled:text-[#191C1E] text-[#191C1E] border border-[#C6C6C6] p-1 rounded-md`}><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
