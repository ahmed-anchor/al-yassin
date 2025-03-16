'use client'

import React from 'react'
import dc from '../../assets/cables/dc.webp'
import bahhari from '../../assets/cables/bahhari.webp'
import { motion } from 'framer-motion'

const cables = [
  {
    img: dc,
    name: 'كابلات تيار مستمر',
    description: 'كابلات عالية الجودة مع عزل حراري ممتاز لتحمل الجهد العالي'
  },
  {
    img: bahhari,
    name: 'كابلات بحري',
    description: 'تصميم مقاوم للعوامل الجوية مع حماية ضد التآكل في البيئات القاسية'
  },
]

export default function Cables() {
  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {cables.map((cable, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-48 overflow-hidden rounded-t-xl">
              <motion.img
                src={cable.img.src}
                alt={cable.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 280 }}
              />
            </div>
            
            <div className="p-5 space-y-2 Lalezar">
              <h3 className="text-3xl font-medium">
                {cable.name}
              </h3>
              <p className="text-lg text-justify leading-relaxed">
                {cable.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}