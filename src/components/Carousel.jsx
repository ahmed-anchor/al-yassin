import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import faba from '../assets/faba.png'
import delixi from '../assets/delixi.png'
import tokal from '../assets/tokal.png'


export const Carousel = () => {
  return (
    <div className='relative h-[270px] bg-[#f6f6f6] flex flex-col justify-between items-center'>
      <h1 className='Lalezar font-extrabold text-[26px] sm:text-[35px]' >
        الشركه وكيل ل
      </h1>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4, ease: 'easeOut', delay: 3 }}
      className='flex justify-between items-center w-full overflow-scroll'>
        <Image src={faba}  width={300} height={300} alt={'no image'}/>
        <Image src={delixi}  width={300} height={300} alt={'no image'}/>
        <Image src={tokal}  width={300} height={300} alt={'no image'}/>
      </motion.div>
    </div>
  )
}
