import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutYuva from './pages/AboutYuva';
import ManBehindYuva from './pages/ManBehindYuva';
import ScrollToTopButton from './components/ScrollToTopButton';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/yuva" element={<AboutYuva />} />
          {/* Placeholder routes for future About pages */}
          <Route path="/man-behind-yuva" element={<ManBehindYuva />} />
          <Route path="/mission-vision" element={<div>Coming Soon...</div>} />
          <Route path="/teaching-faculty" element={<div>Coming Soon...</div>} />
          <Route path="/executive-body" element={<div>Coming Soon...</div>} />
          <Route path="/our-supporters" element={<div>Coming Soon...</div>} />
          <Route path="/achievements" element={<div>Coming Soon...</div>} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
