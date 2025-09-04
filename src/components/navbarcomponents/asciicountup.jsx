import React, { useState, useEffect } from 'react';

const AsciiCountUp = () => {
  const targetText = 'aldporto.';
  const asciiChars = '!@#$%^&*()_+=-`~[]{};\':",./<>?1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const animationSpeed = 70;

  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < targetText.length) {
        let newText = '';
        for (let i = 0; i < targetText.length; i++) {
          if (i < index) {
            newText += targetText[i];
          } else {
            newText += asciiChars.charAt(Math.floor(Math.random() * asciiChars.length));
          }
        }
        setDisplayText(newText);
        index++;
      } else {
        setDisplayText(targetText);
        setIsDone(true);
        clearInterval(intervalId);
      }
    }, animationSpeed);

    return () => clearInterval(intervalId);
  }, [targetText]);

  const handleMouseEnter = (e) => {
    if (isDone) {
      const originalText = e.target.textContent;
      let counter = 0;

      const hoverInterval = setInterval(() => {
        e.target.textContent = asciiChars.charAt(Math.floor(Math.random() * asciiChars.length));
        counter++;
      }, 50);

      e.target.onmouseleave = () => {
        e.target.textContent = originalText;
        clearInterval(hoverInterval);
      };
    }
  };

  return (
    <div className="text-xl font-bold font-mono">
      {displayText.split('').map((char, index) => (
        <span
          key={index}
          onMouseEnter={handleMouseEnter}
          style={{ transition: 'color 0.3s ease' }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default AsciiCountUp;