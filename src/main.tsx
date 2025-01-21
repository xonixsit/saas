import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import Signin from './Signin';
import Features from './Features';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Faq from './Faqs';
import Forgotpassword from './Forgotpassword';    
import ContactSupport from './Support';  

createRoot(document.getElementById('root')!).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/faq" element={<Faq />} />     
      <Route path="/forgot-password" element={<Forgotpassword />} />
      <Route path="/support" element={<ContactSupport />} />
      </Routes>
    <Footer />
  </Router>
);
