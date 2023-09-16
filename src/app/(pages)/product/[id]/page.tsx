import DeleteButton from "@/components/DeleteButton/DeleteButton";
import Price from "@/components/Price/Price";
import Image from "next/image";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export const dynamicParams = true;
const getProduct = async (id: string) => {
  const res = await fetch(`https://restaurant-app.vercel.app/api/products/${id}`, {
    cache: "no-cache"
  });
  if (!res.ok) return new Error("Something went wrong");

  return res.json();
};
const Page = async ({ params }) => {
  const product = await getProduct(params.id);
  if (!product) {
    redirect("/");
  }
  return (
    <div className="relative p-5 md:p-20  lg:flex  md:items-center ">
      <DeleteButton productId={params.id} className="absolute top-10 right-10" />
      <div className="w-full flex justify-center mb-8">
        <div className="relative flex self-center w-1/2 min-w-[100px] h-[200px] md:h-[400px]">
          <Image
            className=" object-contain"
            fill
            alt=""
            src={"/" + product.image}
          />
        </div>
      </div>
      <div className="md:flex items-center flex-col">
        <h1 className="text-red-400 uppercase font-bold text-3xl">
          {product.title}
        </h1>
        <p className="mt-4 text-red-200 mb-5 md:w-[600px]">
          {product.description}
        </p>
        <Price product={product} />
      </div>
    </div>
  );
};

export default Page;
