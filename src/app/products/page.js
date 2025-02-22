'use client'
import React from 'react'
import Image from 'next/image'
import faba from '../../assets/pipes/faba-pipe.webp'
import tokal from '../../assets/pipes/tokal-pipe.webp'

export default function Page() {
  return (
    <main className="min-h-screen py-20 md:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="bg-[#e4eef3] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 transition-all duration-300 hover:shadow-xl">
          
          {/* Image Container */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0 shadow-lg relative">
            <Image
              src={faba}
              alt="faba pipe"
              layout="responsive"
              width={600}
              height={200}
              className="object-contain"
              placeholder="blur"
            />
          </div>

          <article className="w-full md:w-1/2 text-right rtl text-[#6094d3] Lalezar">
            <h1 className="lalezar text-4xl md:text-5xl lg:text-6xl font-medium mb-6 lalezar">
              ماسوره فابا
            </h1>
            
            <p className="text-xl font-medium md:text-xl lg:text-2xl leading-loose">
              ماسوره كبيره وعريضه و مؤهله للاستعمال
            </p>
          </article>
        </div>
        <div className="bg-[#e4eef3] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 transition-all duration-300 hover:shadow-xl">
          
          {/* Image Container */}
          <div className="w-full md:w-1/2 lg:w-2/5 shadow-lg relative">
            <Image
              src={tokal}
              alt="faba pipe"
              layout="responsive"
              width={100}
              height={100}
              className="max-h-[500px]"
              placeholder="blur"
            />
          </div>

          <article className="w-full md:w-1/2 text-right rtl text-[#6094d3] Lalezar">
            <h1 className="lalezar text-4xl md:text-5xl lg:text-6xl font-medium mb-6 lalezar">
              ماسوره توكال
            </h1>
            
            <p className="text-xl font-medium md:text-xl lg:text-2xl leading-loose">
              ماسوره كبيره وعريضه و مؤهله للاستعمال
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}