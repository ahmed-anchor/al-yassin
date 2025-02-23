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
  { id: 1, name: 'Faba Pipe', description: 'High-quality industrial piping solution', image: faba },
  { id: 2, name: 'Tokal Pipe', description: 'Durable construction-grade piping systems', image: tokal },
  { id: 3, name: 'Max Motor', description: 'High-performance industrial motors', image: maxmotor },
  { id: 4, name: 'Delexi Inverter', description: 'Energy-efficient power conversion systems', image: delexi },
  { id: 5, name: 'INVT Inverter', description: 'Advanced frequency conversion technology', image: invt },
  { id: 6, name: 'Veichi Inverter', description: 'Precision-controlled power management', image: veichi },
  { id: 7, name: 'Himel Inverter', description: 'Reliable industrial-grade inverters', image: himel },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industrial Solutions Catalog</h1>
          <p className="text-xl text-gray-600">
            Discover our premium range of industrial pipes, motors, and inverters
          </p>
        </div>

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
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                  priority={index < 3} // Load first 3 images immediately
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}