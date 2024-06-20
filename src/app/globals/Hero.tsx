`use client`

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrow from "./../../../public/Images/Vector 1.svg";

function Hero({ title, heading, description1, description2 }: any) {
  return (
    <div className="w-full bg-hero bg-cover lg:pt-48 pt-32">
      <div className="w-70% lg:px-16 px-6 lg:py-16 py-6">
        <div className="lg:text-[28px] text-xl font-bold text-secondary text-center border-b-8 border-secondary lg:pb-7 pb-3 mb-4">
          {title}
        </div>
        <h1 className="w-[94%] lg:text-[80px] text-5xl font-extrabold leading-normal text-white text-center mb-4 lg:pl-10">
          {heading}
        </h1>
        <p className="w-[86%] lg:text-xl text-base text-white text-center mb-3 lg:pl-[14%] pl-[8%]">
          {description1}
        </p>
        <p className="w-[86%] lg:text-xl text-base text-white text-center lg:mb-12 mb-6 lg:pl-[14%] pl-[8%]">
          {description2}
        </p>
        <button className="bg-secondary lg:mb-16 mb-9 lg:w-72 w-48 lg:h-12 h-7 lg:text-2xl text-lg font-bold items-center text-primary lg:mx-[38%] mx-[20%]">
          Find My Shaft
        </button>
        <Image className="lg:mx-[48%] mx-[42%]" src={arrow} alt="icon"></Image>
      </div>
    </div>
  );
}

export default Hero;
