"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import "./slider.scss";

const sliderImages = [
  {
    title: "TITLE",
    imgUrl:
      "https://images.pexels.com/photos/14866675/pexels-photo-14866675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "TITLE",
    imgUrl:
      "https://images.pexels.com/photos/3504876/pexels-photo-3504876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "TITLE",
    imgUrl:
      "https://images.pexels.com/photos/17200357/pexels-photo-17200357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "TITLE",
    imgUrl:
      "https://images.pexels.com/photos/5553620/pexels-photo-5553620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
  
     currentSlide === sliderImages.length - 1 ? setCurrentSlide(0): setCurrentSlide((prev) => prev+1)
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);
  


  return (
    <div className="right flex-1 relative">
      <Image
        className="object-cover"
        src={sliderImages[currentSlide].imgUrl}
        fill
        alt=""
      />
    </div>
  );
};

export default Slider;
