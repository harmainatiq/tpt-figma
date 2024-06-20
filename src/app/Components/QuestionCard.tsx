// 'use client'

import React from "react";
import Image from "next/image";

import phone from "./../../../public/Images/Group 50.svg";
import message from "./../../../public/Images/Group 49.svg";

function QuestionCard() {
  return (
    <div className="lg:mb-28 mb-20">
      <div className="bg-secondary border-1 border-secondary rounded-3xl lg:px-36 px-10 lg:py-28 py-8 lg:mx-36 mx-14 lg:my-24 my-10">
        <h1 className="text-primary text-center lg:text-3xl text-xl font-bold mb-5 border-primary border-b-4 pb-4">
          <b>Got questions?</b> We‘re here to help. Contact us by phone or
          email, and let’s elevate your game together.
        </h1>
        <p className="text-primary text-center lg:text-2xl text-lg lg:mb-7 mb-4">
          <b>Vincent Delmas </b>– Sales Manager
        </p>
        <div className="flex justify-between lg:flex-row flex-col lg:px-24">
          <div className="flex gap-4 lg:border-r-primary lg:border-r-4 lg:pr-16 pr-10">
            <Image src={phone} alt="icon"></Image>
            <div className="text-primary lg:text-xl text-base">
              +33 6 27 05 80 16
            </div>
          </div>
          <div className="flex gap-4">
            <Image src={message} alt="icon"></Image>
            <div className="text-primary lg:text-xl text-base">
              support@tptgolf.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
