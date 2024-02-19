// Import necessary React components and hooks
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

// Functional component for the login page
const Login = () => {
    const navigate = useNavigate()
  // State variables to store email and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for the login button click
  const handleLogin = () => {
    // Basic validation, you may want to add more robust validation logic
    if (email && password) {
        sessionStorage.setItem('login',true)
        // <Navigator
       
      // Perform authentication logic here (e.g., call a backend API)
      console.log('Login successful',sessionStorage.getItem('login'));
      navigate('/app')
    } else {
      console.log('Please enter both email and password');
    }
  };

  return (
    <div className='flex flex-col items-center m-10 bg-slate-400 rounded-lg'>
      <h2 className='text-lg text-yellow-400 font-bold'>Login Page</h2>
      {/* Email input field */}
      <label>Email:</label>
      <input
      className='rounded-md border-black p-3 px-16'
      // style={{padding:'15px',borderRadius:'10px'}}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Password input field */}
      <label>Password:</label>
      <input
      className='rounded-md border-black p-3 px-16'
      // style={{padding:'15px',borderRadius:'10px'}}
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Login button */}
      <button className='bg-amber-500 m-3 p-3 rounded-xl px-10 text-white'onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
