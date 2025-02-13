import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden"
          >
            <img
              src="/images/myIMG.jpg" // Replace with your image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-lg mb-4">
              Hi, I’m John Doe, a passionate Frontend Developer with a love for
              building beautiful and functional web applications. I specialize in
              React.js and Tailwind CSS, and I’m always eager to learn new
              technologies and improve my skills.
            </p>
            <p className="text-lg mb-4">
              I enjoy turning complex problems into simple, intuitive solutions.
              When I’m not coding, you can find me exploring new tech trends,
              contributing to open-source projects, or playing video games.
            </p>
            <p className="text-lg">
              Let’s connect and create something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;