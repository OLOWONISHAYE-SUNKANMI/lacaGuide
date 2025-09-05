import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <div className=' flex justify-between  w-full h-[60vh] bg-[#ffec70] text-white p-6'>

        <div className='gap-4'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <img src='https://res.cloudinary.com/depeqzb6z/image/upload/v1757056768/Creative_University_Logo_Design_with_Graduation_Cap_Icon-removebg-preview_t46urj.png' alt='logo' 
            className='w-15'
          />
          <h3 className='font-bold text-xl py-4 text-white'>LACACAGuide</h3>
        </div>
        
        </div>

        <div className=''>
            <h3>Quick Links</h3>
           <ul>
            <Link to='/'
            className='hover:text-[#0495d6]'
            >Home</Link>
           </ul>
        </div>

    </div>
  )
}
