import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import AsciiCountUp from './navbarcomponents/asciicountup.jsx';
import { FiHome, FiUser, FiFolder, FiAward, FiMail } from "react-icons/fi";
import './navbarcomponents/navbar.css';

const Navbar = ({ scrollToHome, scrollToAbout, scrollToProject, scrollToAchievement, scrollToContact }) => {
  const navItems = [
    { name: 'Home', action: scrollToHome },
    { name: 'About', action: scrollToAbout },
    { name: 'Project', action: scrollToProject },
    { name: 'Achievement', action: scrollToAchievement },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="navbar-container fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="hidden md:flex items-center justify-between p-4 max-w-6xl mx-auto">
        <div className="text-[#1661d2ff]">
          <AsciiCountUp />
        </div>

        <div 
          className="flex space-x-12 font-medium"
          onMouseLeave={() => setHoveredItem(null)} 
        >
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={item.action}
              onMouseEnter={() => setHoveredItem(item.name)}
              className="relative hover:text-gray-600"
            >
              {item.name}
              {hoveredItem === item.name && (
                <motion.div
                  className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#1661d2ff]"
                  layoutId="underline" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </motion.button>
          ))}
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
        <button onClick={scrollToHome}><FiHome size={24} /></button>
        <button onClick={scrollToAbout}><FiUser size={24} /></button>
        <button onClick={scrollToProject}><FiFolder size={24} /></button>
        <button onClick={scrollToAchievement}><FiAward size={24} /></button>
        <button onClick={scrollToContact}><FiMail size={24} /></button>
      </div>
    </nav>
  );
};

export default Navbar;