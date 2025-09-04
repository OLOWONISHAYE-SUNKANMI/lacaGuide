import React from 'react'
import { MdLockPerson } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiPlangrid } from "react-icons/si";
import { TbArrowGuide } from "react-icons/tb";

export default function features() {
  return (
    <div className='flex justify-center items-center px-10 py-6'>
        <div className='grid grid-cols-3 grid-rows-2 gap-5 justify-center items-center w-full px-10 py-6'>
            <div className='justify-center items-center bg-white rounded-lg shadow-sm p-6 hover:bg-[#0495d6] hover:text-white transition-colors'>
                <MdLockPerson 
                    style={{ 
                        fontSize: '30px',
                        marginBottom: '10px'
                    }}
                />
                <h3 className='font-bold text-xl py-5 border-b-2 mr-5'>Personalized Recommendations</h3>
                <p className='py-5 text-sm italic'>Get course suggestions tailored to your department, GPA, and career interests.</p>
            </div>

            <div className='justify-center items-center bg-white rounded-lg shadow-sm p-10 hover:bg-[#0495d6] hover:text-white transition-colors'>
               <FaBook 
                    style={{ 
                        fontSize: '30px',
                        marginBottom: '10px'
                    }}
            
               />
                <h3 className='font-bold text-xl py-5 border-b-2 mr-5'>Detailed Course Information</h3>
                <p className='py-5 text-sm italic'>View descriptions, prerequisites, and credit loads for each course.</p>
            </div>


            <div className='justify-center items-center bg-white rounded-lg shadow-sm p-10 hover:bg-[#0495d6] hover:text-white transition-colors'>
                <LuLayoutDashboard 
                    style={{ 
                        fontSize: '30px',
                        marginBottom: '10px'
                    }}
            
                />
                <h3 className='font-bold text-xl py-5 border-b-2 mr-5'>Student Dashboard</h3>
                <p className='py-5 text-sm italic'>Access your academic history and monitor recommended courses in one place.</p>
            </div>

            <div className='justify-center items-center bg-white rounded-lg shadow-sm p-10 hover:bg-[#0495d6] hover:text-white transition-colors'>
                <SiPlangrid 
                    style={{ 
                        fontSize: '30px',
                        marginBottom: '10px'
                    }}
            
                />
                <h3 className='font-bold text-xl py-5 border-b-2 mr-5'>Smart Planning Support</h3>
                <p className='py-5 text-sm italic'>Prevent overload and stay on track toward graduation.</p>
            </div>

            <div className='justify-center items-center bg-white rounded-lg shadow-sm p-10 hover:bg-[#0495d6] hover:text-white transition-colors'>
                <LuLayoutDashboard
                    style={{ 
                        fontSize: '30px',
                        marginBottom: '10px'
                    }}
            
                />
                <h3 className='font-bold text-xl py-5 border-b-2 mr-5'>Easy-to-Use Interface</h3>
                <p className='py-5 text-sm italic'>Navigate the system with a simple, student-friendly design.</p>
            </div>

            <div className='justify-center items-center bg-white rounded-lg shadow-sm p-10 hover:bg-[#0495d6] hover:text-white transition-colors'>
                <TbArrowGuide
                    style={{ 
                        fontSize: '30px',
                        marginBottom: '10px'
                    }}
            
                />
                <h3 className='font-bold text-xl py-5 border-b-2 mr-5'>Reliable Guidance</h3>
                <p className='py-5 text-sm italic'>Reduce guesswork and make confident academic decisions.</p>
            </div>

            
            

        </div>
    
    </div>
  )
}
