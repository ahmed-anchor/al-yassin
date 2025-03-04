'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16 pt-28 px-4 sm:px-6 lg:px-8 font-lalezar" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto Lalezar"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-[#2a4365]">من نحن</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-[#f8fafc] p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#2a4365]">عن الشركة</h2>
            <p className="text-lg leading-relaxed mb-8">
              مؤسسة الياسين للتوريدات هي شركة متخصصة في الطاقة الشمسية وتنفيذ جميع أعمال الطاقة على أعلى مستوى وبشكل احترافي. 
              تعمل على تطوير الخدمات التي تقدمها بشكل مستمر بناءاً على حاجة العملاء ومتطلبات السوق المصري. 
              تتعامل مع العملاء بكل مصداقية وأمانة فهم شركاء نجاح مؤسستنا.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">الكوادر البشرية</h3>
                <p>تمتلك شركتنا أفضل المهندسين والكوادر الفنية الذين يمتلكون الخبرة بجانب المهارة والاحترافية.</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">التجهيزات</h3>
                <p>نستخدم أفضل الموارد والمعدات الحديثة التي تجعلنا الأفضل بلا منازع، وهذا ما ساعدنا على كسب ثقة جميع عملائنا بفضل الله.</p>
              </div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#2a4365]">الرسالة</h2>
            <p className="text-lg leading-relaxed">
              تكمن رسالتنا في نشر مفهوم الجودة الحقيقي لأعمالنا في مجال الطاقة الشمسية، وتوفير خدمات ذات جودة عالية نحرص بها على رضا كافة العملاء وتلبية طموحاتهم. 
              نبذل كل جهدنا لتوفير نموذج فعلي للجودة العالية من خلال أعمالنا وتعاملاتنا المختلفة، وذلك من أجل خلق تنافس بين كافة الشركات والمؤسسات التي تقدم خدمات الطاقة سواء كانت شركات كبيرة أو ناشئة. 
              وهذه الرسالة من أجل تقديم أفضل الخدمات بأنسب تكلفة.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#2a4365]">الرؤية</h2>
            <p className="text-lg leading-relaxed">
              نتطلع أن يكون اسم مؤسسة الياسين اسماً رائداً في مجال الطاقة الشمسية ونظم الري وخدمات الآبار، بجانب أعمالنا الخاصة في التوريد والتركيب. 
              نسعى دائماً أن نكون الخيار الأول أمام عملائنا في تنفيذ مشاريع الطاقة الشمسية وفق معايير الجودة. 
              التخطيط الناجح والتنفيذ الدقيق والأداء المبتكر والجودة العالية والمصداقية هي معاييرنا. 
              ومع التقدم التكنولوجي المتطور وبشكل سريع، تتطلع شركتنا لدراسة وفهم وتطبيق كل جديد لتوفير أفضل الخدمات في مجال الطاقة الشمسية المتكاملة لعملائنا الكرام.
            </p>
          </motion.div>

          {/* Success Path Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 text-center py-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#2a4365]">السير نحو النجاح</h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              رحلة لا نهاية لها، وسر ذلك النجاح هو الثبات على الهدف. 
              كان هدفنا أن نضع رؤية واضحة لمستقبلنا وتطوير حاضرنا، فبالأمس كانت بدايتنا مشروع واحد، أما اليوم فلدينا - والحمد لله - مجموعة مشاريع ضخمة. 
              نتطلع من خلالها ليس للتوسع محلياً أو إقليمياً، بل نتطلع دائماً إلى الأفضل بكل المستويات نظاماً وانتشاراً وإدارة.
            </p>
          </motion.div>
        </div>
        <Link href='/admin' className='text-center w-full'>
          <h1 className='text-2xl'>Admin</h1>
        </Link>
        <Link href='/change' className='text-center w-full'>
          <h1 className='text-2xl'>Change Credentials</h1>
        </Link>
      </motion.div>
    </div>
  )
}