"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ViewProjectButton = React.forwardRef(({ className, children, ...props }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToProject = () => {
  const section = document.getElementById("project");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <button
      onClick={scrollToProject} 
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium
        transition-colors disabled:pointer-events-none disabled:opacity-50
        relative overflow-hidden group gap-5
        ${className || ''}
      `}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
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
        <FaArrowRight className="text-sm gap" />
      </span>
    </button>
  );
});

ViewProjectButton.displayName = "ViewProjectButton";

export { ViewProjectButton };