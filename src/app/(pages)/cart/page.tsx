import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row relative">
      <div className="items lg:flex-grow-[2] overflow-y-scroll flex flex-col items-start">
        <div className="cart_item  w-full flex  justify-between lg:justify-center gap-x-[100px] items-start md:items-center p-5 ">
          <div className="flex items-center gap-x-7">
            <div className="relative w-[100px] h-[100px] bg-red-500/20 rounded-md">
              <Image fill src={"/p1.png"} alt="" />
            </div>
            <div className="flex flex-col items-start">
              <span>SICILIAN PIZZA</span>
              <span>Large</span>
            </div>
            <strong>$24.90</strong>
          </div>
          <span className="cursor-pointer">X</span>
        </div>
      </div>

      <div className="total lg:flex-grow-[1] lg:p-[200px] md:flex flex-col md:justify-center flex-1 bg-red-300 w-full py-10 px-5 ">
        <div className="md:border-b pb-5 border-gray-200/50">
          <div className="flex justify-between">
            <span>Subtotal(3 items)</span>
            <span>$81.70</span>
          </div>
          <div className="flex justify-between">
            <span>Service cost</span>
            <span>$81.70</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Cost</span>
            <span className="text-green-500">FREE</span>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <span>Total</span>
          <span>$81.70</span>
        </div>
        <button className="bg-red-500 p-2">Checkout</button>
      </div>
    </div>
  );
};

export default page;
