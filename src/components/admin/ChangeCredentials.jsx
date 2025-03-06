'use client'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Spinner } from '../Spinner'
import { useRouter } from 'next/navigation'

export const ChangeCredentials = () => {
  const router = useRouter()
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setIsError(false)
    setSuccess(false)

    try {
      const response = await axios.post('/api/admin/credentials', formData)
      
      if (response.data) {
        setSuccess(true)
        setFormData({ username: '', password: '' })
        setTimeout(() => router.push('/'), 1000) // Redirect after 2 seconds
      }
    } catch (error) {
      setIsError(true)
    }
  }

  return (
    <div className="w-full min-h-screen p-4 lg:p-8 bg-white flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-32">
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div className='w-full max-w-md p-4 bg-red-100 rounded-lg text-center mb-4'>
          <h1 className='text-xl text-red-600'>Update failed. Please try again.</h1>
        </div>
      ) : success ? (
        <div className='w-full max-w-md p-4 bg-green-100 rounded-lg text-center mb-4'>
          <h1 className='text-xl text-green-600'>Credentials updated successfully!</h1>
        </div>
      ) : (
        <>
          <h1 className='text-2xl font-semibold capitalize text-green-800 mb-8'>
            Add your new credentials
          </h1>
          <form
            className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto min-h-[400px] md:min-h-[500px] bg-green-300 rounded-lg p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 lg:space-y-8'
            onSubmit={handleSubmit}
          >
            <input 
              type='text' 
              placeholder='username' 
              name='username'
              className='w-full p-2 mt-4 md:mt-8 lg:mt-12 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2 md:mb-4'
              required
              value={formData.username}
              onChange={e => setFormData({ ...formData, username: e.target.value })}
            />
            <input
              type='password' 
              placeholder='password' 
              name='password' 
              className='w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 md:mb-6'
              required
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
            <button 
              type='submit'
              className='w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-sm transition-colors duration-200 text-sm md:text-base'
            >
              Update Credentials
            </button>
          </form>
        </>
      )}
    </div>
  )
}