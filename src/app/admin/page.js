import React from 'react';
import { login, getSession } from '../../../lib/lib';
import connectDB from '../../../lib/database';
import UserModel from '../../../models/userModel';
import Link from 'next/link';

export default async function AdminPage() {
  const session = await getSession();

  if (session) {
    try {
      await connectDB();
      const customers = await UserModel.find();
      

      return (
        <div className='w-full h-screen' >
          <div className="px-6 pt-32">
            <h2 className="text-2xl font-bold mb-4">Customer Directory</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {customer.username}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {customer.phoneNumber}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    } catch(error) {
      return (
        <div className='w-full h-screen bg-red-500'>
          <h1 className='text-5xl Lalezar'>Error With Internet</h1>
        </div>
      )

    }
  }

  return (
<div className="w-full min-h-screen p-4 lg:p-8 bg-white flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-32">
  <form
    className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto min-h-[400px] md:min-h-[500px] bg-blue-300 rounded-lg p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 lg:space-y-8'
    action={async (formData) => {
      'use server';
      await login(formData);
    }}
  >
    <input 
      type='text' 
      placeholder='username' 
      name='username' 
      className='w-full p-2 mt-4 md:mt-8 lg:mt-12 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-4'
      required 
    />
    <input
      type='password' 
      placeholder='password' 
      name='password' 
      className='w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-6'
      required 
    />
    <button 
      type='submit'
      className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm transition-colors duration-200 text-sm md:text-base'
    >
      Submit
    </button>
  </form>
  <Link href='/change' className='text-xs sm:text-sm md:text-base lg:text-lg mt-2 md:mt-4'>Change Credentials?</Link>
</div>
  );
}
