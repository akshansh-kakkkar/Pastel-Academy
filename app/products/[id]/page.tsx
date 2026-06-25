import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
const interFont = Inter({
  subsets: ["latin"],
});
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div className={` mx-4 sm:mx-10 my-10 ${interFont.className}`}>
      <Link href={"/products"} className="flex gap-2 group text-[#454650]">
        <ArrowLeft
          strokeWidth={1.5}
          className={`group-hover:-translate-x-1 transition-all duration-300`}
        />
        <span className="group-hover:underline">Back to products</span>
      </Link>
      <div className="flex min-h-[70vh] md:mt-0 mt-12 lg:flex-row flex-col gap-12 lg:gap-30 justify-center  items-center">
        <div className="bg-white p-6 rounded-4xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div
            className={`bg-[#A5B4FC]/60 md:w-150 md:h-150 w-60 h-60 lg:w-[500px] lg:h-[400px] xl:w-[600px] xl:h-[600px] relative rounded-4xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)]`}
          >
            <Image
              className="absolute p-6 sm:p-12 md:p-32"
              src={product.image}
              fill
              alt={product.title}
            />
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <div
              className={`${interFont.className} text-xl text-[#4B5A9C] font-medium bg-[#4B5A9C]/10 rounded-full w-fit px-3 py-2`}
            >
              {product.category}
            </div>
            <div
              className={`${interFont.className} text-5xl font-bold text-[#191C1E]`}
            >
              {product.title}
            </div>
            <div
              className={`${interFont.className} text-4xl text-[#4b5A9C] font-bold`}
            >
              ${product.price}
            </div>
                          <div className="flex gap-1  ">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.round(product.rating.rate) ? "#1B6B4F" : "none"}
                    className={
                      i < Math.round(product.rating.rate)
                        ? "text-[#1B6B4F]"
                        : "text-[#767681]"
                    }
                  />
                ))}
                <div className="text-[#767681]">({product.rating.count})</div>
              </div>
          </div>
          <div className="flex flex-col gap-8 ">
          <div
            className={`flex text-lg text-[#454650] md:w-150  ${interFont.className}`}
          >
            {product.description}
          </div>
          <Link href={'/products'} className="flex hover:scale-[105%] transition-all duration-300 text-3xl font-bold text-white justify-center items-center bg-[#4b5A9C] rounded-full py-3.5 px-2 ">
          Go Back
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
