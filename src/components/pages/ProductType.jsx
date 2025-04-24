'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { Spinner } from '@/components/Spinner'
import { setUserSession, getSession } from '../../../lib/lib'
import { motion } from 'framer-motion'
import axios from 'axios'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import DeleteProduct from './delete/DeleteProduct'

export function ProductType({ id }) {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isError, setError] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);

  const getProducts = async () => {
    setLoading(true)
    try {
      const session = await getSession();
      setIsAuthed(session);
      const response = await axios.post('/api/getProduct' , { productType: id });
      setProducts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setUserSession();
    getProducts();
  }
  , [])

  return (
    <>
      <div className="min-h-screen pb-12 pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden font-lalezar" dir="rtl">
    {
      isLoading ? <div className="flex justify-center items-center h-screen"><Spinner /></div>:
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
        {
        isError? <div className="text-red-500 text-center">{isError}</div>:
          products.map((product, index) => (
            <div
              key={product._id}
            >
              {isAuthed && <DeleteProduct id={product._id} />}
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
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    priority={index < 3}
                  />
                </div>
                <div className="p-6 Lalezar">
                  <h3 className="text-3xl font-medium mb-4">{product.name}</h3>
                  <p className="text-xl">{product.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    }
      </div>
      <Footer />
    </>
  )
}