import Link from "next/link";

const categories = [
  {
    title: "Italian pastas",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atqueeaque iusto ea, fuga molestias reiciendis!",
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
];

const page = () => {
  return (
    <div className="categories">
      <div className="container h-screen w-screen lg:flex items-center">
        {categories.map((category) => (
          <Link href={category.url} key={category.title}>
            <div
              style={{
                backgroundImage: `url(${category.imgSrc})`,
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

