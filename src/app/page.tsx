
import MainFoodItem from "@/components/MainFoodItem/MainFoodItem";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <div className="flex flex-col md:flex-row h-[calc(100vh-110px)] w-full">
        <div className="flex flex-col items-center justify-center left flex-1">
          <div className="title text-5xl text-center">
            ONLY TASTY & ONLY HOT
          </div>
          <button className="capitalize bg-orange-400 px-5 py-2 mt-5 rounded-lg">
            Order now
          </button>
        </div>
        <div className="right flex-1"></div>
      </div>
      <div className="foods flex flex-col sm:flex-col md:flex-row ">
        <MainFoodItem />
        <MainFoodItem />
        <MainFoodItem />
      </div>
      <div className="promo text-center md:text-left p-[50px] md:p-[150px]">
        <h1 className="text-2xl md:text-6xl font-bold">
          Delicious  Burger & French Fry
        </h1>
        <p className="mt-4 font-semibold max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, velit
          autem porro harum totam debitis.
        </p>
        <div className="mt-4 text-2xl md:text-6xl font-bold text-yellow-500 timer">
        00:24:14
        </div>
        <button className="mt-5 bg-red-500 px-3 py-2 rounded-lg">
          Order Now
        </button>
      </div>
    </>
  );
}
