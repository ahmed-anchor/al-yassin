import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const Options = () => {
  return (
    <div className='w-full h-[200px]'>
      <motion.h1
        initial={{ opacity: 0, scale: .98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
       className='text-[26px] sm:text-[40px] font-bold text-center py-5 Lalezar text-[#e4eef3]'>ليه تختارنا</motion.h1>
      <ul className='flex flex-col sm:flex-row gap-3 justify-around items-center px-2 Lalezar' >
        <li className='bg-[#e4eef3] w-full py-2 rounded-md px-4 sm:w-[200px] lg:w-[280px] text-right h-[150px]' >
          <Link href='#'>
            <h1 className="text-[21px] pb-2 font-bold" >المصداقية</h1>
            <p className='font-normal' >
              نحن نحرص علي علي مصداقيه المكان و الاهتام بخصوصية العميل
            </p>
          </Link>
        </li>
        <li className='bg-[#e4eef3] w-full py-2 rounded-md px-4 sm:w-[200px] lg:w-[280px] text-right h-[150px]' >
          <Link href='#'>
            <h1 className="text-[21px] pb-2 font-bold" >جودة المنتجات</h1>
            <p className='font-normal' >
              نحرص دائما على جودة منتجاتنا و رضا العلاء بها
            </p>
          </Link>
        </li>
        <li className='bg-[#e4eef3] w-full py-2 rounded-md px-4 sm:w-[200px] lg:w-[280px] text-right h-[150px]' >
          <Link href='#'>
            <h1 className="text-[21px] pb-2 font-bold" >نهتم لسماع آراكم</h1>
            <p className='font-normal' >
              نهتم برآراكم لتطوير خدمه مرضيه جدا
            </p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
