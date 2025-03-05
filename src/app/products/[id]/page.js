'use client'
import { motion } from "framer-motion";
import faba1 from '../../../assets/threes/faba/faba1.webp'
import faba2 from '../../../assets/threes/faba/faba2.webp'
import faba3 from '../../../assets/threes/faba/faba3.webp'
import tokal1 from '../../../assets/threes/tokal/tokal1.webp'
import tokal2 from '../../../assets/threes/tokal/tokal2.webp'
import tokal3 from '../../../assets/threes/tokal/tokal3.webp'

export default function ProductPage({ params }) {
  const { id } = params;

  // Product configuration with Arabic text
  const products = {
    faba: {
      images: [faba1, faba2, faba3],
      name: "ماسورة ار سي فابا",
      description: "",
    },
    tokal: {
      images: [tokal1, tokal2, tokal3],
      name: "ماسورة توكال",
      description: "",
    },
  };

  const { images, name, description } = products[id] || products.faba;

  return (
    <div className="pt-40">
      <motion.div 
        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        dir="rtl" // Right-to-left layout for Arabic
      >
        {/* Image Grid Container */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-gray-100">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img.src} // Make sure to use .src if using Next.js Image
                alt={`${name} - عرض ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.error('Error loading image:', img);
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Product Info - Arabic Content */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-3xl font-semibold Lalezar">{name}</h3>
          </div>
          <p className="text-1xl text-right leading-relaxed Lalezar">
            {description}
          </p>
          
        </div>
      </motion.div>
    </div>
  );
}