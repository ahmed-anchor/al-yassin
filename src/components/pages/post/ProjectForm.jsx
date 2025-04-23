'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spinner } from '@/components/Spinner';
import axios from 'axios';

export default function ProjectForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!name || !description || !image) {
      setError('جميع الحقول مطلوبة');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/admin/postproject', formData);
      setSuccess(response.data.message || 'تم إنشاء المشروع بنجاح!');
      setName('');
      setDescription('');
      setImage(null);
      setPreview('');
    } catch (err) {
      setError(err.message || 'حدث خطأ ما');
    } finally {
      setLoading(false);
    }
  }, [name, description, image]);

  return (
    <div dir="rtl" className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 Lalezar">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-right">رفع مشروع جديد</h1>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-right"
            >
              {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-right"
            >
              {success}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="mt-1 relative border-2 border-dashed border-gray-300 rounded-md h-40">
              <label
                htmlFor="image-upload"
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer p-4"
              >
                {preview ? (
                  <motion.img
                    src={preview}
                    alt="معاينة"
                    className="h-full w-full object-cover rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                ) : (
                  <div className="text-gray-600 space-y-2">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex flex-col items-center text-sm">
                      <span className="font-medium text-blue-500">اختر ملف</span>
                      <span className="text-gray-500">أو اسحب الملف هنا</span>
                    </div>
                  </div>
                )}
                <input
                  id="image-upload"
                  name="image"
                  type="file"
                  className="sr-only"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            </div>
            <p className="mt-2 text-xs text-gray-500 text-right">(PNG, JPG, GIF حتى 10MB)</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-right">الاسم</label>
            <motion.input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full py-3 rounded-md border-gray-600 px-2 border-[1px] focus:border-blue-500 focus:ring-blue-500 text-right"
              whileFocus={{ scale: 1.02 }}
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-right">الوصف</label>
            <motion.textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="mt-1 block w-full rounded-md py-3 border-gray-600 border-[1px] px-2 focus:border-blue-500 focus:ring-blue-500 text-right"
              whileFocus={{ scale: 1.02 }}
              disabled={loading}
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <Spinner className="w-5 h-5 text-white" />
                <span>جاري الرفع...</span>
              </div>
            ) : (
              'رفع المشروع'
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}