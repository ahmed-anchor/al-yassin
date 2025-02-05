import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const DropButton = ({ toggle }) => {
  const buttonControls = useAnimation(); // Controls for the button animation
  const buttonRef = useRef(null); // Ref for the button element
  const [isClicked, setClick] = useState(false); // State to track button click
  const [isWideScreen, setWideScreen] = useState(false); // State to track screen width

  // Animate the button rotation when `isClicked` changes
  useEffect(() => {
    buttonControls.start({
      rotate: isClicked ? 180 : 0,
      transition: { type: "spring", stiffness: 300, damping: 10 }, // Elastic-like effect
    });

    const checkScreenWidth = () => {
      if (window.innerWidth >= 800) {
        setWideScreen(true); // Set state to true if screen width is >= 768px
      } else {
        setWideScreen(false); // Set state to false if screen width is < 768px
      }
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [isClicked, buttonControls]);

  return (
    <div className={`${isClicked && "border-b-2"} border-blue-500 h-full w-8 dropButton ${isWideScreen?'hidden':''}`}>
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