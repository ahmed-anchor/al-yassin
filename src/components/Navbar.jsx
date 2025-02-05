import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { DropButton } from "./DropButton";
import Link from "next/link";

export const Navbar = () => {
  const yassinControls = useAnimation(); // Controls for the "الياسين" text animation
  const dropButtonControls = useAnimation(); // Controls for the drop button animation
  const btnControls = useAnimation(); // Controls for the button rotation animation
  const [isOpen, setOpen] = useState(false);

  // Animate the navbar and its children on mount
  useEffect(() => {
    const animateNavbar = async () => {
      // Animate "الياسين" text opacity
      await yassinControls.start({
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      });

      // Animate drop button opacity
      await dropButtonControls.start({
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      });

    };

    animateNavbar();
  }, []);

  return (
    <motion.nav
      className="w-full flex flex-col top-0 fixed bg-[#e4eef3] z-50"
    >
      <div className="flex justify-around items-center w-full h-[70px]">
        {/* Animated "الياسين" text */}
        <motion.span
          initial={{ opacity: 0 }} // Initial opacity
          animate={yassinControls} // Use the text animation controls
          className="Zain font-black text-[29px] sm:text-[34px] myShadow"
        >
          الياسين
        </motion.span>
        <ul className="px-2 bg-[#e4eef3]  sm:flex gap-4 justify-between items-center hidden sm:w-[200px] md:w-[250px] ">
          <li>
            <Link
              href="#"
              className="block py-4 hover:bg-white hover:text-blue-500 text-right font-bold Zain"
            >
              مشاريعنا
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 hover:bg-white hover:text-blue-500 text-right font-bold Zain"
            >
              منتجاتنا
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 hover:bg-white hover:text-blue-500 text-right font-bold Zain"
            >
              خدماتنا
            </Link>
          </li>
        </ul>
        {/* Animated DropButton */}
          <DropButton toggle={() => setOpen((prev) => !prev)} />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="py-2 w-full shadow-lg bg-[#e4eef3]">
          <li>
            <Link
              href="#"
              className="block pr-10 py-4 hover:bg-white hover:text-blue-500 text-right font-bold Zain"
            >
              مشاريعنا
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block pr-10 py-2 hover:bg-white hover:text-blue-500 text-right font-bold Zain"
            >
              منتجاتنا
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block pr-10 py-2 hover:bg-white hover:text-blue-500 text-right font-bold Zain"
            >
              خدماتنا
            </Link>
          </li>
        </ul>
      )}
    </motion.nav>
  );
};