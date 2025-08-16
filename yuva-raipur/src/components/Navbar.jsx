import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-blue-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold tracking-wide text-white">
            <Link to="/">YUVA</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {/* Home */}
            <Link
              to="/"
              className="relative px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-300 after:content-[''] after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-all"
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-300">
                About Us <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-1 transition-all duration-300 ease-out w-56 backdrop-blur-lg bg-white/60 text-black rounded-xl shadow-lg py-2 z-50">
                <Link to="/about/yuva" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  About YUVA
                </Link>
                <Link to="/man-behind-yuva" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Man Behind YUVA
                </Link>
                <Link to="/mission-vision" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Mission & Vision
                </Link>
                <Link to="/about/faculty" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Teaching Faculty
                </Link>
                <Link to="/about/supporters" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Our Supporters
                </Link>
                <Link to="/about/current-team" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Current Team
                </Link>
                <Link to="/about/mentors" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Mentors
                </Link>
              </div>
            </div>

            {/* Courses */}
            <Link
              to="/courses"
              className="relative px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-300 after:content-[''] after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-all"
            >
              Courses
            </Link>

            {/* Admission Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-300">
                Admission <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-1 transition-all duration-300 ease-out w-48 backdrop-blur-lg bg-white/60 text-black rounded-xl shadow-lg py-2 z-50">
                <Link to="/admission/form" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Registration Form
                </Link>
                <Link to="/registered-students" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Registered Students
                </Link>
              </div>
            </div>

            {/* Achievements */}
            <Link
              to="/achievements"
              className="relative px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-300 after:content-[''] after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-all"
            >
              Achievements
            </Link>

            {/* YUVA Challenge */}
            <Link
              to="/yuva-challenge"
              className="relative px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-300 after:content-[''] after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-all"
            >
              YUVA Challenge
            </Link>

            {/* YUVA Drishti */}
            <Link
              to="/yuva-drishti"
              className="relative px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-300 after:content-[''] after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-400 after:transition-all"
            >
              YUVA Drishti
            </Link>

            {/* Gallery Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-300">
                YUVA-Samvaad <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-1 transition-all duration-300 ease-out w-48 backdrop-blur-lg bg-white/60 text-black rounded-xl shadow-lg py-2 z-50">
                <Link to="/photo-gallery" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Photo Gallery
                </Link>
                <Link to="/video-gallery" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Video Gallery
                </Link>
                <Link to="/media-gallery" className="block px-4 py-2 hover:bg-white/30 rounded-md">
                  Media Gallery
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none text-white text-2xl">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800/80 backdrop-blur-md text-white px-6 pb-4 space-y-2">
          <Link to="/" className="block py-2 hover:text-yellow-400">Home</Link>

          <details>
            <summary className="py-2 cursor-pointer">About Us</summary>
            <div className="pl-4">
              <Link to="/about-yuva" className="block py-1">About YUVA</Link>
              <Link to="/man-behind-yuva" className="block py-1">Man Behind YUVA</Link>
              <Link to="/mission-vision" className="block py-1">Mission & Vision</Link>
              <Link to="/teaching-faculty" className="block py-1">Teaching Faculty</Link>
              <Link to="/our-supporters" className="block py-1">Our Supporters</Link>
              <Link to="/current-team" className="block py-1">Current Team</Link>
              <Link to="/mentors" className="block py-1">Mentors</Link>
            </div>
          </details>

          <Link to="/courses" className="block py-2 hover:text-yellow-400">Courses</Link>

          <details>
            <summary className="py-2 cursor-pointer">Admission</summary>
            <div className="pl-4">
              <Link to="/registration-form" className="block py-1">Registration Form</Link>
              <Link to="/registered-students" className="block py-1">Registered Students</Link>
            </div>
          </details>

          <Link to="/achievements" className="block py-2 hover:text-yellow-400">Achievements</Link>
          <Link to="/yuva-challenge" className="block py-2 hover:text-yellow-400">YUVA Challenge</Link>
          <Link to="/yuva-drishti" className="block py-2 hover:text-yellow-400">YUVA Drishti</Link>

          <details>
            <summary className="py-2 cursor-pointer">YUVA-Samvaad</summary>
            <div className="pl-4">
              <Link to="/photo-gallery" className="block py-1">Photo Gallery</Link>
              <Link to="/video-gallery" className="block py-1">Video Gallery</Link>
              <Link to="/media-gallery" className="block py-1">Media Gallery</Link>
            </div>
          </details>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
