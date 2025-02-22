import React from 'react'
import Image from 'next/image'
import faba from '../assets/faba.webp'

export default function page() {
  return (
    <div>
      <div>
        <Image src={faba} width={400} height={400} alt='faba image here' />
        <h1>faba</h1>
        <p>
          ماسوشهخسيبرنيمنرشسيمنربشسمينربشسيب
        </p>
      </div>
    </div>
  )
}
