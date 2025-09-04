import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import '@fontsource/poppins'
import { GiChoice } from "react-icons/gi";

export default function whyLacacaGuide() {
  return (
    <div className='flex justify-center items-center px-10 py-6'>
        <div className='mr-10'>
            <img src='https://res.cloudinary.com/depeqzb6z/image/upload/v1756945232/3D_delivery_boy_on_scooter_PNG__SVG-removebg-preview_peer50.png' alt='img'
            style={{
                width: '300px',
            }}
            />
        </div>
    
        <div className='justify-center items-center pl-20 py-2 '>
            <h3 className='font-poppins text-5xl font-extrabold'>Why LACACA Guide?</h3>
            <ul className='py-10'>
                <li className='py-5 flex items-center gap-3 italic'>
                    <MdAccessTimeFilled /> Saves time during course registration.
                </li>

                <li className='py-5 flex items-center gap-3 italic'>
                    <FaBook /> Reduces confusion about course prerequisites.
                </li>
                
                 <li className='py-5 flex items-center gap-3 italic'>
                    <MdSupportAgent /> Supports better academic planning.
                </li>

                
                 <li className='py-5 flex items-center gap-3 italic'>
                    <GiChoice /> Ensures alignment between student strengths and course choices.
                </li>
                
    
            </ul>
        </div>
    </div>
  )
}
