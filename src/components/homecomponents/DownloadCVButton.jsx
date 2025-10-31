import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence } from "framer-motion"; 
import cv from '../../assets/CV Bren Alden.pdf';
import CVModal from "./CVModal";

const DownloadCVButton = React.forwardRef(({ className, children, ...props }, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const cvPath = cv;

  return (
    <>
      <button
        onClick={togglePopup} // <-- Use your popup toggle function here
        className={`
          inline-flex items-center justify-center rounded-md text-sm font-medium
          transition-colors disabled:pointer-events-none disabled:opacity-50
          relative overflow-hidden group gap-5
          ${className || ''}
        `}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props} // <-- This will pass any other props like 'type', etc.
      >
        <span
          className={`
            relative z-10 block whitespace-nowrap transition-transform duration-300 ease-in-out
            ${isHovered ? "-translate-x-2" : "translate-x-0"}
          `}
        >
          {children}
        </span>
        
        <span
          className={`
            absolute right-4 transition-all duration-300 ease-in-out
            ${isHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          `}
        >
          <FaArrowRight className="text-sm" />
        </span>
      </button>

      {/* AnimatePresence must wrap the component that is being animated in/out */}
      <AnimatePresence>
        {isPopupOpen && <CVModal onClose={togglePopup} cvUrl={cvPath} />}
      </AnimatePresence>
    </>
  );
});

DownloadCVButton.displayName = "DownloadCVButton";

export { DownloadCVButton };