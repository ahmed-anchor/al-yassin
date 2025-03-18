'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ja from '../../assets/solar-plates/ja-solar-plate.webp'
import jingo from '../../assets/solar-plates/jingo-plate.webp'
import trina from '../../assets/solar-plates/trina-solar.webp'

const solarPlates = [
  {
    img: ja,
    name: 'ألواح جي أي',
    description: ''
  },
  {
    img: jingo,
    name: 'ألواح جينغو',
    description: ''
  },
  {
    img: trina,
    name: 'ألواج ترينا',
    description: ''
  },
]

export default function SolarPlates() {
  return (
    <div dir="rtl" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {solarPlates.map((plate, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-52 overflow-hidden rounded-t-xl">
              <motion.img
                src={plate.img.src}
                alt={plate.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
            
            <div className="p-5 space-y-2 Lalezar">
              <h3 className="text-lg font-medium">
                {plate.name}
              </h3>
              <p className="text-sm text-justify leading-relaxed">
                {plate.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}