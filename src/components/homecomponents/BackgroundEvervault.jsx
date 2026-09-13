import React, { useState, useEffect } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export const BackgroundEvervault = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(10000));

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const interval = setInterval(() => {
      setRandomString(generateRandomString(10000));
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  return (
    // 1. Changed to 'absolute' so it stays strictly inside the Home section
    // 2. Changed to 'z-[0]' so it doesn't hide behind the root body background
    // 3. Added 'bg-slate-50' so you have a solid base layer in front of the root
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[0] bg-slate-50">
      
      <motion.div
        className="absolute inset-0 transition duration-300"
        style={{
          WebkitMaskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
          maskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
        }}
      >
        {/* Darkened text opacity to /40 so it is 100% visible for debugging */}
        <p className="p-4 text-[12px] font-mono font-bold break-all whitespace-pre-wrap text-[#1661d2ff]/40 leading-none tracking-tighter">
          {randomString}
        </p>
      </motion.div>
      
    </div>
  );
};

const generateRandomString = (length) => {
  let result = "";
  // Simplified character set for cleaner look
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};