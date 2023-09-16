import CartBtn from "@/components/ui/CartBtn/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ProductType } from "../../../../../types/types";


export const getProducts = async (catName) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${catName}`, {cache: "no-store"})
  
  if(!res.ok) throw new Error("Failed")
  return res.json()
}


const page = async({params}) => {
  const products: ProductType[] = await getProducts(params.category)
  return (
    <div>
      <h1>Category!</h1>
      <div className="flex flex-wrap">
        {products.map((pizza) => (
          <div className="product_item relative md:even:bg-slate-500 bg-slate-300 
          group transition-all duration-200 border-b-2 border-r-2 h-[500px] w-full 
          sm:w-1/2 md:w-1/3 lg:w-1/4  flex flex-col justify-between  "  key={pizza.id}>
            <Link 
             href={`/product/${pizza.id}`}>
                <div className="relative w-full h-[400px]">
                  <Image
                    className="object-contain"
                    alt=""
                    src={`/${pizza.image}`|| ""}
                    fill
                  />
                </div>

                <div className="flex p-4 justify-between items-start text-3xl font-bold capitalize">
                  <span>{pizza.title}</span>
                  <span className="text-red-400">${pizza.price}</span>
                </div>
            </Link>
            <CartBtn type="cart" className="hidden group-hover:block absolute bottom-0 left-0 w-full"  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
