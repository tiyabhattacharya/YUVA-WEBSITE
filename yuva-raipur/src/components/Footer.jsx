import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Reach Us Column */}
        <div>
          <h3 className="text-lg font-bold underline mb-4 text-white">Reach us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 hover:text-teal-400 transition duration-300 hover:scale-105">
              <FaEnvelope /> yuva.raipur@gmail.com
            </li>
            <li className="flex items-center gap-3 hover:text-teal-400 transition duration-300 hover:scale-105">
              <FaPhone /> +91 99999 99999
            </li>
            <li className="flex items-center gap-3 hover:text-teal-400 transition duration-300 hover:scale-105">
              <FaMapMarkerAlt /> Raipur, Chhattisgarh
            </li>
          </ul>
        </div>

        {/* Mostly Searched Column */}
        <div>
          <h3 className="text-lg font-bold underline mb-4 text-white">Mostly searched</h3>
          <ul className="space-y-3">
            <li className="hover:text-yellow-400 hover:brightness-125 transition duration-300 hover:scale-105 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-400 hover:brightness-125 transition duration-300 hover:scale-105 cursor-pointer">Achievements</li>
            <li className="hover:text-yellow-400 hover:brightness-125 transition duration-300 hover:scale-105 cursor-pointer">Gallery</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-bold underline mb-4 text-white">Contact</h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.instagram.com/yuva_raipur/" className="hover:text-pink-400 hover:drop-shadow-md transition duration-300 text-xl">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/yuvaraipur.in" className="hover:text-blue-600 hover:drop-shadow-md transition duration-300 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-400 hover:drop-shadow-md transition duration-300 text-xl">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@yuvaraipur/featured" className="hover:text-red-600 hover:drop-shadow-md transition duration-300 text-xl">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-sky-400 hover:drop-shadow-md transition duration-300 text-xl">
              <FaTelegram />
            </a>
            <a href="#" className="hover:text-blue-500 hover:drop-shadow-md transition duration-300 text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
