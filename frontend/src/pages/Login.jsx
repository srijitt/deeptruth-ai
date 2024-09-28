import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Login() {

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login, url } = useAuth();

  const handleLogin = async () => {
    if (data.email === '' || data.password === '') {
      alert('Please fill all the fields');
      return false;
    }
    else {
      setLoading(true);
      try {
        const response = await fetch(`${url}/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const responseData = await response.json();
        if (response.ok) {
          const accessToken = responseData.accessToken;
          login(accessToken);

        }
        else {
          setError(responseData.message);
          setLoading(false);
          return false;
        }
      } catch (error) {
        alert(error.message);
        setLoading(false);
        return false;
      }
    }
  }



  return (
    <div className='flex flex-col items-center bg-primary'>

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className='bg-white md:w-[60vw] md:rounded-lg md:mt-2 bg-opacity-80 w-full flex flex-row justify-center items-center px-8 py-4'>
        <div className='flex justify-start items-center font-pbold text-white text-xl'>
          {/* <img src={logo} alt="logo" className='w-[3vw]' /> */}
          <p className='w-1/2 text-secondary'>deeptruth.ai</p>
        </div>
      </motion.nav>

      <div className='w-[100vw] h-[100vh] bg-primary flex justify-center items-start mt-24'>
        <div className='bg-layer w-[90vw] lg:w-[40vw] h-[60vh] lg:h-[50vh] xl:h-[60vh] py-10 rounded-lg flex flex-col items-center'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-secondary text-3xl font-pbold'>Login</h1>
            <p className='mt-2 text-xs font-pregular w-2/3 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, recusandae.</p>
          </div>

          <div className='text-sm text-red-400'>{error}</div>

          <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] flex flex-col justify-center items-center mb-2 mt-4 lg:mt-10'>
            <input type="text" placeholder="Email" className='w-[70vw] lg:w-[25vw] text-white px-4 py-3 bg-primary rounded-md mt-4 focus:outline-none focus:caret-secondary' onChange={(e) => setData({ ...data, email: e.target.value })} />

            <input type="password" placeholder="Password" className='w-[70vw] lg:w-[25vw] text-white px-4 py-3 bg-primary rounded-md mt-4 focus:outline-none focus:caret-secondary' onChange={(e) => setData({ ...data, password: e.target.value })} />

            <button type='submit' className={`mt-10 bg-white text-primary font-pbold px-8 py-2 rounded-lg disabled:opacity-30`} disabled={loading} onClick={handleLogin}>{loading ? <FiLoader /> : "Login"}</button>
          </div>

          <Link to='/signup'>
            <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] flex flex-col justify-center items-center mb-2 mt-4'>
              <p className='text-secondary w-1/2 text-center text-xs lg:text-sm'>New here? Create an account now.</p>
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Login