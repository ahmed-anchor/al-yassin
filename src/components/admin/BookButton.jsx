import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const BookButton = ({ changeBookState }) => {
  const [isBooked, setIsBooked] = useState(false)

  const handleClick = () => {
    setIsBooked(!isBooked)
    changeBookState()
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`fixed bottom-4 left-4 p-2 ${
        isBooked ? 'bg-blue-100 hover:bg-blue-200' : 'hover:bg-gray-100'
      } transition-all duration-300 ${
        isBooked ? 'rounded-full' : 'rounded-lg'
      } shadow-lg z-50`}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        borderRadius: isBooked ? '50%' : '8px',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6 ${
          isBooked ? 'text-blue-600' : 'text-gray-700'
        } transition-colors duration-300`}
        animate={{
          rotate: isBooked ? 360 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </motion.svg>
    </motion.button>
  )
}