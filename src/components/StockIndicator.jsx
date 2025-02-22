'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StockIndicator = () => {
  const [isWideScreen, setWideScreen] = useState(null); // Start with null
  const [isHydrated, setIsHydrated] = useState(false);

  // First useEffect for hydration check
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Second useEffect for window logic
  useEffect(() => {
    if (!isHydrated) return;
    
    const handleResize = () => {
      setWideScreen(window.innerWidth >= 500);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isHydrated]);

  // Prevent rendering until hydrated
  if (!isHydrated || isWideScreen === null) {
    return (
      <div className="w-full h-[500px] bg-[#e4eef3] animate-pulse" />
    );
  }

  // Now safe to use window-dependent values
  const points = isWideScreen ? 
    "20,430 240,140 350,230 500,20" : 
    "20,290 160,110 220,170 320,40";

  return (
    <div className="w-full h-fit sm:pb-[135px] pb-[50px] sm:pt-[70px] pt-[50px] flex justify-around items-start perspective bg-[#e4eef3]">
      {/* 3D Container */}
      <motion.div
        className="w-[340px] h-[300px] relative preserve-3d scale-150"
        initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
        whileInView={{ rotateX: 20, rotateY: -35, scale: 0.8, x: isWideScreen ? -200 : -40 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
      >
        {/* SVG */}
        <motion.svg
          width={isWideScreen ? 600 : 360}
          height={440}
          className="block absolute inset-0 sm:ml-56"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ... (keep all existing SVG elements unchanged) ... */}
        </motion.svg>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: isWideScreen ? -60 : 0 }}
        viewport={{ once: true, amount: .1 }}
        transition={{ delay: 2.1, duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-end justify-evenly h-full"
      >
        {/* ... (keep text elements unchanged) ... */}
      </motion.div>
    </div>
  );
};

// CountUp component remains exactly the same

export default StockIndicator;