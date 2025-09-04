import React from 'react'
import '@fontsource/poppins'
import { SiHtmlacademy } from "react-icons/si";
import { CiLogin } from "react-icons/ci";
import { MdOutlineRecommend } from "react-icons/md";
import { GoDiscussionClosed } from "react-icons/go";

export default function howItWorks() {
  return (
    <div className='py-10'>
        <div className='justify-center items-center'>
                <h3 className='font-poppins font-semibold text-[36px] text-center'>How it works</h3>
        </div>

        <div className='flex justify-center items-center px-10 py-6'>
            <div className='justify-center items-center px-6 py-2 bg-[rgba(255,236,112,0.5)] h-65 w-120 rounded-lg m-5'>
              <div className='items-center justify-center flex'>
                <CiLogin
                style={{
                    fontSize: '30px',
                    textAlign: 'center',
                    marginBottom: '10px',
                    marginTop: '30px',
                    color: '#ffff'
                }}
                />
              </div>
                <h3 className='text-center py-3 font-bold text-[#000] text-2xl'>Log in</h3>
                <p className='text-center py-2 font-sm text-white italic text-[12px]'>Access the platform with your LASU details.</p>
            </div>

              <div className='justify-center items-center px-6 py-2 bg-[rgba(4,149,214,0.5)] h-65 w-120 rounded-lg '>

                <div className='items-center justify-center flex'>
                    <SiHtmlacademy 
                          style={{
                            fontSize: '30px',
                            textAlign: 'center',
                            marginBottom: '10px',
                            marginTop: '30px',
                            color: '#ffff'
                        }}
                    />
                </div>
                
                <h3 className='text-center py-3 font-bold text-[#000] text-xl'>Provide Academic Details</h3>
                <p className='text-center py-2 font-sm text-white  italic text-[12px]'>Update your academic profile if needed.</p>
            </div>

              <div className='justify-center items-center px-6 py-2 bg-[rgba(255,0,0,0.5)] h-65 w-120 rounded-lg m-5'>
                <div className='items-center justify-center flex'>
                     <MdOutlineRecommend
                    style={{
                            fontSize: '30px',
                            textAlign: 'center',
                            marginBottom: '10px',
                            marginTop: '30px',
                            color: '#ffff'
                        }}
               />
                </div>
              
                <h3 className='text-center  py-3 font-bold text-[#000] text-xl'>Receive Recommendations</h3>
                <p className='text-center py-2 font-sm text-white italic text-[12px]'>View suggested courses and reasons behind each recommendation.</p>
            </div>

              <div className='justify-center items-center px-6 py-2 h-65  bg-[rgba(0,128,0,0.5)] w-120 rounded-lg m-5'>
                <div className='items-center justify-center flex'>
                        <GoDiscussionClosed 
                    style={{
                            fontSize: '30px',
                            textAlign: 'center',
                            marginBottom: '10px',
                            marginTop: '30px',
                            color: '#ffff'
                        }}
                />
                </div>
                
                <h3 className='text-center py-3 font-bold text-[#000] text-xl'>Make Informed Decisions</h3>
                <p className='text-center py-2 font-sm text-white italic text-[12px]'>Select courses confidently and stay on track with your academic journey.</p>
            </div>
        </div>
    </div>
  )
}
