import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'
import { URL } from '../url';
import { UserContext } from '../context/UserContext';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(URL+"/api/auth/login",{email, password},{withCredentials: true})
      // console.log(res.data);
      setUser(res.data)
      navigate("/");
    } catch(err) {
      setError(true);
      console.log(err);
    }
  }

  return (
    <>
    <div className='bg-white rounded-lg shadow dark:bg-gray-900 m-4'>
      {/* Logo */}
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <h1 className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
          <Link to='/'>InsightfulBytes</Link>
        </h1>
        <h3 className='bg-white rounded-lg text-black text-lg px-4 py-2'>
          <Link to='/register'>Register</Link>
        </h3>
      </div>
    </div>
    <div className='w-full flex justify-center items-center h-[80vh]'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
        <h1 className='text-3xl font-bold text-left'>
          Log In To Your Account
        </h1>
        <input 
          type="text" 
          className='w-full px-4 py-2 border-2 border-black outline-0 rounded-lg'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          className='w-full px-4 py-2 border-2 border-black outline-0 rounded-lg'
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'
          onClick={handleLogin}
        >
          Log In
        </button>
        {error && <h3 className='text-red-500 text-lg'>Something went wrong</h3>}
        <div className='flex justify-center items-center space-x-3'>
          <p>New Here?</p>
          <p className='text-gray-500 hover:text-black'>
            <Link to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login
