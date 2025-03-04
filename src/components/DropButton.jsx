import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const DropButton = ({ toggle }) => {
  const buttonControls = useAnimation(); // Controls for the button animation
  const buttonRef = useRef(null); // Ref for the button element
  const [isClicked, setClick] = useState(false); // State to track button click

  // Animate the button rotation when `isClicked` changes
  useEffect(() => {
    buttonControls.start({
      rotate: isClicked ? 180 : 0,
      transition: { type: "spring", stiffness: 300, damping: 10 }, // Elastic-like effect
    });
  }, [isClicked, buttonControls]);

  return (
    <div className={`${isClicked && "border-b-2"} border-blue-300 h-full w-8 dropButton block sm:hidden`}>
      <motion.button
        ref={buttonRef}
        onClick={() => {
          setClick((prev) => !prev); // Toggle the clicked state
          toggle(); // Trigger the callback
        }}
        className="btn h-full w-full myShadow"
        animate={buttonControls} // Use the animation controls
      >
        ▼
      </motion.button>
    </div>
  );
};