import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <div className=' flex justify-between  w-full h-[50vh] bg-[#ffec70] text-white p-6'>

        <div className='gap-4 my-10 mx-10'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <img src='https://res.cloudinary.com/depeqzb6z/image/upload/v1757056768/Creative_University_Logo_Design_with_Graduation_Cap_Icon-removebg-preview_t46urj.png' alt='logo' 
            className='w-15'
          />
          <h3 className='font-bold text-xl py-4 text-white'>LACACAGuide</h3>
        </div>
        
        </div>

        <div className='gap-4 my-10 mx-10'>
            <h3 className='text-[#0495d6] font-bold'>Quick Links</h3>
           <ul className='flex flex-col'>
            <Link to='/'
            className='hover:text-[#0495d6] transition-colors mt-5'
            >
              Home
            </Link>

             <Link to='/'
            className='hover:text-[#0495d6] transition-colors mt-5'
            >
              About
            </Link>

               <Link to='/'
            className='hover:text-[#0495d6] transition-colors mt-5'
            >
              How it works
            </Link>

             <Link to='/'
            className='hover:text-[#0495d6] transition-colors mt-5'
            >
              Courses
            </Link>

             <Link to='/'
            className='hover:text-[#0495d6] transition-colors mt-5'
            >
              FAQ
            </Link>
           </ul>
        </div>


        <div className='gap-4 my-10 mx-10'>
          <h3 className='text-[#0495d6] font-bold'>Contact Info</h3>
          <ul className='flex flex-col'>
            <Link to='/'
            className='mt-5'
            >
              support@lacacaguide.com
            </Link>

            <Link to='/'
            className='mt-5'
            >
              Lagos State University, Ojo, Lagos
            </Link>

          </ul>
        </div>

              <div className='gap-4 my-10 mx-10'>
          <h3 className='text-[#0495d6] font-bold'>Legal & Credits</h3>
          <ul className='flex flex-col'>
            <li 
            className='mt-5'
            >
              Privacy Policy 
            </li>

            <li 
            className='mt-5'
            >
               Terms of Use
            </li>

             <li 
            className='mt-5'
            >
               © 2025 LACACAGuide. All Rights Reserved.
            </li>

          </ul>
        </div>


    </div>
  )
}
