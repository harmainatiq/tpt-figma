'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../../public/Images/logo-TPT 1.svg";
import mail from "./../../../public/Images/Group 51.svg";

function Footer() {
  return (
    <div className="bg-footer bg-cover lg:pt-28 pt-20">
      <h1 className="text-secondary lg:text-6xl text-2xl font-extrabold text-center mb-5">
        SIGN UP
      </h1>
      <p className="w-[35%] mx-[32%] text-secondary text-xl font-medium text-center mb-6">
        Stay up to date on the latest news and product releases from TPT.
      </p>
      <div className="flex flex-col">
        <input
          className="w-[40%] lg:h-12 h-9 pl-5 mx-[30%] mb-5 text-primary"
          type="text"
          placeholder="Enter your Email to join our Mailing List"
        ></input>
        <button className="bg-secondary border-secondary border-1 w-[40%] lg:h-12 h-9 mx-[30%] text-primary lg:text-xl text-base font-extrabold text-center">
          SUBSCRIBE
        </button>

        <ul className="flex gap-2 lg:justify-between bg-secondary lg:h-20 h-14 lg:py-7 py-5 lg:px-10 px-7 lg:my-20 my-14">
          {FooterData.map((item, index: number) => (
            <Link key={index} href={item.link}>
              <li className="font-extrabold lg:text-xl text-[8px] text-primary lg:border-r-primary lg:border-r-2 lg:pr-9">
                {item.footer}
              </li>
            </Link>
          ))}
          <Link href="/">
              <li className="font-extrabold lg:text-xl text-[8px] text-primary lg:pr-9">
              Cookie Policy
              </li>
            </Link>
        </ul>
        <Image
          className="w-[30%] mx-[35%] lg:mb-9 mb-6"
          src={logo}
          alt="logo"
        ></Image>
        <p className="text-center text-white lg:text-xl text-base lg:mb-9 mb-6">
          Chemin du Closel, 3<br></br>CH-1020 Renens, Switzerland
        </p>
        <button className="flex justify-around bg-secondary border-secondary border-1 w-[8%] lg:h-6 h-4 mx-[46%] py-[2px] text-primary text-sm text-center lg:mb-9 mb-6">
          <Image className="py-[5px]" src={mail} alt="icon"></Image>
          Email Us!
        </button>
        <div className="text-white text-center lg:text-sm text-xs font-light border-t-white border-t-[1px] py-2">
          All Rights Reserved, TPT
        </div>
      </div>
    </div>
  );
}

const FooterData = [
  {
    footer: "CONTACT FAQ",
    link: "/",
  },
  {
    footer: "Privacy Policy",
    link: "/",
  },
  {
    footer: "FITTER LOGIN",
    link: "/",
  },
  {
    footer: "TERMS",
    link: "/",
  },
  {
    footer: "warranty conditions",
    link: "/",
  },
  // {
  //   footer: "Cookie Policy",
  //   link: "/",
  // },
];

export default Footer;
