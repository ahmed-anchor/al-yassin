'use client'
import React from 'react'
import delexi from '../../assets/inverter/delexi-inverter.webp'
import himel from '../../assets/inverter/himel-inverter.webp'
import invt from '../../assets/inverter/invt-inverter.webp'
import veichi from '../../assets/inverter/veichi-inverter.webp'
import { motion } from 'framer-motion'

const inverters = [
  { 
    img: delexi, 
    name: 'إنفرتر ديلوكسي', 
    description: 'تحويل طاقة عالي الكفاءة مع نظام تبريد متطور للاستخدامات المكثفة' 
  },
  { 
    img: himel, 
    name: 'إنفرتر هيميل', 
    description: 'أداء صناعي مع تقنيات مراقبة ذكية وتحكم دقيق بالطاقة' 
  },
  { 
    img: invt, 
    name: 'إنفرتر إنفت', 
    description: 'تحكم ترددي دقيق للتطبيقات الحساسة والعمليات الدقيقة' 
  },
  { 
    img: veichi, 
    name: 'إنفرتر فيتشي', 
    description: 'تقنية توفير طاقة مع تصميم مدمج وحداتي مرن' 
  },
]

export default function Inverters() {
  return (
    <div dir="rtl" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              staggerChildren: 0.25
            }
          }
        }}
      >
        {inverters.map((inverter, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-[300px] overflow-hidden rounded-t-xl">
              <motion.img
                src={inverter.img.src}
                alt={inverter.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 250 }}
              />
            </div>
            
            <div className="p-5 space-y-3 Lalezar">
              <h3 className="text-3xl font-medium">
                {inverter.name}
              </h3>
              <p className="text-lg leading-relaxed text-justify">
                {inverter.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}