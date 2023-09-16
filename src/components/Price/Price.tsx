"use client";
import { useCartStore } from "@/zustand/store";
import { Product } from "@prisma/client";
import React, { useEffect, useState } from "react";

const Price = ({ product }) => {
  const [currentOption, setCurrentOption] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState<string | number>(product.price);
  const { addToCart } = useCartStore();
  useEffect(() => {
    useCartStore.persist.rehydrate()
  },[])
  useEffect(() => {

    if (product.options.length > 0) {
      // const option = product.options.filter(
      //   (option) => option.title === currentOption
      // );
      const additionalPrice = product.options[currentOption].additionalPrice;
      const productPrice = product.price;

      setTotal((additionalPrice + productPrice * quantity).toFixed(2));
    } else {
      setTotal((product.price * quantity).toFixed(2));
    }
  }, [quantity, currentOption]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      price: product.price,
      title: product.title,
      quantity: quantity,
      img: product.image,
      ...(product.options?.length && {
        optionTitle: product.options[currentOption].title
      })
    });
  };
  return (
    <>
      <strong className="text-red-400 md:text-4xl">${total}</strong>
      <div className="mt-4 flex flex-col sm:flex-row justify-between md:gap-x-5">
        {product.options.length > 0 &&
          product.options.map((option, index) => (
            <span
              onClick={() => setCurrentOption(index)}
              className={`
        
        ${
          index === currentOption && "bg-red-500"
        } border border-red-500 py-1 px-8 rounded-lg cursor-pointer`}
              key={option.title}
            >
              {option.title}
            </span>
          ))}
      </div>
      <div className="flex md:w-[600px] items-center border mt-4 border-neutral-500 ">
        <span className="flex  justify-between flex-1 p-2">
          <p>Quantity</p>
          <div className="mr-5 select-none">
            <span
              className="cursor-pointer"
              onClick={() =>
                setQuantity((prev) => (prev <= 1 ? prev : prev - 1))
              }
            >
              {"< "}
            </span>
            <span>{quantity}</span>
            <span
              className="cursor-pointer"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              {" >"}
            </span>
          </div>
        </span>
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-red-500 p-3 uppercase"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Price;
