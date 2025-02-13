import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Import icons for social media

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email service)
    alert("Thank you for reaching out! I'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">Connect with Me</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition duration-300"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition duration-300"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition duration-300"
              >
                <FaTwitter className="mr-2" /> Twitter
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition duration-300"
              >
                <FaEnvelope className="mr-2" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;