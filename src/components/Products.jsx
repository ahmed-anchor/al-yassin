'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const products = [
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
  '/assets/pipes/faba-pipe.webp',
];

export function Products() {
  const containerRef = useRef(null);

  return (
    <Link
    href='/products'
    className="relative w-full overflow-hidden pb-32 pt-16 bg-[#00000065] scrollbar-hide">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="text-4xl text-center text-white font-bold Lalezar pb-8">منتجاتنا</motion.h2>
      <motion.div
        ref={containerRef}
        className="flex gap-4 w-max overflow-hidden"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "loop" }}
      >
        {[...products, ...products].map((src, index) => (
          <motion.div
            key={index}
            className="relative aspect-square w-64 flex-shrink-0 overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={'/assets/pipes/faba-pipe.webp'}
              alt={`Product ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        ))}
      </motion.div>
    </Link>
  );
}