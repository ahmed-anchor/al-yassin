'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const images = ['/assets/astone.webp', '/assets/asttow.webp', '/assets/astthree.webp'];

export const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  return (
    <Link
      href='/projects'
      className="relative h-[600px] w-full overflow-hidden"
    >
      {/* Current Image */}
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }} // Fade out after 2 seconds
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={images[currentImageIndex]}
          fill
          alt="slideshow"
          className="object-cover"
        />
      </motion.div>

      {/* Next Image */}
      <motion.div
        key={nextImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Fade in over 1 second
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={images[nextImageIndex]}
          fill
          alt="slideshow"
          className="object-cover"
        />
      </motion.div>

      {/* Black faded layer */}
      <div className="absolute w-full inset-0 bg-black bg-opacity-50 flex flex-col items-end justify-center sm:justify-center p-4">
        {/* First Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[#e4eef3] text-5xl sm:text-6xl font-extrabold mb-6 Lalezar"
        >
          خدماتنا
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#e4eef3] text-right text-2xl sm:text-3xl font-extrabold mb-2 Lalezar"
        >
                    تركيب المحطات
        </motion.h1>
        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="Lalezar text-right text-[#e4eef3] text-sm sm:text-base font-medium mb-4"
        >
          تقدم مؤسسة الياسين خدماتها للشركات وللمزارعين وأصحاب المزارع في تركيب وتشغيل محطات الري بالطاقة الشمسية بقدرات تبدأ من ١ حصان إلى ٢٥٠ حصان.
        </motion.p>

        {/* Second Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[#e4eef3] text-right text-2xl sm:text-3xl font-extrabold mb-2 Lalezar"
        >
          التجارة والتوريد
        </motion.h1>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="Lalezar text-right text-[#e4eef3] text-sm sm:text-base font-medium mb-4"
        >
          تقوم الشركة بتوريد أنظمة الطاقة الشمسية في أي مكان في الجمهورية. الشركة تقدم أفضل الأسعار والعروض في جميع المستلزمات سواء على مستوى الأفراد أو التجار، وأيضًا المصانع والشركات.
        </motion.p>

        {/* Third Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-[#e4eef3] text-right text-2xl sm:text-3xl font-extrabold mb-2 Lalezar"
        >
          خدمة النقل
        </motion.h1>

        {/* Third Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="Lalezar text-right text-[#e4eef3] text-sm sm:text-base font-medium mb-4"
        >
          الشركة لديها خبرات طويلة في تقديم الخدمات في مجال الطاقة الشمسية. الشركة لديها قدرات وعلاقات خاصة في مجال النقل مما يسهل التوصيل السريع والمضمون والآمن للعملاء في أي وقت.
        </motion.p>

        {/* Fourth Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-[#e4eef3] text-right text-2xl sm:text-3xl font-extrabold mb-2 Lalezar"
        >
          المواكبة
        </motion.h1>

        {/* Fourth Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
          className="Lalezar text-right text-[#e4eef3] text-sm sm:text-base font-medium mb-4"
        >
          تتابع الشركة بشكل دائم كل ما هو جديد في مجال الطاقة أو العدد والآلات مما يسهل تقديم خدماتها لعملائها بشكل عصري وحديث دائمًا. نراجع دائمًا سياساتنا لتطوير أفضل خدمات سواء في مرحلة التفاوض أو البيع أو خدمة ما بعد البيع.
        </motion.p>
      </div>
    </Link>
  );
};