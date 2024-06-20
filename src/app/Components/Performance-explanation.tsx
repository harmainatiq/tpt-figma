`use client`

import React from "react";
import Image from "next/image";
import Link from "next/link";
import yt from "./../../../public/Images/image 2.svg";

function Youtube2() {
  return (
    <div>
      <div className="lg:px-10 px-6 flex lg:flex-row flex-col-reverse lg:gap-14 gap-3 lg:mb-28 mb-14">
        {/* <iframe src={yt}></iframe> */}
        <Link className="lg:pl-24 pl-12 w-[85%]"  href="https://www.youtube.com/">
        <Image src={yt} alt="video"></Image>
        </Link>
        <div className="lg:py-32 py-10">
          <div className="w-[14%] text-secondary lg:text-2xl text-lg font-bold border-b-4 border-secondary pb-3 mb-4">
            EXPLANATION
          </div>
          <p className="lg:text-5xl text-xl text-white font-semibold lg:leading-normal">
            Discover the science behind your
            <span className="text-secondary"> enhanced performance!</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Youtube2;
