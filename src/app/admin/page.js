import React from 'react';
import { getSession } from '../../../lib/lib';
import connectDB from '../../../lib/database';
import UserModel from '../../../models/userModel';
import Link from 'next/link';
import { AdminForm } from '@/components/admin/AdminForm';

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
        <div className='w-full h-screen bg-red-500 flex justify-center items-center'>
          <h1 className='text-5xl Lalezar'>Error With Internet</h1>
        </div>
      )
    }
  }

  return <AdminForm />
}
