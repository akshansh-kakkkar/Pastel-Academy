"use client";
import { Loader2 } from "lucide-react";
import { Inter } from "next/font/google";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
const interFont = Inter({
  subsets: ["latin"],
});
export default function Page() {
  const searchParams = useSearchParams;
  const perPageItems =6;
  const page = searchParams;
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
  ]
  const totalPages = data?.length / perPageItems;
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
    <div className={`my-10 mx-10 flex flex-col gap-6 ${interFont.className}`}>
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
      <div className="bg-[#F2F4F6]   px-6 py-5 border border-[#d4d4d4]  rounded-t-3xl">
        <div className="font-bold text-2xl text-[#191C1E]">Recent Discussions</div>
      </div>
      <div className="border  flex justify-center flex-col gap-1  border-t-0 border-[#C6C6C6] rounded-t-none">
        {paginatedItems.map((item : any)=>{
          const color = colors[item.id % colors.length]
          return(
          <div key={item.id} className="border-b flex items-center  h-full w-full border-[#C6C6C6] py-6  px-12" >
            <div className={` w-14 h-14 flex items-center text-center justify-center font-bold px-4 py-2 rounded-full text-2xl ${color}`}>{item.title.charAt(0).toUpperCase()}</div>
          </div>)
})}
      </div>
      </div>
    </div>
  );
}
