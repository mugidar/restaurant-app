
import Hero from "@/components/Hero/Hero";
import MainFoodItem from "@/components/MainFoodItem/MainFoodItem";
import Promo from "@/components/Promo/Promo";
import Recommendations from "@/components/Recommendations/Recommendations";
import Image from "next/image";

export default function Home() {

  return (
    <>
     <Hero/>
     <Recommendations/>
     <Promo/>
    
    </>
  );
}
