'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner } from './Spinner';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import yassin from '../assets/al-yassin.jpg';
import { motion } from 'framer-motion';


export const Modal = () => {
  const [formData, setFormData] = useState({ username: '', phoneNumber: '' });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorNum, setErrorNum] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      console.log(formData)
      setIsLoading(true);
      const response = await axios.post('/api/user', formData);
      setFormData({ username: '', phoneNumber: '' });
      console.log(response.data)
      if(!response.data) {
        setErrorNum(true)
        return
      }
      router.push('/')

    } catch (error) {
      setIsError(true);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0000008a] flex flex-col items-center justify-center p-5 pt-10">
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className=" text-white rounded-full shadow-lg absolute text-3xl font-black top-28 right-5"
        onClick={() => router.push('/')}
      >
        x
      </motion.div>
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
        />
      </motion.div>

      {isLoading ? (
        <Spinner />
      ) : (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">سجل دخول لخدمه تواصل افضل</h1>
          </div>
          {isError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm"
            >
              حدث خطأ أثناء المحاولة، يرجى التأكد من اتصال الإنترنت والمحاولة مرة أخرى
            </motion.div>
          )}

          {errorNum && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm"
            >
              هذا الرقم غير صالح، يرجى ادخال رقم موثوق
            </motion.div>
          )}

          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <input
                dir="rtl"
                type="text"
                placeholder="اسم المستخدم"
                value={formData.username}
                onChange={e => setFormData({ ...formData, username: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <input
                dir="rtl"
                type="number"
                placeholder="رقم الهاتف"
                value={formData.phoneNumber}
                onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                تأكيد وتسجيل الدخول
              </button>
            </motion.div>
          </form>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-center"
      >
        <Link
          href="/admin"
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors underline underline-offset-4"
        >
          الدخول كمسؤول نظام
        </Link>
        
        <p className="mt-4 text-xs text-gray-500 max-w-sm">
          نضمن سرية معلوماتك ولا نشاركها مع أي جهات خارجية بأي شكل من الأشكال
        </p>
      </motion.div>
    </div>
  );
};