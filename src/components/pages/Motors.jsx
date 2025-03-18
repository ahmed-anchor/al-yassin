'use client'
import React from 'react'
import shakti from '../../assets/motors/shakti-hindi-motor.webp'
import ferat from '../../assets/motors/ferat-motor.webp'
import max from '../../assets/motors/max-motor.webp'
import puna from '../../assets/motors/puna-motor.webp'
import { motion } from 'framer-motion'

const motors = [
  { 
    img: shakti, 
    name: ' shakti مطور شاكتي', 
    description: '' 
  },
  { 
    img: ferat, 
    name: 'مطور فيرات',
    description: '' 
  },
  { 
    img: max, 
    name: 'مطور ماكس هندي', 
    description: 'قوة صناعية مع استهلاك طاقة مثالي للإنتاج المستمر' 
  },
  { 
    img: puna, 
    name: 'مطور بونا هندي', 
    description: '' 
  },
]

export default function Motors() {
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
        {motors.map((motor, index) => (
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
                src={motor.img.src}
                alt={motor.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 250 }}
              />
            </div>
            
            <div className="p-6 space-y-4 Lalezar">
              <h3 className="text-3xl font-medium">
                {motor.name}
              </h3>
              <p className="text-lg leading-relaxed text-justify">
                {motor.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}