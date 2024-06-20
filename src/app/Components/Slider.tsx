'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../Styles/slick-custom.css";

interface SlickSliderProps {
  slides: string[];
}

const SlickSliderComponent: React.FC<SlickSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-slider bg-cover lg:h-[870px] h-[470px] lg:mb-28 mb-12 lg:pt-48 pt-20">
      <div className="lg:text-6xl text-xl font-extrabold lg:leading-normal text-secondary text-center lg:px-56 px-14 lg:py-10 py-10 lg:mb-14 mb-8">
        60 VICTORIES ON TOURS SINCE 2016
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide p-2">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-[30%] h-auto rounded-lg shadow-lg mx-[35%] border-secondary border-[1px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSliderComponent;
