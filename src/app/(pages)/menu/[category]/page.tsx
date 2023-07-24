import CartBtn from "@/components/ui/CartBtn/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const pizzas = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0
      },
      {
        title: "Medium",
        additionalPrice: 4
      },
      {
        title: "Large",
        additionalPrice: 6
      }
    ]
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/p8.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0
      },
      {
        title: "Medium",
        additionalPrice: 4
      },
      {
        title: "Large",
        additionalPrice: 6
      }
    ]
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/p3.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0
      },
      {
        title: "Medium",
        additionalPrice: 4
      },
      {
        title: "Large",
        additionalPrice: 6
      }
    ]
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/p10.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0
      },
      {
        title: "Medium",
        additionalPrice: 4
      },
      {
        title: "Large",
        additionalPrice: 6
      }
    ]
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/p11.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0
      },
      {
        title: "Medium",
        additionalPrice: 4
      },
      {
        title: "Large",
        additionalPrice: 6
      }
    ]
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0
      },
      {
        title: "Medium",
        additionalPrice: 4
      },
      {
        title: "Large",
        additionalPrice: 6
      }
    ]
  }
];

const page = () => {
  return (
    <div>
      <h1>Category!</h1>
      <div className="flex flex-wrap">
        {pizzas.map((pizza) => (
          <div className="product_item relative md:even:bg-slate-500 bg-slate-300 
          group transition-all duration-200 border-b-2 border-r-2 h-[500px] w-full 
          sm:w-1/2 md:w-1/3 lg:w-1/4  flex flex-col justify-between  "  key={pizza.id}>
            <Link 
             href={`/product/${pizza.id}`}>
                <div className="relative w-full h-[400px]">
                  <Image
                    className="object-contain"
                    alt=""
                    src={pizza.img}
                    fill
                  />
                </div>

                <div className="flex p-4 justify-between items-center text-3xl font-bold capitalize">
                  <span>{pizza.title}</span>
                  <span>${pizza.price}</span>
                </div>
            </Link>
            <CartBtn type="cart" className="hidden group-hover:block absolute bottom-0 left-0 w-full"  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
