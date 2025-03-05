import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Spinner } from './Spinner';
import axios from 'axios';

export const Modal = ({clearModal}) => {
  const [formData, setFormData] = useState({ username: '', phoneNumber: '' });
  const [isError, setIsError] = useState(false)
  const [isLoading,setIsLoading] = useState(false)

  const handleSubmit = async () => {

    const response = await axios.post('/api/user', formData)
    .then((res) => {
      setFormData({ username: '', phoneNumber: '' })
      clearModal();
    })
    .catch((error)=>{
      setIsError(true)
      setIsLoading(true)
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gray-200 flex items-center justify-center"
    >
    {
      isLoading? <Spinner />:
      <div className="bg-white p-4 rounded-lg w-96 h-64">
        {isError? <h1 className='text-3xl'>خطأ اثناء الاتصال</h1>: ''}
      <form action={handleSubmit} className='h-full w-full flex flex-col justify-around' >
        <input
          dir="rtl"
          type="text"
          placeholder="اسم المستخدم"
          value={formData.username}
          onChange={e => setFormData({ ...formData, username: e.target.value })}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        
        <input
          dir='rtl'
          type="tel"
          placeholder="رقم الهاتف"
          value={formData.phoneNumber}
          onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          إرسال
        </button>
      </form>
    </div>
    }
    </motion.div>
  );
};