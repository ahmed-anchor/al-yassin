'use client'
import React from 'react'
import { useEffect } from 'react'
import { setUserSession } from '../../../lib/lib'
import { motion } from 'framer-motion'
import Image from 'next/image'
import faba from '../../assets/pipes/faba-pipe.webp'
import tokal from '../../assets/pipes/tokal-pipe.webp'
import shaktimotor from '../../assets/motors/shakti-hindi-motor.webp'
import himel from '../../assets/inverter/himel-inverter.webp'
import dc from '../../assets/cables/dc.webp'
import ja from '../../assets/solar-plates/ja-solar-plate.webp'
import ferat from '../../assets/tolombat/ferat.webp'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

const motors = [
  { id: 1, name: 'مواتير', description: '', image: shaktimotor },
]
const tolombat = [
  { id: 2, name: 'طلمبات', description: '', image: ferat },
]
const plates = [
  { id: 3, name: 'الواح طاقه', description: '', image: ja },
]
const inverters = [
  { id: 4, name: 'انفرترات', description: '', image: himel },
];
const cables = [
  { id: 5, name: 'كابلات', description: '', image: dc },
]
const products2 = [
  { id: 6, name: 'ماسورة ار سي فابا', description: 'مواسير بتكنولوجيا تركي و صناعه مصريه', image: faba },
  { id: 7, name: 'ماسورة توكال', description: 'مواسير بتكنولوجيا هندي و صناعه مصريه', image: tokal },
]

export function Products() {


  useEffect(() => {
    setUserSession();
  }
  , [])


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
          {products2.map((product, index) => (
              <Link 
              key={product.id}
              href={index==0? '/products/faba': '/products/tokal'}>
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
            {inverters.map((product, index) => (
              <Link
              key={product.id}
              href="/products/inverters">
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
            {tolombat.map((product, index) => (
              <Link
              key={product.id}
              href="/products/tolombat">
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
            {cables.map((product, index) => (
              <Link
              key={product.id}
              href="/products/cables">
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
            {motors.map((product, index) => (
              <Link
              key={product.id}
              href="/products/motors">
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
            {plates.map((product, index) => (
              <Link
              key={product.id}
              href="/products/plates">
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