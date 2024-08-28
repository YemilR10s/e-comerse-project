'use client'

import Image from "next/image";
import { useState } from "react";

const Slides = [
  {
    id: 1,
    title: "Latest Fashion Trends",
    description: "Discover the newest trends in fashion with our latest collection.",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    background: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 2,
    title: "New Arrivals in Electronics",
    description: "Check out the latest electronics at unbeatable prices.",
    img: "https://images.pexels.com/photos/3680218/pexels-photo-3680218.jpeg",
    background: "bg-gradient-to-r from-green-50 to-purple-50",
  },
  {
    id: 3,
    title: "Home & Living Essentials",
    description: "Upgrade your home with our top picks in home & living.",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    background: "bg-gradient-to-r from-pink-50 to-orange-50",
  },
  {
    id: 4,
    title: "Fitness & Sports Gear",
    description: "Get the best deals on fitness and sports gear.",
    img: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg|",
    background: "bg-gradient-to-r from-teal-50 to-indigo-50",
  },
  {
    id: 5,
    title: "Beauty & Personal Care",
    description: "Find the perfect products to enhance your beauty routine.",
    img: "https://images.pexels.com/photos/3765113/pexels-photo-3765113.jpeg",
    background: "bg-gradient-to-r from-yellow-50 to-red-50",
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="flex h-full transition-all ease-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)`, width: `${Slides.length * 100}vw` }}
      >
        {Slides.map((slide) => (
          <div key={slide.id} className="w-screen flex flex-col h-full lg:flex-row">
            {/* Left text content */}
            <div
              className={`w-full h-1/2 ${slide.background} flex flex-col gap-8 items-center justify-center p-4 lg:w-1/2 lg:h-full`}
            >
              <h2 className="text-md text-center md:text-xl">{slide.description}</h2>
              <h1 className="text-2xl font-bold md:text-5xl">{slide.title}</h1>
              <button className="p-2 bg-black text-white rounded-md cursor-pointer hover:bg-white hover:text-black transition ease-in">
                Shop Now
              </button>
            </div>
            {/* Right img content */}
            <div className="w-full h-1/2 relative lg:w-1/2 lg:h-full">
              <Image
                src={slide.img}
                alt=""
                sizes="100%"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex gap-4">
            {Slides.map((_ , index)=>(
                <div 
                    key={index} 
                    className={`h-3 w-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex justify-center items-center ${current === index ? 'scale-150' : ''}`}
                    onClick={()=> setCurrent(index)}
                    >
                    
                </div>
            ))}
        </div>
      
    </div>
  );
};

export default Slider;
