import MainFoodItem from "../MainFoodItem/MainFoodItem";
import "./Recommendations.scss";

const recommendationItems = [
  {
    title: "Четіре сіра мазіратє",
    imgSrc: "/pizza.png",
    price: 24.9,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas ipsa nulla accusantium nostrum quo."
  },
  {
    title: "Burger",
    imgSrc: "/burger.png",
    price: 24.9,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas ipsa nulla accusantium nostrum quo."
  },

  {
    title: "Pizzilian",
    imgSrc: "/pizza2.png",
    price: 24.9,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas ipsa nulla accusantium nostrum quo."
  },
  {
    title: "Burger",
    imgSrc: "/burger.png",
    price: 24.9,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas ipsa nulla accusantium nostrum quo."
  },
  {
    title: "Pizzilian",
    imgSrc: "/pizza2.png",
    price: 24.9,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas ipsa nulla accusantium nostrum quo."
  },
  {
    title: "Четіре сіра мазіратє",
    imgSrc: "/pizza.png",
    price: 24.9,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quas ipsa nulla accusantium nostrum quo."
  }
];

const Recommendations = () => {
  return (
    <div id="test" className="overflow-scroll w-screen bg-neutral-950">
      <div className="foods w-max flex lg:flex-row ">
        {recommendationItems.map((item) => (
          <MainFoodItem
            key={item.title}
            imgSrc={item.imgSrc}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
