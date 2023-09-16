"use client";
import { useCartStore } from "@/zustand/store";
import Image from "next/image";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  useEffect(() => {
    useCartStore.persist.rehydrate()
  },[])
  return (
    <div className="h-full w-screen flex flex-col xl:flex-row relative">
      <div className="items mt-5 gap-5 lg:flex-grow-[2] overflow-y-scroll flex flex-col items-center ">
        {products.length > 0 &&
          products.map((product) => (
            <div
              key={product.id}
              className="cart_item max-w-[500px] w-full md:px-5  flex p-2  justify-between items-center "
            >
      
              <div className="flex items-center gap-x-7">
                <div className="relative w-[100px] h-[100px] bg-red-500/20 rounded-md">
                  <Image
                    className="object-contain"
                    fill
                    src={`/${product.img}`}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span>{product.title}</span>
                  <span>{product.optionTitle}</span>
                </div>
                <strong>{product.price}</strong>
              </div>
              <div>
                {product.quantity}
              </div>
              <span onClick={() => removeFromCart(product)} className="cursor-pointer mx-3">X</span>
            </div>
          ))}
      </div>

      <div className="total lg:flex-grow-[1] lg:p-[200px] md:flex flex-col md:justify-center flex-1 bg-red-300 w-full py-10 px-5 ">
        <div className="md:border-b pb-5 border-gray-200/50">
          <div className="flex justify-between">
            <span className="mr-5">Subtotal({totalItems} items)</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="mr-5">Service cost</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="mr-5">Delivery Cost</span>
            <span className="text-green-500">FREE</span>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
        <button className="bg-red-500 p-2">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
