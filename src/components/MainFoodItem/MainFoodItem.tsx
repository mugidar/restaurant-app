import Image from "next/image";
import CartBtn from "../ui/CartBtn/Button";

interface MainfoodItem {
  title: string;
  price: number;
  imgSrc: string;
  description: string;
}

const MainFoodItem: React.FC<MainfoodItem> = ({
  title,
  price,
  imgSrc,
  description
}) => {
  return (
    <div className="flex flex-col w-screen md:w-[33.3vw] even:bg-slate-500/50  p-20 h-full bg-white  text-center">
      <div className="flex flex-1 items-center  justify-center  flex-col       ">
        <div className="relative hover:rotate-[15deg] duration-500 transition-all  h-[200px] md:h-[400px] w-[90%]">
          <Image className="object-contain " fill src={imgSrc} alt="food" />
        </div>
        <h1 className="m-3 text-3xl uppercase font-bold text-red-700">
          {title}
        </h1>
        <p className="text-red-400 w-[300px]">{description}</p>
        <strong className="mt-4 text-red-500">${price}</strong>
      </div>
      <div>
        <CartBtn type="cart" className="px-5" />
      </div>
    </div>
  );
};

export default MainFoodItem;
