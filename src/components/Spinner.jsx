'use client'

import React from 'react'

export const Spinner = () => {
  return (
    <div
    className="inline-block w-8 h-8 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"
    role="status"
    aria-label="Loading"
  ></div>
  )
}
