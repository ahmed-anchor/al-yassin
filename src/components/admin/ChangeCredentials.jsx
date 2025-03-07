'use client'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Spinner } from '../Spinner'
import { useRouter } from 'next/navigation'
import yassin from '../../assets/al-yassin.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const ChangeCredentials = () => {
  const router = useRouter()
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setIsError(false)
    setSuccess(false)

    try {
      const response = await axios.post('/api/admin/credentials', formData)
      
      if (response.data) {
        setSuccess(true)
        setFormData({ username: '', password: '' })
        setTimeout(() => router.push('/'), 1500)
      }
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full min-h-screen p-4 bg-gray-100 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="mb-8"
      >
        <Image
          src={yassin}
          alt="Al Yassin"
          width={120}
          height={120}
          className="rounded-full border-4 border-white shadow-xl"
          priority
        />
      </motion.div>

      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-md p-4 bg-red-100 rounded-lg text-center mb-4"
        >
          <h1 className='text-xl text-red-600'>فشل التحديث، يرجى المحاولة مرة أخرى</h1>
        </motion.div>
      ) : success ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-md p-4 bg-green-100 rounded-lg text-center mb-4"
        >
          <h1 className='text-xl text-green-600'>تم تحديث البيانات بنجاح!</h1>
        </motion.div>
      ) : (
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">تحديث بيانات الدخول</h1>
            <p className="text-sm text-gray-600 mt-2">
              يرجى إدخال بيانات الاعتماد الجديدة بعناية
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <input 
              type='text' 
              placeholder='اسم المستخدم الجديد' 
              name='username'
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right"
              dir="rtl"
              required
              value={formData.username}
              onChange={e => setFormData({ ...formData, username: e.target.value })}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <input
              type='password' 
              placeholder='كلمة المرور الجديدة' 
              name='password' 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-right"
              dir="rtl"
              required
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button 
              type='submit'
              className="w-full bg-green-600 text-white p-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              تحديث البيانات
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-xs text-gray-500 mt-4"
          >
            <p>سيتم تطبيق التغييرات فورًا على جميع أنظمة الدخول</p>
            <p className="mt-2">نظام التحديث الآمن يعمل بتقنية التشفير الكامل</p>
          </motion.div>
        </motion.form>
      )}
    </div>
  )
}