import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons for social media

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Name or Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-300">Building amazing things with code.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © 2023 John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;