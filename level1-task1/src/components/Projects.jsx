import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons for GitHub and external link

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React.js and Tailwind CSS to showcase my skills and projects.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
    },
    {
      title: "E-Commerce App",
      description:
        "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/yourusername/ecommerce-app",
      live: "https://ecommerce-app.com",
    },
    {
      title: "Weather App",
      description:
        "A weather application that fetches real-time weather data using a third-party API and displays it in a user-friendly interface.",
      technologies: ["React", "REST APIs", "Tailwind CSS"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://weatherapp.com",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition duration-300"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;