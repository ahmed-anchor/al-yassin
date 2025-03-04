import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const StockIndicator = () => {
  const [isWideScreen, setWideScreen] = useState(false); // Initialize with safe value

  // Handle screen resize (client-side only)
  useEffect(() => {
    // Set initial value after mount
    setWideScreen(window.innerWidth >= 500);
    
    const handleResize = () => {
      setWideScreen(window.innerWidth >= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Points for the polyline (use default until hydration completes)
  const points = isWideScreen ? "20,430 240,140 350,230 500,20" : "20,290 160,110 220,170 320,40";

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
          {/* Horizontal bar */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            x1="20"
            y1={isWideScreen ? 430 : 290}
            x2={isWideScreen ? 550 : 360}
            y2={isWideScreen ? 430 : 290}
            stroke="#000000"
            strokeWidth={isWideScreen ? 3.5 : 1.5}
          />

          {/* Vertical bar */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
            x1="20"
            y1={isWideScreen ? 430 : 290}
            x2="20"
            y2="0"
            stroke="#000000"
            strokeWidth={isWideScreen ? 3.5 : 1.5}
          />

          {/* Animated Increasing trend line */}
          <motion.polyline
            points={points}
            stroke="#00cc00"
            strokeWidth={isWideScreen ? 5.5 : 3.5}
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 1.7, ease: "easeOut" }}
          />

          {/* Animated Percentage Text */}
          <motion.text
            x="250"
            y="35"
            className="text-[20px] sm:text-[30px] font-bold"
            fill="#00cc00"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <CountUp target={98} />
          </motion.text>
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
        <h1 className="text-[28px] sm:text-[40px] relative text-center font-normal Lalezar">
          رضا العملاء بالخدمه
        </h1>
        <article className="text-[0] sm:text-[24px] relative text-center font-normal Lalezar flex-wrap overflow-clip">
          الثقه و الامانه هو السر 
        </article>
      </motion.div>
    </div>
  );
};

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.tspan
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.9 }}
      transition={{ delay: 0.2, duration: 1 }}
      onAnimationStart={() => {
        let start = null;
        const duration = 2000;

        const animate = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);
          setCount(Math.round(target * percentage));

          if (percentage < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }}
    >
      {`+${count}%`}
    </motion.tspan>
  );
};