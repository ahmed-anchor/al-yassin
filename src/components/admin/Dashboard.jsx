'use client'
import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { Spinner } from '../Spinner'
import { motion } from 'framer-motion'
import { BookButton } from './BookButton'

export const Dashboard = () => {
  const [customers, setCustomers] = useState([])
  const [bookedIds, setBookedIds] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isBookedPage, setIsBookedPage] = useState(false)
  const [refetch, setRefetch] = useState(false)

  // Get initial booked IDs from localStorage
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem('booked') || '[]')
    setBookedIds(storedIds)
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/user')
        setCustomers(response.data)
        setIsError(false)
      } catch (error) {
        console.error('Fetch error:', error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCustomers()
  }, [refetch])

  // Memoized customer lists
  const [bookedCustomers, unbookedCustomers] = useMemo(() => {
    const booked = customers.filter(c => bookedIds.includes(c._id))
    const unbooked = customers.filter(c => !bookedIds.includes(c._id))
    return [booked, unbooked]
  }, [customers, bookedIds])

  const toggleBooking = (id) => {
    const newIds = bookedIds.includes(id)
      ? bookedIds.filter(i => i !== id)
      : [...bookedIds, id]
    setBookedIds(newIds)
    localStorage.setItem('booked', JSON.stringify(newIds))
  }

  const deleteContact = async (id) => {
    try {
      setIsLoading(true)
      const res = await axios.put('/api/user', JSON.stringify(id))
      if(!res.data) {
        throw new Error('Delete failed')
      }
      setIsError(false)
      setRefetch(prev => !prev)
    } catch(error) {
      console.error('Delete error:', error)
      setIsError(true)
      setTimeout(() => setIsError(false), 3000) // Clear error after 3 seconds
    } finally {
      setIsLoading(false)
    }
  }

  const currentCustomers = isBookedPage ? bookedCustomers : unbookedCustomers
  const pageTitle = isBookedPage ? 'Booked Contacts' : 'All Contacts'

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto pt-20">
        {/* Error Display */}
        {isError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          >
            <span className="block sm:inline">
              Error processing request. Please try again.
            </span>
            <button
              onClick={() => setIsError(false)}
              className="absolute top-0 right-0 px-3 py-1"
            >
              ×
            </button>
          </motion.div>
        )}

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
          <BookButton 
            changeBookState={() => {
              setIsBookedPage(!isBookedPage)
            }}
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center mt-20">
            <Spinner />
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentCustomers.map(customer => (
              <motion.div
                key={customer._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {customer.username}
                    </h3>
                    <p className="text-slate-600 mt-1">
                      {customer.phoneNumber}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleBooking(customer._id)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <svg
                        className={`w-5 h-5 ${bookedIds.includes(customer._id) 
                          ? 'text-blue-500 fill-current'
                          : 'text-slate-400'}`}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteContact(customer._id)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-red-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}