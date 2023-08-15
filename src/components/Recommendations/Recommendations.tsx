import { Product } from "../../../types/types";
import MainFoodItem from "../MainFoodItem/MainFoodItem";
import "./Recommendations.scss";

/* const recommendationItems = [
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
]; */
export const revalidation = 0
export const getFeatured = async () => {
  const res = await fetch("http://localhost:3000/api/products", {cache: "no-store"})
  
  if(!res.ok) throw new Error("Failed")
  return res.json()
}

const Recommendations = async () => {
  const recommendationItems:Product[] = await getFeatured();
  console.log(recommendationItems)
  return (
    <div id="test" className="w-screen overflow-x-scroll bg-neutral-950">
      <div className="foods w-full flex lg:flex-row  ">
        {recommendationItems.map((item) => (
          <MainFoodItem
            key={item.title}
            imgSrc={item.image || "/"}
            title={item.title}
            price={item.price}
            description={item.description || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
