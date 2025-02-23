import React from 'react'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <main className='flex flex-col just-content-center w-full items-center h-fit bg-[#00000065] text-[#e4eef3]'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6, ease: 'easeOut' }}
        className='flex flex-col items-end justify-center w-full h-[98vh]  px-6 sm:px-20'>

        <h1 className='Lalezar font-extrabold text-[44px] sm:text-[90px] text-right mt-[-100px] pb-[15px]'>
          الياسين
        </h1>
        <article className="Lalezar font-medium sm:text-[24px] text-right ">
          <p>
          مؤسسة الياسين للتوريدات وهي شركة متخصصه ف الطاقه الشمسية وتنفيذ جميع اعمال الطاقه ع اعلي مستوي وبشكل احترافي وتعمل علي تطوير الخدمات التي تقدمها بشكل مستمر بناءا علي حاجه العملاء ومتطلبات السوق المصري وتتعامل مع العملاء بكل مصداقية وامانة فهم شركاء نجاح مؤسستنا " الياسين لتوريدات "
          </p>
          <p>
          كما ان شركتنا تمتلك افضل المهندسين والكوادر الفنيه الذين يمتلكون الخبره بجانب المهاره والاحترافية وتستخدم افضل الموارد والمعدات الحديثه التي تجعلها الافضل بلا منازع وهذا ما ساعدنا ع كسب ثقة جميع عملائنا بفضل الله
          </p>
        </article>

      </motion.div>
    </main>
  )
}
