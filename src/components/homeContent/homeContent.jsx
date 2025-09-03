import React from 'react'
import { Link } from 'react-router-dom'
import '@fontsource/poppins'

export default function homeContent() {
  return (
    <div className='flex justify-center items-center px-5'>
      <div className='px-10 justify-center items-center '>
          <h3 className='text-[45px] font-poppins font-semibold text-[#000]'>Choose The Right Courses With Confidence.</h3>
          <p className='text-[16px] italic my-5'>LACACAGuide helps LASU students make informed course decisions through personalized recommendations based on their academic records, interests, and strengths</p>
          <Link to='/'
            className='px-8 py-2  bg-[#ffec70] text-[#fff] hover:bg-[#0495d6] rounded-xl  shadow-md font-poppins transition-colors'
          >
            Get Started
          </Link>
      </div>

      <div className='my-10 mx-10'>
        <img src='https://res.cloudinary.com/depeqzb6z/image/upload/v1756916366/3D_Girl_with_tablet_and_working_process_on_desktop-removebg-preview_bgec4s.png' alt='image'
        className='w-300 h-full my-10'
        />
      </div>
    </div>
  )
}
