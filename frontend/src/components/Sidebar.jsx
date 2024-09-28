import React, { useEffect, useState } from 'react';
import { IoSunnyOutline, IoDocumentAttachOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiQrCodeDuotone } from "react-icons/pi";
import { HiOutlineUserCircle, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { RiMenu4Fill } from "react-icons/ri";
import user from '../assets/user.png';
import { motion, AnimatePresence } from 'framer-motion';



const Sidebar = () => {
    const [tone, setT] = useState('Formal');
    const [prompt, setPrompt] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [animationKey, setAnimationKey] = useState(0);

    const blogLength = [
        { value: 512, label: 'Small' },
        { value: 1024, label: 'Medium' },
        { value: 2048, label: 'Long' },
    ];

    const handleSidebar = () => {
        setIsVisible(!isVisible);
        setAnimationKey(animationKey + 1);
    }

    const handleChange = (event) => {
        setT(event.target.value); // Update state with selected value
        setTone(event.target.value); // Update context with selected value
    };

    return (
        <AnimatePresence>
            {!isVisible ? <motion.div
                key={animationKey}
                initial={{ x: '-10px', opacity: 0, scale: 0.95 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                className='bg-primary rounded-r-2xl h-full px-6 py-6'>

                <div>
                    <div className='mb-8 flex justify-between items-center '>
                        <button onClick={handleSidebar} >
                            <span><RiMenu4Fill size={25} color='lightgreen' /></span>
                        </button>
                    </div>
                </div>
            </motion.div>
                :
                <motion.div
                    key={animationKey}
                    initial={{ x: '-100vw', opacity: 0, scale: 0.95 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    exit={{ x: '-80vw', opacity: 0, scale: 0.95 }}
                    className='bg-primary w-[25%] h-full flex flex-col justify-between font-pregular rounded-r-2xl px-6 py-6 overflow-scroll'>

                    <div>
                        <div className='mb-10 flex justify-between items-center'>
                            <h1 className='text-2xl font-plight text-white'>Deepfake Detector</h1>

                            <button onClick={handleSidebar} >
                                <span><RiMenu4Fill size={25} color='lightgreen' /></span>
                            </button>
                        </div>

                        <div className='w-full mt-6 mb-6'>
                            <div className='w-full'>
                                <h1 className='text-white font-psemibold mb-4'>Type</h1>
                                <select name="tone" id="tone" className="custom-select bg-layer rounded-lg w-full px-4 py-3 appearance-none cursor-pointer focus:outline-secondary font-pregular focus:border-none text-white focus:caret-secondary" onChange={handleChange}>
                                    <option value="Image">Image</option>
                                    <option value="Video">Video</option>
                                    <option value="Audio">Audio</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='w-full flex justify-between bg-layer rounded-md items-center p-4 mb-4'>
                            <div>
                                <h1 className='text-lg text-white'>Srijit Chakraborty</h1>
                                <p className='text-xs font-psemibold text-secondary'>FREE TIER</p>
                            </div>
                            <div className='rounded-[50px] w-[40px] h-[40px] object-contain overflow-hidden'>
                                <img src={user} alt="profile" />
                            </div>
                        </div>
                    </div>
                </motion.div>}

        </AnimatePresence>
    )
}

export default Sidebar;