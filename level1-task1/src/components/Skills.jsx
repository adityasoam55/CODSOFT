import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaServer, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="w-12 h-12" /> },
    { name: "HTML", icon: <FaHtml5 className="w-12 h-12" /> },
    { name: "CSS", icon: <FaCss3Alt className="w-12 h-12" /> },
    { name: "JavaScript", icon: <FaJs className="w-12 h-12" /> },
    { name: "REST APIs", icon: <FaServer className="w-12 h-12" /> },
    { name: "Git", icon: <FaGitAlt className="w-12 h-12" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className="py-20 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            My Skills
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <div className="text-blue-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;