'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ferat from '../../assets/tolombat/ferat.webp'
import sp from '../../assets/tolombat/sp.webp'
import shakti from '../../assets/tolombat/shkti.webp'
import nafora from '../../assets/tolombat/nafora.webp'

const tolombatItems = [
  { 
    img: ferat, 
    name: 'طلمبات فيرات', 
    description: '' 
  },
  { 
    img: sp, 
    name: 'طلمبات SP',
    description: '' 
  },
  { 
    img: shakti, 
    name: 'طلمبات شاكتي', 
    description: '' 
  },
  { 
    img: nafora, 
    name: 'طلمبات نافورة', 
    description: '' 
  },
]

export default function Tolombat() {
  return (
    <div dir="rtl" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
      <motion.div 
        className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        {tolombatItems.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="relative h-72 w-full">
              <motion.img
                src={item.img.src}
                alt={item.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 250 }}
              />
            </div>
            
            <div className="p-6 space-y-4 Lalezar">
              <h3 className="text-3xl font-medium">
                {item.name}
              </h3>
              <p className="text-lg leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}