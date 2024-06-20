"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import logo from "./../../../public/Images/logo-TPT-300x138 1 (1).svg";
import facebook from "./../../../public/Images/Group 53.svg";
import instagram from "./../../../public/Images/Group 54.svg";
import twitter from "./../../../public/Images/Group 55.svg";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <div className="px-10 py-4 h-[87px]">
      <div className="flex justify-between">
        <Link href="/">
          <Image className="pt-4" src={logo} alt="logo" />
        </Link>

        <ul className="hidden lg:flex space-x-6 lg:flex-row flex-col lg:pl-0 pl-3 gap-3 pt-6 lg:mb-0 mb-3">
          {NavData.map((item, index) => (
            <Link key={index} href={item.link}>
              <li className="font-bold text-xs text-white">{item.nav}</li>
            </Link>
          ))}
        </ul>
        
        
        <div className="hidden lg:flex space-x-2 lg:pl-0 pl-3 gap-2 pt-3">
          <Link href="https://www.facebook.com/">
            <Image src={facebook} alt="icon" />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image src={instagram} alt="icon" />
          </Link>
          <Link href="https://www.twitter.com/">
            <Image src={twitter} alt="icon" />
          </Link>
        </div>

        <span onClick={toggleDrawer} className="text-4xl lg:hidden cursor-pointer">
            ...
          </span>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          style={{
            width: "80%",
            backgroundColor: "black",
          }}
        >
        <ul className="flex lg:flex-row flex-col lg:pl-0 pl-3 gap-7 pt-6 lg:mb-0 mb-3">
          {NavData.map((item, index: number) => (
            <Link key={index} href={item.link}>
              <li className="font-bold text-xs text-white">{item.nav}</li>
            </Link>
          ))}
        </ul>

        <div className="flex lg:pl-0 pl-3 gap-2 pt-3">
          <Link href="https://www.facebook.com/">
          <Image src={facebook} alt="icon"></Image>
          </Link>
          <Link href="https://www.instagram.com/">
          <Image src={instagram} alt="icon"></Image>
          </Link>
          <Link href="https://www.twitter.com/">
          <Image src={twitter} alt="icon"></Image>
          </Link>
        </div>
        </Drawer>
      </div>
    </div>
  );
}

const NavData = [
  {
    nav: "DRIVER SHAFT",
    link: "/Frame1",
  },
  {
    nav: "FAIRWAY WOOD SHAFT",
    link: "/Frame2",
  },
  {
    nav: "ONLINE FITTING",
    link: "/Frame1",
  },
  {
    nav: "FIND A FITTER",
    link: "/Frame2",
  },
  {
    nav: "MY ACCOUNT",
    link: "/Frame1",
  },
  {
    nav: "RETURN TO TPT",
    link: "/Frame2",
  },
];

export default Navbar;
