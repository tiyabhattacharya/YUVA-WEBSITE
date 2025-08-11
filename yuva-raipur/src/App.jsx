import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutYuva from './pages/AboutYuva';
import ManBehindYuva from './pages/ManBehindYuva';
import ScrollToTopButton from './components/ScrollToTopButton';
import VisionAndMission from './pages/VisionAndMission';
import CoursesPage from './pages/CoursesPage';
import RegistrationForm from './pages/RegistrationForm';
import BlogPage from './pages/BlogPage';
import TeachingFaculty from './pages/TeachingFaculty';

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
          <Route path="/mission-vision" element={<VisionAndMission />} />

          <Route path="/about/faculty" element={<TeachingFaculty/>} />
          <Route path="/executive-body" element={<div>Coming Soon...</div>} />
          <Route path="/our-supporters" element={<div>Coming Soon...</div>} />
          <Route path="/achievements" element={<div>Coming Soon...</div>} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/admission/form" element={<RegistrationForm/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
