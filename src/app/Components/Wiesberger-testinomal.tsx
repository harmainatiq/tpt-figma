`use client`;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import yt from "./../../../public/Images/image 2.svg";

function Youtube1() {
  return (
    <div>
      <div className="lg:px-10 px-6 flex lg:flex-row flex-col lg:gap-14 gap-3 lg:mb-28 ">
        <div className="lg:py-32 py-10">
          <div className="w-[14%] text-secondary lg:text-2xl text-lg font-bold border-b-4 border-secondary pb-3 mb-4">
            Testimonial
          </div>
          <p className="lg:text-5xl text-xl text-white font-semibold lg:leading-normal">
            Discover the TPT difference through .
            <span className="text-secondary">Bernd Wiesberger</span>{" "}
            testimonial, DP World Tour Pro Player
          </p>
        </div>
        <iframe
          className="lg:pl-24 pr-12 w-[55%] h-[562px] border-secondary border-1"
          src="https://www.youtube.com/embed/QPOLrbKI5oQ"
          title="User psychology in Technical Writing Ft. Yael Basford, Senior Technical Writer, Akamai"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube1;
