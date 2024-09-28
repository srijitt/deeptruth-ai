import React from 'react'
import { Link } from 'react-router-dom';
import { CiCircleChevRight } from 'react-icons/ci';
import { motion } from 'framer-motion';

function Navbar() {
    return (
        <motion.nav 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className='bg-primary md:w-[60vw] md:rounded-lg md:mt-2 bg-opacity-80 w-full flex flex-row justify-between items-center px-8 py-4'>
            <div className='flex justify-start items-center font-pbold text-white text-xl'>
                {/* <img src={logo} alt="logo" className='w-[3vw]' /> */}
                <p className='w-1/2'>deeptruth.ai</p>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <Link to='/login'>
                    <button className={`bg-white text-primary hover:text-primary  hover:bg-opacity-50 px-8 py-2 rounded-md flex justify-between items-center text-sm font-pmedium`}>
                        <span className='text-xs font-pmedium'>Login</span>
                    </button>
                </Link>
            </div>
        </motion.nav>
    )
}

export default Navbar