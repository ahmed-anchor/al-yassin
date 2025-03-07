'use client'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Spinner } from '../Spinner'
import yassin from '../../assets/al-yassin.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const AdminForm = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [wrong, setWrong] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setWrong(false);

    try {
      const res = await axios.post('/api/admin', formData);
      
      if (!res.data) {
        setWrong(true);
        setIsLoading(false);
        setFormData({ username: '', password: '' });
        return
      } 
      window.location.reload();
    } catch (error) {
      setIsError(true);
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
          className="w-full max-w-md p-4 bg-red-100 rounded-lg text-center"
        >
          <h1 className='text-xl text-red-600'>خطأ في الشبكة، يرجى المحاولة مرة أخرى</h1>
        </motion.div>
      ) : (
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">دخول المسؤولين الآمن</h1>
            <p className="text-sm text-gray-600 mt-2">
              نظام آمن ومشفّر لإدارة المحتوى
            </p>
          </div>

          {wrong && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-100 text-red-700 p-3 rounded-lg text-sm text-center"
            >
              بيانات الدخول غير صحيحة
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <input 
              type='text' 
              placeholder='اسم المستخدم' 
              name='username'
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
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
              placeholder='كلمة المرور' 
              name='password' 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
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
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              تسجيل الدخول
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-xs text-gray-500 mt-4"
          >
            <p>جميع عمليات الدخول يتم تسجيلها ومراقبتها لأغراض أمنية</p>
            <p className="mt-2">نظام حماية متكامل ضد الاختراقات</p>
          </motion.div>
        </motion.form>
      )}
    </div>
  )
}