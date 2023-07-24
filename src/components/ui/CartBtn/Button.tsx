"use client"
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface CartBtnProps {
  onClick?: () => void;
  id?: number;
  type?: string;
  url?: string;
  className?: string;
}

const CartBtn: React.FC<CartBtnProps> = ({
  id,
  type,
  url = "/",
  className,
  onClick
}) => {
  //ADD TO CART

  if (type === "order") {
    return (
      <Link href={url}>
        <button
          className={twMerge(
            "mt-5 bg-orange-400 text-white px-3 py-2 rounded-lg",
            className
          )}
          onClick={onClick}
        >
          Order now
        </button>
      </Link>
    );
  }

  return (
    <button
    onClick={onClick}
      className={twMerge(
        "mt-5  bg-red-500 text-white p-2 rounded-lg",
        className
      )}
    >
      Add to Cart
    </button>
  );
};

export default CartBtn;
