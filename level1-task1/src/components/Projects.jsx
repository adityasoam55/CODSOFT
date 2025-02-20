import React from "react";
import { projects } from "./data";
import { HiOutlineCode } from "react-icons/hi";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiOutlineCode className="mx-auto inline-block w-10 h-10 mb-4 animate-bounce" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Front-end experience, I continually look for new and better ways to make tech accessible by all.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-full p-4"
            >
              <div className="flex relative h-72">
                <img
                  alt="Project Image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={project.image}
                />
                <div className="px-8 py-7 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 flex flex-col justify-center">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="mt-1">
                    <ul className="list-none list-inside flex flex-wrap justify-center">
                      {project.skills.map((skill, index) => (
                        <li key={index} className="text-green-300 bg-gray-700 py-0.5 px-1 rounded ml-1 mb-1">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
