'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import faba from '../../assets/pipes/faba-pipe.webp'
import tokal from '../../assets/pipes/tokal-pipe.webp'
import maxmotor from '../../assets/motors/max-motor.webp'
import puna from '../../assets/motors/puna-motor.webp'
import delexi from '../../assets/inverter/delexi-inverter.webp'
import invt from '../../assets/inverter/invt-inverter.webp'
import veichi from '../../assets/inverter/veichi-inverter.webp'
import himel from '../../assets/inverter/himel-inverter.webp'
import bahhari from '../../assets/cables/bahhari.webp'
import dc from '../../assets/cables/dc.webp'
import trina from '../../assets/solar-plates/trina-solar.webp'
import jingo from '../../assets/solar-plates/jingo-plate.webp'
import ja from '../../assets/solar-plates/ja-solar-plate.webp'

import { Footer } from '@/components/Footer'
import Link from 'next/link'

const products = [
  { id: 1, name: 'ماطور ماكس', description: 'مطور ماكس هندي', image: maxmotor },
  { id: 2, name: 'انفرتر ديلكسى', description: 'أنظمة تحويل طاقة موفرة للطاقة', image: delexi },
  { id: 3, name: 'محول إن في تي', description: '', image: invt },
  { id: 4, name: 'محول فيتشي', description: '', image: veichi },
  { id: 5, name: 'محول هيميل', description: '', image: himel },
  { id: 6, name: 'كابلات دي سي الماني', description: '', image: dc },
  { id: 7, name: 'كابلات بحاري', description: '', image: bahhari },
  { id: 8, name: 'موتور بونا', description: '', image: puna },
  { id: 9, name: 'الواح JA solar', description: '', image: ja },
  { id: 10, name: 'الواح ترينا', description: '', image: trina },
  { id: 11, name: 'الواح جينجو', description: '', image: jingo },
];

const products2 = [
  { id: 12, name: 'ماسورة ار سي فابا', description: 'مواسير بتكنولوجيا تركي و صناعه مصريه', image: faba },
  { id: 13, name: 'ماسورة توكال', description: 'مواسير بتكنولوجيا هندي و صناعه مصريه', image: tokal },

]

export default function Page() {
  return (
    <>
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
                  delayChildren: 0.001,
                  staggerChildren: 0.001
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
            {products2.map((product, index) => (
              <Link 
              key={product.id}
              href={products.id==1? '/products/faba': '/products/tokal'}>
                <motion.div
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
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}