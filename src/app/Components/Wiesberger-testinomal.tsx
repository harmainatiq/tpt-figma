"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import yt from "./../../../public/Images/image 2.svg";

// Dynamically import the YoutubeVideoPlayer component
const YoutubeVideoPlayer = React.lazy(() => import('./../suspense-components.tsx/YouTubeVideoPlayer'));

const embedID = "QPOLrbKI5oQ";

function Youtube1() {
  const [imageClicked, setImageClicked] = useState(false);

  const onThumbnailClick = () => {
    setImageClicked(true);
  };

  useEffect(() => {
    const playImg = document.querySelector("#play-button");

    if (playImg) {
      playImg.addEventListener("click", onThumbnailClick, { once: true });
    }
    return () => {
      if (playImg) {
        playImg.removeEventListener("click", onThumbnailClick);
      }
    };
  }, []);

  return (
    <div>
      <div className="lg:px-10 px-6 flex lg:flex-row flex-col lg:gap-14 gap-3 lg:mb-28 ">
        <div className="lg:py-32 py-10">
          <div className="w-[14%] text-secondary lg:text-2xl text-lg font-bold border-b-4 border-secondary pb-3 mb-4">
            Testimonial
          </div>
          <p className="lg:text-5xl text-xl text-white font-semibold lg:leading-normal">
            Discover the TPT difference through{" "}
            <span className="text-secondary">Bernd Wiesberger</span> testimonial,
            DP World Tour Pro Player
          </p>
        </div>

        <div className="lg:mr-24 mr-12 w-[65%] h-[562px] border-secondary border-1 relative bg-[darkgray] flex justify-center items-center">
          {!imageClicked ? (
            <>
              <Image
                src={yt}
                layout="fill"
                objectFit="cover"
                alt="yt thumbnail"
                priority
              />
              <img
                id="play-button"
                className="h-[50px] w-[50px] z-[1]"
                src="http://addplaybuttontoimage.way4info.net/Images/Icons/7.png"
                alt="play button"
              />
            </>
          ) : (
            <Suspense fallback={<div>Loading video...</div>}>
              <YoutubeVideoPlayer embedID={embedID} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default Youtube1;
