import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navbarRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu on resize if window becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav 
      ref={navbarRef}
      className="w-full h-20 flex items-center justify-between pt-10 px-4 md:px-8 relative"
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img 
            src="https://res.cloudinary.com/depeqzb6z/image/upload/v1756918271/Group_1_kagikh.png" 
            alt="logo" 
            className='w-60 pl-10'
          />
        </Link>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <button 
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Links */}
      <div 
        className={`absolute md:static top-20 left-0 w-full md:w-auto bg-[#115237] md:bg-transparent z-50 
        transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden md:flex'}`}
      >
        <ul className='flex flex-col md:flex-row items-center py-4 md:py-0 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 px-10 text-white font-semibold'>
          <li>
            <Link 
              to="/" 
              className='px-4 py-2 text-[#0495d6] hover:text-[#000] font-poppins transition-colors'
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className='px-4 py-2 text-[#0495d6] hover:text-[#000] font-poppins transition-colors'
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className='px-4 py-2 text-[#0495d6] hover:text-[#000] font-poppins transition-colors'
              onClick={() => setIsOpen(false)}
            >
              How it works
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className='px-4 py-2 text-[#0495d6] hover:text-[#000] font-poppins transition-colors'
              onClick={() => setIsOpen(false)}
            >
              Courses 
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className='px-4 py-2 text-[#0495d6] hover:text-[#000] font-poppins transition-colors'
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      {/* Button Bar */}
      <div className='hidden md:flex items-center ml-4'>
        <Link
          to='/login'
          className='px-10 py-2 mx-4 bg-[#0495d6] text-[#fff] hover:bg-[#ffec70] rounded-xl shadow-md font-poppins transition-colors'
        >
          Login
        </Link>

          <Link
          to='/register'
          className='px-8 py-2 mx-4 bg-[#ffec70] text-[#fff] hover:bg-[#0495d6] rounded-xl  shadow-md font-poppins transition-colors'
        >
          Register
        </Link>
      </div>

      {/* Mobile Search (optional) */}
      {isOpen && (
        <div className='md:hidden w-full px-4 py-2'>
          <div className='relative'>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-4 pr-10 py-2 bg-white w-full rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#620000]'
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
        </div>
      )}
    </nav>
  );
}