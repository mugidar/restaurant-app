import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-screen flex flex-col xl:flex-row relative">
      <div className="items mt-5 gap-5 lg:flex-grow-[2] overflow-y-scroll flex flex-col items-center ">
        <div className="cart_item max-w-[500px] w-full md:px-5  flex p-2  justify-between items-center ">
          <div className="flex items-center gap-x-7">
            <div className="relative w-[100px] h-[100px] bg-red-500/20 rounded-md">
              <Image className="object-contain" fill src={"/p1.png"} alt="" />
            </div>
            <div className="flex flex-col items-start">
              <span>SICILIAN PIZZA</span>
              <span>Large</span>
            </div>
            <strong>$24.90</strong>
          </div>
          <span className="cursor-pointer mx-3">X</span>
        </div>
       
      </div>

      <div className="total lg:flex-grow-[1] lg:p-[200px] md:flex flex-col md:justify-center flex-1 bg-red-300 w-full py-10 px-5 ">
        <div className="md:border-b pb-5 border-gray-200/50">
          <div className="flex justify-between">
            <span className="mr-5">Subtotal(3 items)</span>
            <span>$81.70</span>
          </div>
          <div className="flex justify-between">
            <span className="mr-5">Service cost</span>
            <span>$81.70</span>
          </div>
          <div className="flex justify-between">
            <span className="mr-5">Delivery Cost</span>
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
