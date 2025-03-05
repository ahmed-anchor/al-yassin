'use client'
import { useState } from 'react'
import { Spinner } from './Spinner'

export const Button = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
    {
      isLoading? <Spinner />:
      <button 
      type='submit'
      onClick={()=>setIsLoading(true)}
      className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm transition-colors duration-200 text-sm md:text-base'
    >
      Submit
    </button>
    }
    </div>
  )
}
