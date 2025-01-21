import React, { useState } from 'react';

const Subscribe = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Initialize with false or true based on your requirement

    return (
      <div className="mt-16 bg-blue-500 p-8 text-center">
      <h3 className="text-2xl font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-lg text-white mb-6">Subscribe to our newsletter for the latest updates and insights.</p>
      <div className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-l-lg text-gray-800 w-64 focus:outline-none"
        />
        <button className="bg-white text-blue-500 py-3 px-6 rounded-r-lg hover:bg-gray-200 transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </div>
    );
};

export default Subscribe;