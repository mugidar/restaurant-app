"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const pizza = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0
    },
    {
      title: "Medium",
      additionalPrice: 4
    },
    {
      title: "Large",
      additionalPrice: 6
    }
  ]
};

const Page = () => {
  const [currentOption, setCurrentOption] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState<string | number>(pizza.price);

  useEffect(() => {
    const option = pizza.options.filter(
      (option) => option.title === currentOption
    );
    const additionalPrice = option[0].additionalPrice;
    const pizzaPrice = pizza.price;

    setTotal((additionalPrice + pizzaPrice * quantity).toFixed(2));
  }, [quantity, currentOption]);

  return (
    <div className="p-5 md:p-20  lg:flex  md:items-center ">
      <div className="w-full flex justify-center mb-8">
        <div className="relative flex self-center w-1/2 min-w-[100px] h-[200px] md:h-[400px]">
          <Image className=" object-contain" fill alt="" src={pizza.img} />
        </div>
      </div>
      <div className="md:flex items-center flex-col">
        <h1 className="text-red-400 uppercase font-bold text-3xl">
          {pizza.title}
        </h1>
        <p className="mt-4 text-red-200 mb-5 md:w-[600px]">{pizza.desc}</p>
        <strong className="text-red-400 md:text-4xl">${total}</strong>
        <div className="mt-4 flex flex-col sm:flex-row justify-between md:gap-x-5">
          {pizza.options.map((option) => (
            <span
              onClick={() => setCurrentOption(option.title)}
              className={`
              
              ${
                option.title === currentOption && "bg-red-500"
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
            <div className="mr-5">
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
          <button className="bg-red-500 p-3 uppercase">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
