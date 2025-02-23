'use client'
import { motion } from 'framer-motion'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import monira from '../../assets/solar-plates/el-monira.webp'
import menia_amh from '../../assets/solar-plates/menia-amh.webp'
import naga_hamadi from '../../assets/solar-plates/naga-hamadi.webp'
import asher from '../../assets/solar-plates/al-asher.webp'
import baharia from '../../assets/solar-plates/baharia.webp'
import khargia from '../../assets/solar-plates/el-khargia.webp'
import natron from '../../assets/solar-plates/el-natron.webp'
import wadi20 from '../../assets/solar-plates/el-wadi-20.webp'
import wadi_gidid from '../../assets/solar-plates/wadi-gidid.webp'
import tagamo3 from '../../assets/solar-plates/tagamo3.webp'

const projects = [
  {
    title: "مشروع المنيرة",
    description: "إنشا محطه طاقه شمسيه بقدرة 15 كيلو وات في المنيره",
    image: monira
  },
  {
    title: "مشروع منيا القمح",
    description: "انشاء محطه انتره في منيا القمح",
    image: menia_amh
  },
  {
    title: "مشروع نجع حمادي",
    description: "إنشاء محطة طاقة شمسية بقدرة 14 كيلو وات في نجع حمادي",
    image: naga_hamadi
  },
  {
    title: "مشروع وادي النطرون",
    description: "إنشاء محطة طاقة شمسية بقدرة 40 كيلو وات في وادي النطرون",
    image: natron
  },
  {
    title: "مشروع الوادي جديد",
    description: "إنشاء محطة طاقة شمسية بقدرة 14 كيلو وات في الوادي الجديد",
    image: wadi_gidid
  },
  {
    title: "الوادي الجديد",
    description: "إنشاء محطة طاقة شمسية بقدرة 20 كيلو وات في الوادي الجديد",
    image: wadi20
  },
  {
    title: "مشروع الخارجة",
    description: "إنشاء محطة طاقة شمسية بقدرة 20 كيلو وات في الخارجه",
    image: khargia
  },
  {
    title: "مشروع  الواحات البحرية",
    description: "إنشاء محطة طاقة شمسية بقدرة 25 كيلو وات في الواحات البحريه",
    image: baharia
  },
  {
    title: "مشروع العاشر من رمضان",
    description: "إنشاء محطة اوف جريد بقدرة 8,880 كيلو وات في العاشر من رمضان",
    image: asher
  },
  {
    title: "مشروع التجمع الخامس",
    description: "إنشاء محطة اوف جريد بقدرة 3 كيلو وات في التجمع الخامس",
    image: tagamo3
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full px-4 py-28 sm:px-6 lg:px-8 bg-[#00000082]">
        <div className="max-w-7xl mx-auto" dir="rtl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 Lalezar text-[#e4eef3]"
          >
            مشاريعنا السابقة
          </motion.h2>

          {/* Vertical List Container */}
          <div className="space-y-8 px-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative w-full h-96 cursor-pointer"
              >
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform-gpu"
                    sizes="(max-width: 768px) 100vw, 75vw"
                    priority={index < 3}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="text-white space-y-2 text-right"
                    >
                      <h3 className="text-3xl font-bold Lalezar pl-4">
                        {project.title}
                      </h3>
                      <p className="text-lg Lalezar opacity-90 pl-4 leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}