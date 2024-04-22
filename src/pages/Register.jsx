import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../data/logo.png';
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate();
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === '' || name.trim() === '' || password.trim() === '') {
      alert('กรุณากรอกข้อมูล');
    } else if (!isValidEmail(email)) {
      alert('รูปแบบอีเมลไม่ถูกต้อง');
    } else {
      const VALUES = { email, name, password };
      axios.post('http://localhost:3001/register', VALUES)
        .then(res => {
          navigate('/');
        })
        .catch(err => console.log(err))
    }
  };

  const backtoSignin = () => {
    navigate('/');
  };

  return (
    <div className="flex w-full h-screen bg-gray-200">
      <div className="w-full flex items-center justify-center">
        <form action='' className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-100'>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" style={{ borderRadius:'50%' }} />
            <span className="font-semibold">Storage Corporation</span>
            <p className="ml-5 text-2xl font-semibold text-blue-500">Sign Up</p>
          </div>

          <p className="font-medium text-lg text-gray-500 mt-4">Welcome to Storage Coporation!</p>
          <p className="font-medium text-lg text-gray-500 mt-4 flex items-center justify-center">Create your Account</p>

          <div className="mt-8">
            <div>
              <label className="text-lg font-medium">Email</label>
              <input 
                type='text'
                className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
                placeholder='use your email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="text-lg font-medium">Username</label>
              <input 
                type='text'
                className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
                placeholder='use your username'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-lg font-medium">Password</label>
              <input 
                type='password'
                className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
                placeholder='use your password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button type='button' onClick={handleSubmit} className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold">Sign Up</button>
            </div>

            <div className="mt-8 flex justify-center items-center">
              <span className="font-medium text-base">Already have an account?</span>
              <button className="font-medium text-base text-blue-600 ml-2" onClick={backtoSignin}> Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;
