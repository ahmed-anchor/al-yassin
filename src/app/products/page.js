'use client'
import React from 'react'
import Image from 'next/image'
import faba from '../../assets/faba.webp'


export default function page() {
  return (
    <div>
      <div>
        <h1>faba</h1>
        <Image src={faba} alt="faba" width={500} height={500} />
        <p>
          ماسوشهخسيبرنيمنرشسيمنربشسمينربشسيب
        </p>
      </div>
    </div>
  )
}
