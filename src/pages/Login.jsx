import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../data/logo.png';
import { useStateContext } from '../contexts/ContextProvider';

const Login = () => {
  const { setActiveMenu } = useStateContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signin = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('กรุณากรอกข้อมูล');
    } else if (email === 'member' && password === '0000') {
      sessionStorage.setItem('stdNo', '65072713');
      localStorage.setItem('stdName', 'Nawarat Patnantaporn');
      navigate('/dashboard');
      window.location.reload();
    } else {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
    }
    setActiveMenu(true);
  };

  const toRegister = () => {
    setActiveMenu(false);
    navigate('/register');
  };

  return (
    <div className="flex w-full h-screen bg-gray-200">
      <div className="w-full flex items-center justify-center">
        <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-100'>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" style={{ borderRadius:'50%' }} /> 
            <span className="font-semibold">Storage Corporation</span>
            <p className="ml-5 text-2xl font-semibold text-blue-500">Sign In</p>
          </div>

          <p className="font-medium text-lg text-gray-500 mt-4">Welcome to Storage Coporation</p>

          <div className="mt-8">
            <div>
              <label className="text-lg font-medium">Username</label>
              <input 
                className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
                placeholder='Enter your username'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-lg font-medium">Password</label>
              <input type='password'
                className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold" onClick={signin}>Sign In</button>
            </div>

            <div className="mt-8 flex justify-center items-center">
              <span className="font-medium text-base">Don't have an Account?</span>
              <button className="font-medium text-base text-blue-600 ml-2" onClick={toRegister}> Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
