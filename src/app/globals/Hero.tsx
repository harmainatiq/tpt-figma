
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import bg from './../../../public/compressed-images/Group 63.webp'
import arrow from "./../../../public/Images/Vector 1.svg";

function Hero({ title, heading, description1, description2 }: any) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={bg}
        alt="Description of image"
        fill
        objectFit="cover"
        quality={60}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <div className="relative w-full h-full flex flex-col justify-center items-center text-center pb-6 lg:pb-16 pt-36 lg:pt-64">
        <div className="lg:text-[28px] text-xl font-bold text-secondary border-b-8 border-secondary lg:pb-7 pb-3 mb-4">
          {title}
        </div>
        <h1 className="w-[94%] lg:text-[80px] text-5xl font-extrabold leading-normal text-white mb-4 ">
          {heading}
        </h1>
        <p className="w-[70%] lg:text-xl text-base text-white mb-3 lg:pl-0 pl-[8%]">
          {description1}
        </p>
        <p className="w-[70%] lg:text-xl text-base text-white lg:mb-12 mb-6 lg:pl-0 pl-[8%]">
          {description2}
        </p>
        <button className="bg-secondary lg:mb-16 mb-9 lg:w-72 w-48 lg:h-12 h-7 lg:text-2xl text-lg font-bold text-primary">
          Find My Shaft
        </button>
        <Image
          className="lg:mx-[48%] mx-[42%] mt-4"
          src={arrow}
          alt="icon"
        />
      </div>
    </div>
  );
}

export default Hero;
