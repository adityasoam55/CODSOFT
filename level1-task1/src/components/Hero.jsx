import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div className="text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          John Doe
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl font-semibold mb-6"
        >
          Frontend Developer | React Enthusiast
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          I build beautiful and responsive web applications that solve real-world problems. Let’s create something amazing together!
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          View My Work
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;