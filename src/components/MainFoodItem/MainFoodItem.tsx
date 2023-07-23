import Image from "next/image";
import "./MainFoodItem.scss";

interface MainfoodItem {
  title: string;
  price: number;
  imgSrc: string;
  description: string;
}

const MainFoodItem: React.FC<MainfoodItem>= ({ title, price, imgSrc, description }) => {
  return (
    <div className="foodItem flex w-screen md:w-[33.3vw]  even:bg-slate-500/50 p-20 h-[100vh] bg-white items-center justify-center flex-col text-center">
      <div className="relative hover:rotate-[15deg] duration-500 transition-all  h-[200px] w-[70%] md:h-[500px] w-[90%]">
        <Image className="object-contain " fill src={imgSrc} alt="food" />
      </div>
      <h1 className="m-3 text-3xl uppercase font-bold text-red-700">{title}</h1>
      <p className="text-red-400 w-[300px]">{description}</p>
      <strong className="mt-4 text-red-500">${price}</strong>
      <button className="mt-2 bg-red-600 px-3 py-2 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default MainFoodItem;
