import React from 'react';
import { useAuth } from '../context/AuthContext';
import bg from '../assets/landing-bg.png';
import userLogo from '../assets/user.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Profile = () => {
  
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    }


    const myStyle = {
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

  return (
    <div className='flex flex-col items-center' style={myStyle}>
        <motion.nav 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className='bg-primary md:w-[60vw] md:rounded-lg md:mt-2 bg-opacity-80 w-full flex flex-row justify-center items-center px-8 py-4'>
            <div className='flex justify-start items-center font-pbold text-white text-xl'>
                {/* <img src={logo} alt="logo" className='w-[3vw]' /> */}
                <Link to='/'><p className='w-1/2'>deeptruth.ai</p></Link>
            </div>
        </motion.nav>
        <div className='flex flex-col items-center justify-center w-[100vw] h-[100vh]'>
            <div className="w-[80vw] md:w-[50vw] mx-auto p-6 bg-white bg-opacity-50 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
                <img 
                src={userLogo}
                className="rounded-full object-contain w-20 h-20"
                />
                <div>
                <h1 className="text-3xl font-bold text-gray-800">{user?.username}</h1>
                <p className="text-gray-600">{user?.email}</p>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">Full Name: {user?.name}</h2>

                <h2 className="text-xl font-semibold text-gray-800"> User since: {new Date(user?.createdAt).toLocaleDateString('en-GB')} </h2>
            </div>

            <button className="mt-6 px-6 py-2 bg-secondary text-white font-semibold rounded-lg shadow hover:bg-opacity-60 transition duration-200" onClick={handleLogout}>
                Logout 
            </button>
            </div>
        </div>
    </div>
  );
};

export default Profile;