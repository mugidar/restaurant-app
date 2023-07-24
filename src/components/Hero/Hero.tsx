import Slider from "../Slider/Slider";
import CartBtn from "../ui/CartBtn/Button";


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-110px)] w-full">
      <div className="flex flex-col items-center justify-center left flex-1">
        <div className="title text-5xl text-center">ONLY TASTY & ONLY HOT</div>
        <CartBtn type="order"/>
      </div>
     <Slider/>
    </div>
  );
};

export default Hero;
