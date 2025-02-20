import React from "react";
import { skills } from "./data";
import { HiOutlineBadgeCheck, HiOutlineChip } from "react-icons/hi";
import { AiTwotoneApi } from "react-icons/ai";
import { IoLogoReact, IoLogoJavascript, IoLogoHtml5, IoLogoGithub } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const iconComponents = {
  IoLogoHtml5: IoLogoHtml5,
  RiTailwindCssFill: RiTailwindCssFill,
  IoLogoJavascript: IoLogoJavascript,
  IoLogoReact: IoLogoReact,
  AiTwotoneApi: AiTwotoneApi,
  IoLogoGithub: IoLogoGithub,
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <HiOutlineChip className="w-20 h-10 inline-block mb-4 animate-bounce" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            While working on different projects from scratch, I have gained
            different skill sets. Mentioned below are some of the main skills I have gained.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => {
            const IconComponent = iconComponents[skill.icon];
            return (
              <div key={skill.title} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <HiOutlineBadgeCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <div className="flex justify-between w-full text-white">
                    <div className="title-font font-medium items-center">
                      {skill.title}
                    </div>
                    <div>
                      <IconComponent className="w-6 h-6 animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
