import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-[100vw] h-[100vh] bg-primary flex justify-center items-center'>
        <div className='bg-layer w-[90vw] lg:w-[40vw] h-[60vh] lg:h-[50vh] xl:h-[60vh] py-10 rounded-lg flex flex-col items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-secondary text-3xl font-pbold'>Login</h1>
                <p className='mt-2 text-xs font-pregular w-2/3 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, recusandae.</p>
            </div>

            <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] flex flex-col justify-center items-center mb-2 mt-4 lg:mt-10'>
                    <input type="text" placeholder="Email" className='w-[70vw] lg:w-[25vw] text-white px-4 py-3 bg-primary rounded-md mt-4 focus:outline-none focus:caret-secondary'/>

                    <input type="password" placeholder="Password" className='w-[70vw] lg:w-[25vw] text-white px-4 py-3 bg-primary rounded-md mt-4 focus:outline-none focus:caret-secondary'/>

                    <button className='mt-10 bg-white text-primary font-pbold px-8 py-2 rounded-lg'>Login</button>
            </div>

            <Link to='/signup'>
                <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] flex flex-col justify-center items-center mb-2 mt-4'>
                        <p className='text-secondary w-1/2 text-center text-xs lg:text-sm'>New here? Create an account now.</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Login