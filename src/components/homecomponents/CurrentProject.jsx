import React from 'react';
import TextType from './TextType';

const CurrentProject = ({ projectName }) => {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3">
      
      <div className="relative flex h-3 w-3">
        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
        <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
      </div>

      <p className="text-md text-gray-700">
        Currently working on the {' '}
        <span className="font-semibold text-gray-900">
          <TextType 
            text={[`${projectName} project...`]}
            typingSpeed={40}
            pauseDuration={5000}
            loop={false}
            showCursor={true}
            cursorCharacter="_"
          />
        </span>
      </p>

    </div>
  );
};

export default CurrentProject;