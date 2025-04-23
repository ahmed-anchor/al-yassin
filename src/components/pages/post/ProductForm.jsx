"use client";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Spinner } from "@/components/Spinner";
import { motion } from "framer-motion";

export default function ProductForm() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [productType, setProductType] = useState("");
  const [addAsNew, setAddAsNew] = useState(true);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);
  const [isCustom, setIsCustom] = useState(true);
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setLoadingProducts] = useState(false);
  const [category, setCategory] = useState("");
  const [refreshNum, setRefreshNum] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!name || !selectedFile || !productType) {
      setMessage("Please fill all fields");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", selectedFile);
    formData.append("productType", productType);
    formData.append("category", category);

    try {
      await axios.post("/api/admin/postProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Product created successfully!");
      setName("");
      setDescription("");
      setSelectedFile(null);
      setProductType("");
      setCategory("");
      setAddAsNew(true);
      setIsCustom(true);
      fileInputRef.current.value = null
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
      setRefreshNum(prev=>++prev);
    }
  };

  const getProducts = async () => {
    setLoadingProducts(true)
    try {
    const response = await axios.post('/api/getProduct' , { productType: '' })
      setProducts(response.data);
      console.log(response.data);
      setProductType(response.data[0]?.productType);
      setLoadingProducts(false);
    } catch (error) {
      setMessage(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }
  , [refreshNum])

  return (
    <div className='w-full flex justify-center items-center mt-20 '>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md Lalezar"
      >
        <h2 className="text-xl font-bold mb-6 text-center">اضف منتج جديد</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-right">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
            اسم المنتج
              {
                !addAsNew ? ' الاول ' : ''
              }
            </label>
            <input
              dir='rtl'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {
            addAsNew &&
            <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
            وصف المنتج <span className="text-gray-400 mr-2">(اختياري)</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            />
          </div>
          }

          <div className="flex items-center justify-center gap-2 text-black font-medium text-lg">
            <label className="relative inline-block w-14 h-8 cursor-pointer mt-2">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={isCustom}
                onChange={(e)=>setIsCustom(e.target.checked)}
              />
              <div className="w-12 h-6 bg-blue-400 border-0 rounded-full peer-checked:bg-white peer-checked:border-[1px] border-gray-400 transition-colors" />
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-6 peer-checked:bg-gray-700" />
            </label>
            <h1>منتج من نوع جديد ؟</h1>
          </div>
          {
            !isCustom?
            <div className="flex items-center justify-center gap-2 text-black font-medium text-lg">
              <label className="relative inline-block w-14 h-8 cursor-pointer mt-2">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={addAsNew}
                  onChange={(e)=>setAddAsNew(e.target.checked)}
                />
                <div className="w-12 h-6 bg-blue-400 border-0 rounded-full peer-checked:bg-white peer-checked:border-[1px] border-gray-400 transition-colors" />
                <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-6 peer-checked:bg-gray-700" />
              </label>
              <h1>اضافة كصنف منتج جديد ؟</h1>
            </div>:""
          }

            {
            addAsNew ? "":
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                اسم الصنف الجديد
              </label>
              <input
                dir='rtl'
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            }

          <div>
            {
              isCustom ?
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  نوع المنتج
                </label>
                {
                  isLoadingProducts ? <Spinner /> :
                <select
                  value={productType}
                  onChange={(e) => {
                    setProductType(e.target.value)
                  }}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {
                    products?.map((type) => (
                      type.productType &&
                      <option key={type._id} value={type.productType.replace(/-/g, ' ') }>
                        {type.productType.replace(/-/g, ' ')}
                      </option>
                    ))
                  }
                </select>
                }
              </div>
              :
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                نوع المنتج <span className="text-gray-400 mr-2">(باللغه الانجليزيه فقط)</span>
                </label>
                <input
                  type="text"
                  value={productType}
                  onChange={(e) => {
                    // Only allow English letters and spaces
                    setProductType(e.target.value.replace(/[^a-zA-Z\s]/g, ''));
                  }}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            }
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              صورة المنتج 
            </label>
            <input
              accept="image/*"
              placeholder="اختر صورة"
              type="file"
              ref={fileInputRef}
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

            {
            loading ? (
              <div className="flex justify-center items-center">
                <Spinner />
              </div>
            ) : (
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              اضافة المنتج
            </motion.button>
            )}
            
          {message && (
            <div className={`mt-4 p-3 rounded-md ${message.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {message}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
}