import React from 'react'
import Image from 'next/image';
import products2 from '../assets/products2.png';

export const AboutUs = () => {
  return (
    <main className="flex flex-col lg:flex-row gap-8 row-start-2 items-center bg-[#0000007d] p-6 sm:px-24 sm:py-28">
      <Image 
        src={products2} 
        width={300}
        height={300}
        alt='nothin here'
        objectFit='cover'
        className='w-[500px] h-[400px] flex-shrink-0 absolute z-[-1] left-[-40px] sm:left-[30%]'
      />  
      <article className="flex flex-col gap-4 items-center text-right Zain font-bold" >
        <h1 className="text-[35px] sm:text-[46px] Lalezar font-extrabold" >نبذه عنا</h1>
        <p className="text-[18px] lg:text-[24px] md:text-[20px] text-[#e4eef3] " >
        مؤسسة الياسين للتوريدات وهي شركة متخصصه ف الطاقه الشمسية وتنفيذ جميع اعمال الطاقه ع اعلي مستوي وبشكل احترافي وتعمل علي تطوير الخدمات التي تقدمها بشكل مستمر بناءا علي حاجه العملاء ومتطلبات السوق المصري وتتعامل مع العملاء بكل مصداقية وامانة فهم شركاء نجاح مؤسستنا " الياسين لتوريدات "
كما ان شركتنا تمتلك افضل المهندسين والكوادر الفنيه الذين يمتلكون الخبره بجانب المهاره والاحترافية وتستخدم افضل الموارد والمعدات الحديثه التي تجعلها الافضل بلا منازع وهذا ما ساعدنا ع كسب ثقة جميع عملائنا بفضل الله
السير نحو النجاح
رحلة لانهاية لها وسر ذلك النجاح هو  الثبات علي الهدف فقد كان هدفنا ان نضع رؤية واضحه لمستقبلنا وتطوير حاضرنا فا بالامس كانت بدايتنا مشروع واحد اما اليوم فلدينا والحمد والفضل مجموعة مشاريع ضخمه متطلعين من خلالها ليس للتوسع محليا او اقليميا نتطلع دائما الي الافضل بكل المستويات  نظاما وانتشارا وادارة
        </p>
      </article>
    </main> 
  )
}
