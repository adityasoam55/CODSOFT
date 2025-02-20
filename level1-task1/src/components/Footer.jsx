import React from 'react';
import { IoIosContact } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Footer() {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <motion.div 
            id="footer" 
            className="bg-gray-800 flex flex-col items-center gap-2 pt-5 font-mono pb-10"
            ref={ref}
            initial={{ opacity: 0.4, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
        >
            <IoIosContact className="text-white inline-block w-10 h-10"/>
            <h1 className='text-white text-4xl font-medium mb-4'>Contact Me</h1>
            <p className="text-gray-200 mt-1">
                Sant Nagar, Delhi - 110084
            </p>
            <p className="text-gray-200 leading-relaxed text-sm">
                adityasoam55@gmail.com
            </p>
            <p className="leading-relaxed text-gray-200">+91 8384899626</p>
        </motion.div>
    )
}

export default Footer;
