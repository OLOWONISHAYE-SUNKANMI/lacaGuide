import React from 'react'

export default function about() {
  return (
    <div className='flex justify-center items-center px-10 py-6 gap-20'>

        <div className='px-10 py-6'>
            <h2 className='font-bold text-white bg-[#0495d6] w-50 rounded-xl p-2 text-center '>About LACACAGuide</h2>
            <h3 className='font-extrabold text-3xl py-5'>With LACACAGuide, you gain clarity, avoid unnecessary stress, and focus on the courses that align with your academic goals.</h3>
            <p className='italic text-[16px]'>At Lagos State University, choosing the right courses is essential for academic growth and career success. LACACAGuide is designed to simplify this process by analyzing your academic background and guiding you toward courses that best fit your profile.</p>
          
            <div className='py-4'>
                <button className='bg-[#0495d6] p-3 rounded-lg text-white hover:bg-[#ffec70] shadow transition-colors'>Register</button>
                <button className='p-3 bg-[#ffec70] mx-4 rounded-lg text-white hover:bg-[#0495d6] shadow transition-colors'>Learn More</button>
            </div>
        </div>

        <div className='px-10 justify-center items-center'>
            <img src='https://res.cloudinary.com/depeqzb6z/image/upload/v1757021344/download__2_-removebg-preview_1_ege0rr.png' alt='about-image' 
                className=' w-[1000px] object-cover mr-20'
            /> 
        </div>

    </div>
  )
}
