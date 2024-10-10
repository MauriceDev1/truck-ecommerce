"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
    {
      id: 1,
      title: "Keep Your Trucks Rolling. Genuine Parts, Expert Service.",
      description: "Your trusted partner for truck components.",
      img: "/iveco-s-way.png",
      url: "/",
      bg: "bg-gradient-to-r from-neutral-300 to-stone-400",
    },
    {
      id: 2,
      title: "Save Big on Truck Parts. Quality Guaranteed.",
      description: "Discover unbeatable deals on a wide range of components.",
      img: "/Big-truck-1.png",
      url: "/",
      bg: "bg-gradient-to-r from-neutral-400 to-stone-300",
    },
    {
      id: 3,
      title: "South African-Owned. South African-Sourced.",
      description: "Experience the difference of local knowledge and support.",
      img: "/udtruck-GWE370.png",
      url: "/",
      bg: "bg-gradient-to-r from-neutral-300 to-stone-400",
    },
  ];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4 ">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex">
              <Image
                src={slide.img}
                alt=""
                width={1000}
                height={1000}
                className="w-full my-auto"
                // className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
    )
}

export default Slider;