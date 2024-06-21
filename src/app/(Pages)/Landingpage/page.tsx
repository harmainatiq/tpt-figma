import type { NextPage } from "next";
import React from "react";
import Hero from "../../globals/Hero";
import SlickSliderComponent from "../../Components/Slider";
import Youtube1 from "../../Components/Wiesberger-testinomal";
import Youtube2 from "../../Components/Performance-explanation";
import WorkingCard from "../../Components/WorkingCard";
import QuestionCard from "../../Components/QuestionCard";
import Footer from "../../Components/Footer";

const Landingpage: NextPage = () => {
  const slides = [
    "/images/IMG_76C4C349A878-1.png",
    "/images/IMG_80FFE1D5DCFA-1.png",
    "/images/IMG_F04E49429192-1.png",
  ];
  return (
    <div>
      <Hero
        title={"GAIN DISTANCE, PRECISION AND STABILITY"}
        heading={"ONLY SPINELESS SHAFTS IN THE WORLD"}
        description1={
          "eeking more distance without sacrificing accuracy? Traditional shafts often force that trade-off. But not with TPT."
        }
        description2={
          "Unlike traditional premium shafts, TPT eliminates parasitic bending during your swing. This means consistent strikes on the clubface, unlocking both distance and precision. With TPT, softer shafts mean more yards and tighter shots."
        }
      />
      {/* <SlickSliderComponent slides={slides} /> */}
      <Youtube1 />
      <Youtube2 />
      <WorkingCard />
      <QuestionCard />
      <Footer />
    </div>
  );
};

export default Landingpage;
