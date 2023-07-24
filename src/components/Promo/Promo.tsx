import CountDown from "../Countdown/CountDown";


const Promo = () => {

  return (
    <div className="promo text-center md:text-left p-[50px] md:p-[150px]">
      <h1 className="text-2xl md:text-6xl font-bold">
        Delicious Burger & French Fry
      </h1>
      <p className="mt-4 font-semibold max-w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, velit
        autem porro harum totam debitis.
      </p>
      <div className="mt-4 text-2xl md:text-6xl font-bold text-yellow-500 timer">
       <CountDown endDate="2023-07-25"/>
      </div>
      <button className="mt-5 bg-red-500 px-3 py-2 rounded-lg">
        Order Now
      </button>
    </div>
  );
};

export default Promo;
