import React from 'react';
import { motion } from 'framer-motion';

const CVModal = ({ onClose, cvUrl }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl h-3/4 flex flex-col"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-[#1661d2ff] text-2xl font-bold mb-4 text-center md:text-left">My CV</h2>
        
        <div className="flex-grow">
          <iframe
            src={`${cvUrl}#toolbar=0`}
            title="My CV"
            className="w-full h-full border-2 border-gray-300 rounded-md"
          >
            <p>Your browser does not support iframes. You can <a href={cvUrl} download>download the CV here</a>.</p>
          </iframe>
        </div>

        <div className="mt-4 flex justify-center">
            <a
              href={cvUrl}
              download="CV_Bren_Alden.pdf"
              className="inline-block bg-[#FBBF24] text-white px-6 py-3 rounded-md hover:bg-[#fee7ab] transition-colors"
            >
              Download CV
            </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CVModal;