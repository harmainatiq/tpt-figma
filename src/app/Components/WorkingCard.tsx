'use client'

import React from "react";
import Image from "next/image";

import diagonal from "./../../../public/Images/montage-TPT-Golf_V2-2048x1170 1.svg";

function WorkingCard() {
  return (
    <div className="lg:mb-28 mb-14">
      <div className="bg-secondary flex lg:flex-row flex-col lg:gap-6 gap-3 lg:px-14 px-6 lg:py-24 py-12">
        <div className="lg:w-[50%]">
          <h1 className="text-5xl font-bold mb-8 text-primary">
            How Does it Works?
          </h1>
          <p className="text-lg mb-9 text-primary">
            TPT automated manufacturing process preserves fiber alignment along
            the shaft’s axis during winding on a conical mandrel. This departure
            from conventional methods, which often result in up to 3° of fiber
            off-axing, eliminates parasitic bending during the swing.<br></br>
            <br></br>Additionally, our Thin Ply Material, with graphite plies
            twice as thin as traditional shafts, ensures a more consistent
            shaft, giving you instantaneous and clear feedback.
          </p>
          <button className="bg-primary lg:w-72 w-52 lg:h-12 h-8 lg:text-2xl text-base font-bold items-center text-white lg:mb-0 mb-5">
            Find My Shaft
          </button>
        </div>
        <Image className="lg:w-[50%]" src={diagonal} alt="img"></Image>
      </div>
    </div>
  );
}

export default WorkingCard;
