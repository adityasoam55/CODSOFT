import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after clicking a link (for mobile)
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 fixed w-full z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Name */}
          <div className="flex-shrink-0">
            <span
              onClick={() => scrollToSection("hero")}
              className="text-white text-xl font-bold cursor-pointer"
            >
              My Portfolio
            </span>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Skills
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Skills
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;