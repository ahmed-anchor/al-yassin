import React from 'react';
import { login, getSession, changeCredentials } from '../../../lib/lib';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await getSession();

  while (session) {

      return (
<div className="w-full min-h-screen p-4 lg:p-8 bg-white flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-32">
  <h1 className='text-2xl font-semibold capitalize text-green-800' >add your new credentials</h1>
  <form
    className='w-full max-w-xs md:max-w-sm lg:max-w-md h-auto min-h-[400px] md:min-h-[500px] bg-green-300 rounded-lg p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 lg:space-y-8'
    action={async (formData) => {
      'use server';
      await changeCredentials(formData);
      redirect('/')
    }}
  >
    <input 
      type='text' 
      placeholder='username' 
      name='username' 
      className='w-full p-2 mt-4 md:mt-8 lg:mt-12 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2 md:mb-4'
      required 
    />
    <input 
      type='password' 
      placeholder='password' 
      name='password' 
      className='w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 md:mb-6'
      required 
    />
      <button 
      type='submit'
      className='w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-sm transition-colors duration-200 text-sm md:text-base'
    >
      Submit
    </button>
  </form>
</div>
      )
  }

  return (
<div className="w-full min-h-screen p-4 lg:p-8 bg-white flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-32">
  <h1 className='text-2xl font-semibold capitalize' >you should login before</h1>
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
</div>
  );
}
