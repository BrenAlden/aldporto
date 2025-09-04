import React from 'react';
import AsciiCountUp from './navbarcomponents/asciicountup.jsx';
import { FiHome, FiUser, FiFolder, FiAward, FiMail } from "react-icons/fi";
import './navbarcomponents/navbar.css';

const Navbar = ({ scrollToHome, scrollToAbout, scrollToProject, scrollToAchievement, scrollToContact }) => {
  return (
    <nav className="navbar-container fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="hidden md:flex items-center justify-between p-4 max-w-6xl mx-auto">
        <div className="text-[#1661d2ff]">
          <AsciiCountUp />
        </div>

        <div className="flex space-x-12 font-medium">
          <button onClick={scrollToHome} className="hover:text-gray-600">Home</button>
          <button onClick={scrollToAbout} className="hover:text-gray-600">About</button>
          <button onClick={scrollToProject} className="hover:text-gray-600">Project</button>
          <button onClick={scrollToAchievement} className="hover:text-gray-600">Achievement</button>
        </div>

        <div>
          <button
            onClick={scrollToContact}
            className="flex items-center space-x-2 px-4 py-2 bg-[#FBBF24] text-white rounded-md hover:bg-[#fee7ab]"
          >
            <FiMail className="w-5 h-5" />
            <span>Contact Me</span>
          </button>
        </div>
      </div>

      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 
                      flex items-center justify-center gap-8 bg-white px-6 py-3 
                      rounded-2xl shadow-lg z-50">
        <button onClick={scrollToHome} className="text-gray-700 hover:text-blue-500">
          <FiHome size={24} />
        </button>
        <button onClick={scrollToAbout} className="text-gray-700 hover:text-blue-500">
          <FiUser size={24} />
        </button>
        <button onClick={scrollToProject} className="text-gray-700 hover:text-blue-500">
          <FiFolder size={24} />
        </button>
        <button onClick={scrollToAchievement} className="text-gray-700 hover:text-blue-500">
          <FiAward size={24} />
        </button>
        <button onClick={scrollToContact} className="text-gray-700 hover:text-blue-500">
          <FiMail size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
