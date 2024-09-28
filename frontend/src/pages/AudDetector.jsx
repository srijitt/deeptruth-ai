import React, { useEffect, useState, useRef } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiCircleChevRight } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import bg from '../assets/audio-bg.png';
import { FiUploadCloud } from "react-icons/fi";
import user from '../assets/user.png';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

function AudDetector() {
    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState('');
    const [loading, setLoading] = useState(false);

    const [img, setIMG] = useState(null); // To store the selected image
    
    const { isAuthenticated, user } = useAuth();

    const handleBlogSubmit = async () => {

    };

    useEffect(() => {
        if(!isAuthenticated) {
            window.location.href = '/login';
        }
        console.log("Selected Image: ", img);
    }, [img, isAuthenticated]);



    const myStyle = {
        backgroundImage: `url(${bg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className='bg-primary w-[100vw] h-[100vh] flex justify-between' style={myStyle}>

            <div className='w-[100%] h-full overflow-scroll flex flex-col justify-between' >
                <div className='text-white w-full flex flex-col items-center'>
                    <div className='flex justify-between w-[100vw] md:w-[60vw] md:mt-2 md:rounded-lg items-center px-4 py-4 mb-10 bg-primary bg-opacity-70'>
                        <Link to="/">
                            <button className='flex justify-start text-white text-sm font-semibold items-center gap-2'>
                                <span><IoMdArrowRoundBack size={20} color='white' /></span>
                                <p className='hidden md:block hover:text-secondary font-pthin'>Back</p>
                            </button>
                        </Link>
                        <h1 className='text-xl font-pmedium'>{user?.name}</h1>
                        <Link to='/home'><h1 className='text-xl font-pbold text-secondary'>deeptruth.ai</h1></Link>
                    </div>

                    {img != null ? <div className='w-full  py-12 flex flex-col justify-center items-center'>
                        <div className='p-16 rounded-xl text-center bg-layer bg-opacity-90 flex flex-col items-center justify-center'>
                            <img src={URL.createObjectURL(img)} alt="" className='w-[20vw] object-contain rounded-xl' />
                            <button className={`mt-8 bg-white text-primary font-psemibold hover:blur-[1px] hover:text-primary px-5 py-2 rounded-md font-medium disabled:opacity-25 disabled:cursor-wait`} disabled={loading} onClick={handleBlogSubmit}>
                                <span>Generate</span>
                            </button>
                        </div>

                    </div> :
                        <div className='w-full flex flex-col items-center'>
                            <motion.div
                                initial={{ y: '-100vh', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, type: 'spring', stiffness: 120, damping: 20 }}
                                exit={{ y: '-100vh', opacity: 0 }}
                                className='w-full flex flex-col justify-center items-center'>
                                <div className='flex justify-between text-white xl:w-1/3 h-[10vh] px-8 bg-layer bg-opacity-90 rounded-3xl focus:outline-none focus:caret-secondary items-center gap-2 mt-32'>
                                    <div>
                                        <input
                                            type="file"
                                            name="myImage"
                                            className="custom-file-input text-transparent rounded-md bg-transparent outline-none"
                                            // Event handler to capture file selection and update the state
                                            onChange={(event) => {
                                                console.log(event.target.files[0]); // Log the selected file
                                                setIMG(event.target.files[0]); // Update the state with the selected file
                                                setSelectedImage(event.target.files[0]); // Update the context with the selected file
                                            }}
                                        />

                                        <p className='font-plight text-xs opacity-40 bg-transparent outline-none mt-2 mr-4 w-full'>(Preferably MP3, AAC)</p>
                                    </div>

                                    <div>
                                        {!loading ?
                                            <span><FiUploadCloud size={25} /></span> :
                                            <span><img src={logo} alt="" width={30} /></span>
                                        }
                                    </div>
                                </div>
                                <p className='w-1/2 md:w-1/3 mt-3 font-plight text-center text-xs bg-transparent outline-none mr-4'>Just upload an image and watch our technology figure out the rest of it.</p>
                            </motion.div>

                            <motion.div className='mt-4 bg-secondary flex flex-col items-center p-4 rounded-lg'>
                                <p className='font-pregular'>Try other formats</p>

                                <div className='flex justify-center items-center gap-4'>
                                    <Link to='/image'>
                                        <button className={`bg-white text-primary hover:bg-opacity-70 hover:text-primary px-4 xl:px-6 py-3 rounded-md mt-4 flex justify-between items-center text-sm font-medium`}>
                                            <span className='text-xxs lg:text-xs xl:text-sm'>Image</span>
                                            <span className='ml-2'><CiCircleChevRight size={25} /></span>
                                        </button>
                                    </Link>

                                    <Link to='/video'>
                                        <button className={`bg-white text-primary hover:bg-opacity-70 hover:text-primary px-4 xl:px-6 py-3 rounded-md mt-4 flex justify-between items-center text-sm font-medium`}>
                                            <span className='text-xxs lg:text-xs xl:text-sm'>Video</span>
                                            <span className='ml-2'><CiCircleChevRight size={25} /></span>
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    }
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default AudDetector;
