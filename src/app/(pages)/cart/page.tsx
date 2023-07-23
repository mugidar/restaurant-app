import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="cart_item flex-1 flex justify-between items-start p-5 ">
        <div className="flex items-center gap-x-7 w-full">
          <div className="relative w-[100px] h-[100px] bg-red-500/20 rounded-md">
            <Image fill src={"/p1.png"} alt="" />
          </div>
          <div className="flex flex-col items-start">
            <span>SICILIAN PIZZA</span>
            <span>Large</span>
          </div>
          <strong>$24.90</strong>
        </div>
        <span>X</span>
      </div>

      <div className="total flex-1 bg-red-300 w-full py-10 px-5 ">
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

        <div className="flex justify-between mt-10">
          <span>Total</span>
          <span>$81.70</span>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default page;
