import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Intro = ({ toggle }) => {
  const circleControls = useAnimation(); // Controls for the circle animation
  const circleRef = useRef(null); // Ref for the circle element

  useEffect(() => {
    const animateCircle = async () => {
      // Yoyo scaling animation (repeat 5 times)
      await circleControls.start({
        scale: 1.4,
        transition: { duration: 0.38, ease: "easeInOut", repeat: 5, repeatType: "reverse" },
      });

      // Final scaling animation to fill the screen
      await circleControls.start({
        scale: 100,
        transition: { duration: 0.56, ease: "circOut" },
      });



      // Trigger the toggle callback
      toggle();
    };

    animateCircle();
  }, [circleControls, toggle]);

  return (
    <div className="overflow-hidden h-screen w-screen bg-[#6094d3] flex justify-center items-center">
      <motion.div
        ref={circleRef}
        className="rounded-full p-4 bg-[#e4eef3]"
        initial={{ scale: 1 }} // Initial scale
        animate={circleControls} // Use the animation controls
      />
    </div>
  );
};
