import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import '@fontsource/poppins'
import { auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    matricNo: '',
    department: '',
    level: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // toggle state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Register user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Save to Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: formData.fullName,
        matricNo: formData.matricNo,
        department: formData.department,
        level: formData.level,
        email: formData.email,
        createdAt: new Date()
      });

      // Show success instantly
      setSuccess(true);

      // Send email verification in background
      sendEmailVerification(user).catch(err => console.error(err));

      // Redirect after 5s
      setTimeout(() => {
        navigate('/login');
      }, 5000);

    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen w-full flex relative"
      style={{
        background:
          'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
      }}
    >
      <div className="m-5 flex justify-start items-start gap-2">
        <IoIosArrowBack className="text-white text-xl mt-0" />
        <Link to="/" className="font-bold text-white mb-5">
          Homepage
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center m-auto">
        <div className="justify-center items-center">
          <img
            src="https://res.cloudinary.com/depeqzb6z/image/upload/v1757093291/LacacaGuide_White_vsuhap.png"
            alt="logo"
            className="w-48 h-48 object-contain mr-30"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-5 mr-30 w-[500px] mb-30 h-auto">
          <h3 className="text-center font-bold p-5">Hey There! Welcome</h3>
          <p className="text-center text-[12px] font-semibold">
            New here? Please enter your details
          </p>

          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5">
            <div className="flex gap-5">
              <div className="flex flex-col w-1/2">
                <label className="font-bold text-[9px]">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="p-3 border border-gray-600 rounded-sm text-[12px]"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="font-bold text-[9px]">Matric No.</label>
                <input
                  type="text"
                  name="matricNo"
                  value={formData.matricNo}
                  onChange={handleChange}
                  className="p-3 border border-gray-600 rounded-sm text-[12px]"
                  placeholder="Enter your Matric Number"
                  required
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col w-1/2">
                <label className="font-bold text-[9px]">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="p-3 border border-gray-600 rounded-sm text-[12px]"
                  placeholder="Enter your department"
                  required
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="font-bold text-[9px]">Level</label>
                <input
                  type="text"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="p-3 border border-gray-600 rounded-sm text-[12px]"
                  placeholder="Enter your level (e.g., 200)"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="font-bold text-[9px]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-600 rounded-sm text-[12px]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col relative">
              <label className="font-bold text-[9px]">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="p-3 border border-gray-600 rounded-sm text-[12px] pr-10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-7 text-gray-600 text-sm"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-center items-center mt-5">
              <button
                type="submit"
                disabled={loading}
                className="flex p-2 justify-center items-center text-center bg-[#0495d6] w-40 rounded hover:bg-[#ffec70] shadow text-[#fff]"
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>

          <p className='text-center text-sm'>
            Already have an account? 
            <Link to='/login' className='text-[#0495d6] font-bold ml-1 hover:underline'>
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      {/* ✅ Success Modal */}
      {success && (
        <div className="absolute right-0 top-20 bg-white shadow-lg rounded-l-lg p-5 w-80 animate-slideIn">
          <h3 className="font-bold text-lg text-green-600">Registration Successful 🎉</h3>
          <p className="text-sm mt-2">
            A verification email has been sent to <span className="font-semibold">{formData.email}</span>.  
            Please check your inbox and verify before logging in.
          </p>
        </div>
      )}
    </div>
  );
}
