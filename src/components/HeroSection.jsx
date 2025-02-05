import React from 'react'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: .4, duration: 1, ease: 'easeOut' }}
      className='flex flex-col just-content-center w-full items-center h-fit bg-[#00000065] text-[#e4eef3]'
    >
      <div className='flex flex-col items-end justify-center w-full h-screen px-6 sm:px-20'>

        <h1 className='Lalezar font-extrabold text-[54px] sm:text-[90px] text-right mt-[-100px] pb-[40px]'>
          الياسين
        </h1>
        <article className="Zain font-extrabold sm:text-[24px] text-right ">
          مؤسسة الباسين للتوريدات وهي شركة متخصصه في الطاقة الشمسية وتنفيذ جميع أعمال الطاقة على مستوي وبشكل احترافي وتعمل على تطوير الخدمات التي تقدمها بشكل مستمر بناءً على حاجة العملاء ومتطلبات السوق المصري وتتعامل مع العملاء بكل مصداقية وأمانة فهم شوكاء نجاح مؤسستنا " الباسين لتوريدات
        </article>

      </div>
    </motion.main>
  )
}
