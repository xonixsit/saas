import React, { useState } from 'react';
import './index.css';
import Navbar from './Navbar'; // Import the Navbar component
import Hero from './Hero'; // Import the Hero component
import Features from './Features'; // Import the Features component
import Footer from './Footer'; // Import the Footer component
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Subscribe from './Subscribe';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Initialize with false or true based on your requirement

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Subscribe />
      {/* <Footer /> */}
    </div>
  );
}

export default App;