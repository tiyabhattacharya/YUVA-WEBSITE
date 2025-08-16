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
import BlogPage from './pages/BlogPage'; // will be used as Yuva Challenge
import TeachingFaculty from './pages/TeachingFaculty';
import Banner from './components/Banner';
import DoNotMissStrip from './components/DoNotMissStrip';

// New/updated imports (placeholders for now)
import Mentor from './pages/Mentor';
import CurrentTeam from './pages/CurrentTeam';
import YuvaDrishti from './pages/YuvaDrishti';
import PhotoGallery from './pages/PhotoGallery';
import VideoGallery from './pages/VideoGallery';
import MediaGallery from './pages/MediaGallery';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <div className="pt-16">
  <Banner />
</div>
      
      <DoNotMissStrip />

      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About Section */}
          <Route path="/about/yuva" element={<AboutYuva />} />
          <Route path="/man-behind-yuva" element={<ManBehindYuva />} />
          <Route path="/mission-vision" element={<VisionAndMission />} />
          <Route path="/about/faculty" element={<TeachingFaculty />} />
          <Route path="/about/current-team" element={<CurrentTeam />} />
          <Route path="/about/mentors" element={<Mentor />} />
          <Route path="/about/executive" element={<div>Coming Soon...</div>} />
          <Route path="/about/supporters" element={<div>Coming Soon...</div>} />

          {/* Courses */}
          <Route path="/courses" element={<CoursesPage />} />

          {/* Admission */}
          <Route path="/admission/form" element={<RegistrationForm />} />
          <Route path="/admission/students" element={<div>Coming Soon...</div>} />

          {/* Yuva Drishti */}
          <Route path="/yuva-drishti" element={<YuvaDrishti />} />

          {/* Yuva Challenge (renamed Blog) */}
          <Route path="/yuva-challenge" element={<BlogPage />} />

          {/* Yuva Samvaad (renamed Gallery) */}
          <Route path="/photo-gallery" element={<PhotoGallery />} />
<Route path="/video-gallery" element={<VideoGallery />} />
<Route path="/media-gallery" element={<MediaGallery />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
