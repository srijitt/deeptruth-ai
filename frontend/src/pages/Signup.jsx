import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className='w-[100vw] h-[100vh] bg-primary flex justify-center items-center'>
            <div className='bg-layer w-[90vw] lg:w-[40vw] h-[65vh] lg:h-[55vh] xl:h-[65vh] py-10 rounded-lg flex flex-col items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-secondary text-3xl font-pbold'>Signup</h1>
                    <p className='mt-2 text-xs font-pregular w-2/3 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, recusandae.</p>
                </div>

                <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] flex flex-col justify-center items-center mb-2 mt-4 lg:mt-10'>
                    <input type="text" placeholder="Full Name" className='w-[70vw] lg:w-[25vw] text-white px-4 py-3 bg-primary rounded-md mt-4 focus:outline-none focus:caret-secondary' />

                    <input type="email" placeholder="Email" className='w-[70vw] lg:w-[25vw] text-white px-4 py-3 bg-primary rounded-md mt-4 focus:outline-none focus:caret-secondary' />

                    <input type="password" placeholder="Password" className='w-[70vw] lg:w-[25vw] text-white px-4 py-3 bg-primary rounded-md mt-4 focus:outline-none focus:caret-secondary' />

                    <button className='mt-10 bg-white text-primary font-pbold px-8 py-2 rounded-lg'>Signup</button>
                </div>

                <Link to='/login'>
                <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] flex flex-col justify-center items-center mb-2'>
                        <p className='text-secondary w-1/2 text-center text-xs lg:text-sm'>Back to Login</p>
                </div>
            </Link>
            </div>
            
        </div>
    )
}

export default Signup