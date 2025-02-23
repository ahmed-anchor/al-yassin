import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"; // Use Next.js Image component for optimized images
import faba from "../assets/faba.webp";
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
    <div className="relative w-full overflow-hidden pt-10 pb-20 bg-[#17323936]">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: true}}
        transition={{ duration: 0.6 }}
        className="text-3xl text-center text-white font-bold Lalezar pb-5 pt-6"
      >
        الشركة وكيل ل
      </motion.h2>
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