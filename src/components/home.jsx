import React from 'react';
import { motion } from 'framer-motion'; 
import './homecomponents/home.css';

import profileImage from '../assets/homeimg/profile.png';
import TextType from './homecomponents/TextType';
import { ViewProjectButton } from './homecomponents/ViewProjectButton';

import { FaReact, FaPython } from 'react-icons/fa';
import { SiCss3, SiJavascript, SiTailwindcss} from 'react-icons/si';

function Home() {

  const scrollToProject = () => {
    const projectSection = document.getElementById("projects"); 
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white">
      
      <motion.div 
        className="home-container flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-10 md:gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative hidden md:flex flex-shrink-0">
          <img
            src={profileImage}
            alt="Portfolio Image"
            className="rounded-3xl w-80 h-80 object-cover"
          />
          <div className="absolute top-[12%] left-[25%] text-4xl text-[#61DAFB] transform -rotate-12 hover:scale-125 transition-transform duration-200 ease-in-out"><FaReact /></div>
          <div className="absolute top-[0%] right-[40%] text-4xl text-[#F7DF1E] rotate-[-10deg] hover:scale-125 transition-transform duration-300 ease-in-out"><SiJavascript /></div>
          <div className="absolute top-[15%] right-[13%] text-4xl text-[#3776AB] rotate-12 hover:scale-125 transition-transform duration-300 ease-in-out"><FaPython /></div>
          <div className="absolute top-[65%] left-[60%] text-4xl text-[#007ACC] rotate-[15deg] hover:scale-125 transition-transform duration-300 ease-in-out"><SiTailwindcss /></div>
          <div className="absolute top-[45%] right-[10%] text-4xl text-[#FBBF24] rotate-[15deg] hover:scale-125 transition-transform duration-300 ease-in-out"><SiCss3 /></div>
        </div>

        <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#1661d2ff]">
            <TextType text={["Welcome!", "Selamat Datang!", "你好!", "ようこそ!", "안녕하세요!"]} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|" />
          </h1>
          <h1 className="text-3xl font-bold">
            <span className="bg-[#FBBF24] text-white px-2">
              <TextType text={["My name is Bren Alden"]} typingSpeed={25} pauseDuration={1500} showCursor={true} cursorCharacter="" loop={false} textColors={['#FFFFFF']} />
            </span>
          </h1>
          <div className='text-lg max-w-lg min-h-[5rem]'>
            <TextType 
              text={[
                "I'm an undergraduate student at Bina Nusantra University Alam Sutera majoring in Computer Science, with a huge passion in Intelligence Systems."
              ]} 
              typingSpeed={2} pauseDuration={1500} showCursor={true} cursorCharacter="" loop={false} textColors={['#000000']} 
            />
          </div>

          <ViewProjectButton 
            className="bg-[#FBBF24] text-white hover:bg-[#fee7ab] self-center md:self-start px-6 py-3 rounded-md"> 
            View My Projects
          </ViewProjectButton>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
