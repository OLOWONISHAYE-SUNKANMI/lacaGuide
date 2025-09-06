import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import '@fontsource/poppins'

export default function register() {
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
                <h3 className='text-center font-bold p-5'>Hey There! Welcome</h3>
                <p className='text-center text-[12px] font-semibold '>New here? Please enter your details</p>
    
                <form className='flex flex-col gap-4 p-5'>
                    <label className='font-bold text-sm'>Email</label>
                    <input type='email' className='p-3 border-1 border-gray-600 rounded-lg text-sm' placeholder='Enter your email'/>
    
                 
                    <label className='font-bold text-sm'>Password</label>   
                    <input type='password'  className='p-3 border-1 border-gray-600 rounded' placeholder='Enter your password'/>
                
                  <button type='submit' 
                  className=' flex p-2 justify-center items-center text-center bg-[#0495d6] ml-3 w-70 rounded  hover:bg-[#ffec70] shadow my-5 text-[#fff]'>
                  Sign In
                  </button>
                </form>
            </div>
         </div>
    
    
        </div>
  )
}
