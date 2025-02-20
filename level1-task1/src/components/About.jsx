import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="about">
      <div ref={ref} className="container mx-auto flex px-10 py-14 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Aditya.
            <br className="lg:inline-block" />
            Front-End Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am genuinely passionate about front-end development, and I'm eager to apply and expand my skills in a real-world setting and I'm quick to learn and adapt to new technologies.
          </p>
          <div className="flex justify-center">
            <motion.a
              href="/AdityaSom-Resume.pdf"
              download="AdityaSom-Resume.pdf"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              className="ml-4 inline-flex text-gray-300 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See My Past Work
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2 }}
        >
          <img
            className="w-full object-cover object-center rounded"
            alt="hero"
            src="/myIMG.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
}
