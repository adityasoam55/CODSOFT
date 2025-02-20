import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion } from "framer-motion";


export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-30">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Aditya Som
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-gray-400">
          <motion.a
            href="#projects"
            className="mr-5 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#skills"
            className="mr-5 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Skills
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aditya-som55"
            target="_blank"
            className="mr-5 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Linkedin
          </motion.a>
          <motion.a
            href="https://github.com/adityasoam55"
            target="_blank"
            className="mr-5 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            GitHub
          </motion.a>
        </nav>
        <a
          href="#footer"
          className="inline-flex items-center bg-gray-800 text-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0">
          Hire Me
          <HiOutlineArrowSmRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}