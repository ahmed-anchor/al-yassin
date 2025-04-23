'use client'
import { motion } from 'framer-motion'
import { Spinner } from '@/components/Spinner'
import { Footer } from '@/components/Footer'
import { useEffect, useState } from 'react'
import { setUserSession } from '../../../lib/lib'
import { getSession } from '../../../lib/lib'
import Image from 'next/image'
import axios from 'axios'
import DeleteProject from './delete/DeleteProject'

export function Projects() {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isAuthed, seIsAuthed] = useState(false)

  const fetchProjects = async () => {
    setLoading(true)
    setError('')
    try {
      const session = await getSession()
      seIsAuthed(session)
      const response = await axios.get('/api/admin/postproject')
      setProjects(response.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setUserSession();
    fetchProjects();
  }
  , [])

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
          {
            loading ? <div className='w-full h-screen justify-center items-center flex'><Spinner /></div> :
            error ? <div className='w-full h-screen justify-center items-center flex text-2xl text-red-500'>{error}</div> :
            <div className="space-y-8 px-4">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 0.6, delay: index * 0.004 }}
                className="group relative w-full h-52 sm:h-80 cursor-pointer"
              >
                {isAuthed && <DeleteProject _id={project._id} refresh={fetchProjects} />}
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
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
                        {project.name}
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
          }
        </div>
      </div>
      <Footer />
    </>

  )
}