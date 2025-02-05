import React from 'react'
import Link from 'next/link'

export const Options = () => {
  return (
    <div className='w-full h-[200px]'>
      <h1 className='text-[26px] sm:text-[38px] text-center py-5'>ليه تختارنا</h1>
      <ul className='flex flex-col sm:flex-row Zain gap-3 justify-around items-center px-2' >
        <li className='bg-white w-full py-2 rounded-md px-4 sm:w-[200px] lg:w-[280px] text-right h-[150px]' >
          <Link href='#'>
              <h1 className="text-[21px] pb-2" >المصداقية</h1>
              <p>
                نحن نحرص علي علي مصداقيه المكان و الاهتام بخصوصية العميل
              </p>
          </Link>
        </li>
        <li className='bg-white w-full py-2 rounded-md px-4 sm:w-[200px] lg:w-[280px] text-right h-[150px]' >
          <Link href='#'>
            <h1 className="text-[21px] pb-2" >جودة المنتجات</h1>
            <p>
              نحرص دائما على جودة منتجاتنا و رضا العلاء بها
            </p>
          </Link>
        </li>
        <li className='bg-white w-full py-2 rounded-md px-4 sm:w-[200px] lg:w-[280px] text-right h-[150px]' >
          <Link href='#'>
            <h1 className="text-[21px] pb-2" >نهتم لسماع آراكم</h1>
            <p>
              نهتم برآراكم لتطوير خدمه مرضيه جدا
            </p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
