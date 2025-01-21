import React, { useState } from 'react';

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Initialize with false or true based on your requirement

    return (
        <footer className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">

            {/* Branding Section */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-extrabold text-blue-500">SaaSFlow</h2>
              <p className="text-lg text-gray-400 mt-2">
                Empowering businesses with intelligent automation and workflow solutions.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 mt-6 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-16 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">© 2025 SaaSFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;