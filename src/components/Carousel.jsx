"use client"; // Mark this as a Client Component

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"; // Use Next.js Image component for optimized images

// Import local images
import faba from "../assets/faba.png";
import delixi from "../assets/delixi.png";
import tokal from "../assets/tokal.png";

// Sample data for the carousel
const carouselItems = [
  {
    id: 1,
    image: faba,
  },
  {
    id: 2,
    image: delixi,
  },
  {
    id: 3,
    image: tokal,
  },
];

export const Carousel = () => {
  const controls = useAnimation();
  const carouselRef = useRef(null);

  // Duplicate the carousel items to create a seamless loop
  const duplicatedItems = [...carouselItems, ...carouselItems];

  // Start the animation
  useEffect(() => {
    const carouselWidth = carouselRef.current?.scrollWidth || 0;
    const duration = carouselItems.length * 5; // Adjust speed here

    controls.start({
      x: -carouselWidth / 2, // Move by half the total width
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity, // Repeat infinitely
      },
    });
  }, [controls]);

  return (
    <div className="relative w-full overflow-hidden py-5 bg-[#17323936]">
      <motion.div
        ref={carouselRef}
        className="flex"
        animate={controls}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 sm:w-[280px] sm:h-[120px] w-[200px] h-[100px] mx-12 sm:mx-28" // Bigger gap (mx-10) and fixed size
          >
            <Image
              src={item.image}
              alt={`Carousel Image ${item.id}`}
              width={800} // Adjust based on your image dimensions
              height={400} // Adjust based on your image dimensions
              className="w-full h-full object-cover rounded-2xl" // Rounded corners
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};