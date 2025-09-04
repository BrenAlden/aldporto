import React from 'react';
import { motion } from 'framer-motion';

const curtainVariants = {
  initial: { x: '-100%' },
  animate: { 
    x: 0, 
    transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1] } 
  },
  exit: { 
    x: '100%', 
    transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1], delay: 0.2 } 
  }
};

const TransitionOverlay = () => {
  return (
    <motion.div
      variants={curtainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full bg-[#FBBF24] z-50"
    />
  );
};

export default TransitionOverlay;