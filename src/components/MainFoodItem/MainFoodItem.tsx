import Image from "next/image";
import "./mainfooditem.scss";

const MainFoodItem = () => {
  return (
    <div className="flex even:bg-slate-500/50 p-20 h-[100vh] bg-white items-center justify-center flex-col text-center flex-1">
      <div className="relative  h-[200px] w-[90%] md:h-[500px] w-[90%]">
        <Image className="object-contain"  fill src={"/pizza.png"} alt="food" />
      </div>
      <h1 className="m-3 text-3xl uppercase font-bold text-red-700">
        Sicilian
      </h1>
      <p className="text-red-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
        doloremque distinctio necessitatibus quas nemo, inventore fuga
        quibusdam. Nesciunt, reiciendis?
      </p>
      <strong className="mt-4">$24.90</strong>
      <button className="mt-2 bg-red-600 px-3 py-2 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default MainFoodItem;
