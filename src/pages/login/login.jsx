import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function login() {
  return (
    <div
      className="min-h-screen w-full flex"
      style={{ background: 'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)' }}
    >

     <div className='m-5 flex justify-start items-start gap-2 '>
        <IoIosArrowBack 
            className='text-white text-xl mt-0'
        />
        <Link to='/'
            className='font-bold text-white mb-5'
        >Homepage</Link>
     </div>


     <div className='flex flex-col justify-center items-center m-auto'>
        <div className='justify-center items-center'>
              <img src='https://res.cloudinary.com/depeqzb6z/image/upload/v1757093291/LacacaGuide_White_vsuhap.png' alt='logo'
               className='w-48 h-48 object-contain mr-30' 
              />
        </div>

        <div className='bg-white rounded-lg shadow-lg p-5 mr-30 w-96 mb-30 h-110'>
            
        </div>
     </div>


    </div>
  )
}
