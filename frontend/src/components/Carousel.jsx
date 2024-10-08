import React from 'react';
import { motion } from 'framer-motion';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';

const images = [c1, c3, c4, c5, c2, c1, c3, c4, c5, c2, c1, c3, c4, c5, c2];

const Carousel = () => {
  return (
    <div className="overflow-hidden relative w-full h-full">
      <motion.div
        className="flex space-x-4 w-max overflow-hidden "
        initial={{ x: 0 }}
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 60, 
            ease: 'linear',
          },
        }}
        whileHover={{ x: 0 }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="overflow-hidden w-64 h-74 rounded-xl shadow-lg">
                <img src={image} alt="" className='w-full h-full object-cover'/>
            </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
