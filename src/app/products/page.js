'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import faba from '../../assets/pipes/faba-pipe.webp'
import tokal from '../../assets/pipes/tokal-pipe.webp'
import maxmotor from '../../assets/motors/max-motor.webp'
import delexi from '../../assets/inverter/delexi-inverter.webp'
import invt from '../../assets/inverter/invt-inverter.webp'
import veichi from '../../assets/inverter/veichi-inverter.webp'
import himel from '../../assets/inverter/himel-inverter.webp'

const products = [
  { id: 1, name: 'أنبوب فابا', description: 'حلول أنابيب صناعية عالية الجودة', image: faba },
  { id: 2, name: 'أنبوب توكال', description: 'أنظمة أنابيب متينة لاستخدامات البناء', image: tokal },
  { id: 3, name: 'محرك ماكس', description: 'محركات صناعية عالية الأداء', image: maxmotor },
  { id: 4, name: 'محول ديلكسى', description: 'أنظمة تحويل طاقة موفرة للطاقة', image: delexi },
  { id: 5, name: 'محول إنفيت', description: 'تقنية متقدمة لتحويل التردد', image: invt },
  { id: 6, name: 'محول فيتشي', description: 'إدارة طاقة دقيقة التحكم', image: veichi },
  { id: 7, name: 'محول هيميل', description: 'محولات صناعية عالية الموثوقية', image: himel },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 pb-12 pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden font-lalezar" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  priority={index < 3}
                />
              </div>
              <div className="p-6 Lalezar">
                <h3 className="text-3xl font-medium mb-4">{product.name}</h3>
                <p className="text-xl">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}