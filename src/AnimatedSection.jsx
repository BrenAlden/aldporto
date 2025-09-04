import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;