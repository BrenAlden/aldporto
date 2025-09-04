import React, { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Project from './components/project.jsx';
import TransitionOverlay from './TransitionOverlay.jsx';
import AnimatedSection from './AnimatedSection.jsx'; 
import Achievement from './components/achivement.jsx';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const achievementRef = useRef(null);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollTo = (ref) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'auto' });
      }
      setIsTransitioning(false);
    }, 800); 
  };

  return (
    <div className="bg-slate-100">
      <AnimatePresence>
        {isTransitioning && <TransitionOverlay />}
      </AnimatePresence>

      <Navbar
        scrollToHome={() => scrollTo(homeRef)}
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToProject={() => scrollTo(projectRef)}
        scrollToAchievement={() => scrollTo(achievementRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />
      
      <div id="home" ref={homeRef} className="min-h-screen grid place-items-center relative bg-slate-50">
        <Home />
      </div>

      <div id="about" ref={aboutRef} className="min-h-screen grid place-items-center p-8 bg-white">
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </div>
      <div id="project" ref={projectRef} className="min-h-screen grid place-items-center bg-white">
        <AnimatedSection>
          <Project />
        </AnimatedSection>
      </div>
      <div id="achievement" ref={achievementRef} className="min-h-screen grid place-items-center bg-white">
        <AnimatedSection>
          <Achievement />
        </AnimatedSection>
      </div>
      <div id="contact" ref={contactRef} className="min-h-screen grid place-items-center bg-white">
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </div>
    </div>
  );
}

export default App;