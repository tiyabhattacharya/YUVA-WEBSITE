import React from 'react';
import { motion } from 'framer-motion';
import yuvaLogo from '../assets/yuvaLogo.jpg'; // adjust path if needed
import Footer from './Footer';
import Navbar from './Navbar';

const AboutYuva = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-12 gap-8">
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h1 className="text-4xl font-bold text-gray-800">About YUVA</h1>
            <p className="text-lg text-gray-600">
              YUVA is a non-profit initiative that empowers underprivileged students by providing quality education,
              mentorship, and guidance for various competitive exams. Our goal is to uplift and guide youth who might
              not otherwise have access to such resources.
            </p>
            <p className="text-lg text-gray-600">
              From regular classes and doubt-clearing sessions to exposure and counseling, YUVA aims to transform lives
              by nurturing talent and providing equal opportunities. We believe in the potential of every student.
            </p>
            <p className="text-lg text-gray-600">
              Started with a vision to make a difference, YUVA continues to grow as a strong community of passionate
              learners, dedicated mentors, and committed volunteers.
            </p>
          </div>

          {/* Logo Animation */}
          <div className="w-full md:w-1/2 relative h-72 flex items-center justify-center">
            <motion.img
              src={yuvaLogo}
              alt="YUVA Logo"
              className="absolute w-40 h-40 object-contain"
              initial={{ x: '100vw', y: '-100vh', opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 80, delay: 0.3 }}
            />
            <motion.img
              src={yuvaLogo}
              alt="YUVA Logo"
              className="absolute w-40 h-40 object-contain"
              initial={{ x: '-100vw', y: '100vh', opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 80, delay: 0.6 }}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutYuva;
