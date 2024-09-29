import React, { useState } from 'react'
import { CiCircleChevRight } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bg from '../assets/landing-bg.png';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { IoCloudUpload } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import Pricing from '../components/Pricing';

const Landing = () => {

    const { isAuthenticated } = useAuth();

    const myStyle = {
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    const steps = [
        {
            id: 1,
            icon: <IoCloudUpload size={40}/>,
            title: '01',
            desc: 'Upload an image to get started.'
        },
        {
            id: 2,
            icon: <FaBrain size={40}/>,
            title: '02',
            desc: 'Our AI model analyzes the image thoroughly.'
        },
        {
            id: 3,
            icon: <TbReportSearch size={40}/>,
            title: '03',
            desc: "Check the results to see if it's a deepfake or authentic."
        }
    ]

    

    return (
        <main className='bg-primary flex flex-col items-center w-[100vw] h-[100vh]'>
            <div className='bg-primary w-[100vw] flex flex-col items-center' style={myStyle}>
                <Navbar />

                <div className='w-full md:py-12 lg:py-20 flex flex-col items-center justify-start md:justify-center md:mt-0 mt-14'>
                    <motion.div
                        initial={{ x: -50, scale: 0.5, opacity: 0 }}
                        animate={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        className='w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[50vw] flex flex-col items-start md:items-center justify-center bg-primary bg-opacity-70 rounded-2xl py-14 md:py-16 lg:py-20 pl-8'>
                        <div className='flex flex-col items-start md:items-center md:text-center justify-center'>
                            <h1 className='text-4xl lg:text-5xl font-pbold text-white w-fit'>Can you tell what's <span className='text-secondary'>real?</span></h1>
                            <p className='mt-2 lg:mt-4 text-white text-xs md:text-sm lg:text-md font-pthin w-2/3'>Detect deepfakes instantly with our AI-powered tool. Upload an image, let our advanced model analyze it, and find out if it's real or fake. Protect yourself from manipulated media and ensure authenticity in just a few clicks.</p>
                        </div>

                        <div className='flex flex-col items-start justify-center mt-6'>
                            <Link to={isAuthenticated ? `/image` : `/login`}>
                                <button className={`w-[30vw] lg:w-[15vw] bg-white text-primary flex justify-center items-center hover:bg-opacity-50 py-3 rounded-md`}>
                                    <span className='text-xs md:text-base font-pbold'>Detect now</span>
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div className='mt-14 w-full flex flex-col items-start md:items-center justify-center px-8'>
                    <div className='md:text-center'>
                        <h1 className='text-3xl font-pbold'>It's pretty much simple.</h1>
                        <p className='text-xs'>Follow these quick steps to verify the authenticity of any image effortlessly.</p>
                    </div>
                    <div className='flex flex-col items-start justify-center mt-4'>
                        <div className='flex flex-wrap justify-between items-center gap-4'>
                            {steps.map(step => (
                                <div key={step.id} className='flex flex-col items-start justify-center bg-primary p-4 rounded-lg bg-opacity-70 w-[40vw] lg:w-[30vw] lg:h-[15vh]'>
                                    <div className='flex justify-center mb-4'>
                                        {step.icon}
                                    </div>
                                    <p className='text-xs'>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mt-24 pb-20 w-full md:px-8 flex flex-col items-start md:items-center justify-center'>
                    <Carousel />
                </div>

                <div className='pt-24 px-8 pb-20 md:px-8 w-full flex flex-col items-start md:items-center justify-center'>
                <div className='md:text-center'>
                        <h1 className='text-3xl lg:text-4xl font-pbold'>Blogs on deepfakes</h1>
                        <p className='text-xs'>Stay informed with the latest insights, trends, and research on deepfakes and digital authenticity.</p>
                    </div>
                    <div className='flex flex-col items-start justify-center mt-4'>
                        <Blog />
                    </div>
                    {/* <Pricing></Pricing> */}
                </div>
                
                <div className='bg-secondary md:rounded-t-lg bg-opacity-50 w-full md:w-[60vw]'>
                    <Footer />
                </div>

            </div>
        </main>
    )
}

export default Landing