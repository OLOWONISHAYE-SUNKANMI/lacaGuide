import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import '@fontsource/poppins';
import { auth } from '../../firebase/firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // redirect after successful login
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen w-full flex"
      style={{ background: 'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)' }}
    >
      <div className='m-5 flex justify-start items-start gap-2 '>
        <IoIosArrowBack className='text-white text-xl mt-0' />
        <Link to='/' className='font-bold text-white mb-5'>Homepage</Link>
      </div>

      <div className='flex flex-col justify-center items-center m-auto'>
        <div className='justify-center items-center'>
          <img 
            src='https://res.cloudinary.com/depeqzb6z/image/upload/v1757251065/LacacaGuide_White_uiciks.png' 
            alt='logo'
            className='w-48 h-48 object-contain mr-30' 
          />
        </div>

        <div className='bg-white rounded-lg shadow-lg p-5 mr-30 w-96 mb-30 h-auto'>
          <h3 className='text-center font-bold p-5'>Welcome Back!</h3>
          <p className='text-center text-[12px] font-semibold'>We missed you! Please enter your details</p>

          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-5'>
            <label className='font-bold text-sm'>Email</label>
            <input 
              type='email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-3 border border-gray-600 rounded-lg text-sm' 
              placeholder='Enter your email'
              required
            />

            <label className='font-bold text-sm'>Password</label>   
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'}  
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 border border-gray-600 rounded text-sm w-full' 
                placeholder='Enter your password'
                required
              />
              <div 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <button 
              type='submit' 
              disabled={loading}
              className='flex p-2 justify-center items-center text-center bg-[#0495d6] w-40 rounded hover:bg-[#ffec70] shadow my-5 text-[#fff] mx-auto'
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* New User Register Text */}
          <p className='text-center text-sm'>
            New user? 
            <Link to='/register' className='text-[#0495d6] font-bold ml-1 hover:underline'>
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
