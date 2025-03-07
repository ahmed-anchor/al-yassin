'use client'
import React from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-48"
      >
        <h1 className="text-4xl Lalezar text-center mb-12 text-[#2a5b7d]">
          تواصل معنا
        </h1>

        {/* Contact Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold Lalezar border-b-2 border-[#6094d3] pb-2">
                معلومات التواصل
              </h2>
              <div className="space-y-2">
                <p className="flex items-center gap-2 justify-end text-[#000] transition-colors">
                  <span className="Lalezar text-lg">010 1089 5872</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold Lalezar border-b-2 border-[#6094d3] pb-2">
                الصفحه الرسميه
              </h2>
              <a 
                href="https://www.facebook.com/profile.php?id=100054255079858&sk=about"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-end text-[#333] hover:text-[#6094d3] transition-colors"
              >
                <span className="Lalezar text-lg">مؤسسه الياسين للتوريدات</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6094d3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold Lalezar border-b-2 border-[#6094d3] pb-2">
                العنوان
              </h2>
              <div className="space-y-2">
                <p className="text-right text-[#333] Lalezar leading-relaxed">
                  الشرقيه - مدينه العاشر من رمضان<br />
                  الحي ال١٣ -مجاورة ٨٧
                </p>
                <div className="flex justify-end mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6094d3]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="border-t border-[#2a5b7d] mt-8 pt-6 text-center"
        >
          <p className="text-[#333] Lalezar">
            © {new Date().getFullYear()} مؤسسه الياسين للتوريدات. جميع الحقوق محفوظة
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}