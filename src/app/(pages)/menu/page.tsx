import Link from "next/link";
import { Menu } from "../../../../types/types";

/* const categories = [
  {
    title: "Italian pastas",
    description:
      " orem ipsum dolor, sit amet consectetur adipisicing elit. Atqueeaque iusto ea, fuga molestias reiciendLis!",
    imgSrc: "/pasta.png",
    color: "green",
    url: "/menu/pastas"
  },
  {
    title: "Juicy burgers",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atqueeaque iusto ea, fuga molestias reiciendis!",
    imgSrc: "/burger.png",
    color: "white",
    url: "/menu/burgers"
  },
  {
    title: "Cheesy pizzas",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atqueeaque iusto ea, fuga molestias reiciendis!",
    imgSrc: "/pizza.png",
    color: "red",
    url: "/menu/pizzas"
  }
]; */

export const getCats = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {cache: "no-cache"})
  
  if(!res.ok) throw new Error("Failed")
  return res.json()
}


const page = async () => {
 const categories: Menu[] = await getCats()

  return (
    <div className="categories h-full">
      <div className="container h-full w-screen lg:flex items-center">
        {categories.map((category) => (
          <Link href={`/menu/${category.slug}`} key={category.title}>
            <div
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "240px 100px",
                backgroundSize: "contain",
                backgroundColor: `${category.color}`
              }}
              className={`categoryItem p-5 text-black 

            h-1/3
            `}
            >
              <h1 className="font-bold text-3xl uppercase">{category.title}</h1>
              <p className="text-lg font-light mt-5">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;

