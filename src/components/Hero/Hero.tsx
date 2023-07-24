import Slider from "../Slider/Slider";


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-110px)] w-full">
      <div className="flex flex-col items-center justify-center left flex-1">
        <div className="title text-5xl text-center">ONLY TASTY & ONLY HOT</div>
        <button className="capitalize bg-orange-400 px-5 py-2 mt-5 rounded-lg">
          Order now
        </button>
      </div>
     <Slider/>
    </div>
  );
};

export default Hero;
