// BackgroundImage.js
import React from 'react';
import Image from 'next/image';
import bg from './../../../public/compressed-images/Group 63.webp';

const BackgroundImage = () => (
  <Image
    src={bg}
    alt="Description of image"
    fill
    objectFit="cover"
    quality={60}
    className="absolute top-0 left-0 w-full h-full -z-10"
  />
);

export default BackgroundImage;
