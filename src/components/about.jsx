import React, { useState } from "react";
import profileImage from '../assets/about/about1.png';
import { FaRobot, FaChalkboardTeacher } from 'react-icons/fa';
import ExperienceModal from "./aboutcomponents/ExperienceModal"; 
import "./aboutcomponents/about.css";
import { EvervaultCard } from "./homecomponents/EvervaultCard";

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center p-6 md:p-10">
                <h1 className="about-title text-3xl font-bold text-[#1661d2ff] text-center block md:hidden mb-6">
                    About Me
                </h1>

                <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-14">
                    
                    <div className="md:w-3/5 text-center md:text-left order-2 md:order-none">
                        <h1 className="about-title text-3xl font-bold mb-4 text-[#1661d2ff] hidden md:block">
                            About Me
                        </h1>

                        <p className="about-paragraph text-base md:text-lg text-slate-700 text-justify leading-relaxed mb-6">
                            As a Computer Science student at Bina Nusantara University specializing in{' '}
                            <span className="bg-[#FBBF24] text-white px-2 py-0.5 rounded font-medium">
                                Intelligent Systems
                            </span>
                            , I have a strong foundation in Machine Learning, Deep Learning, Natural Language Processing, and Speech Recognition. Beyond my core curriculum, I am actively expanding my skills in both data analysis and web development. I am a highly motivated and adaptable learner, passionate about leveraging my technical expertise to solve complex problems.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                            <div className="flex flex-row items-center justify-between mb-4">
                                <h2 className="experience-title text-xl font-bold text-[#1661d2ff]">Experience</h2>
                                <button 
                                    onClick={handleOpenModal}
                                    className="bg-[#FBBF24] text-white px-3 py-1 text-xs font-bold rounded-lg hover:opacity-90 transition-opacity">
                                    View Detail
                                </button>
                            </div>
                            <div className="space-y-4 text-left">
                                <div className="flex items-center gap-4">
                                    <FaRobot className="text-xl text-[#1661d2ff]" />
                                    <div>
                                        <h3 className="font-semibold text-sm md:text-base">PT. Astra Daihatsu Motor</h3>
                                        <p className="text-xs text-slate-500">RPA Developer Intern | March 2026 - Present</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaChalkboardTeacher className="text-xl text-[#1661d2ff]" />
                                    <div>
                                        <h3 className="font-semibold text-sm md:text-base">SASC Bina Nusantara University</h3>
                                        <p className="text-xs text-slate-500">Scholarship Mentor | September 2025 - January 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full md:w-72 order-1 md:order-none">
                        <EvervaultCard className="w-64 h-64 md:w-72 md:h-72"> 
                            <img
                                src={profileImage}
                                alt="Foto Bren Alden"
                                className="about-photo rounded-xl w-40 h-40 md:w-72 md:h-72 object-cover transition-transform duration-300 hover:scale-105"
                            />        
                        </EvervaultCard>

                        <div className="w-full mt-6 flex flex-row justify-between items-start gap-2">
                            <div className="flex-1 bg-slate-50 border border-slate-100 p-2 rounded-lg text-center shadow-sm">
                                <h5 className="text-xl md:text-2xl font-bold text-[#1661d2ff]">5+</h5>
                                <p className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase">Language</p>
                            </div>
                            <div className="flex-1 bg-slate-50 border border-slate-100 p-2 rounded-lg text-center shadow-sm">
                                <h5 className="text-xl md:text-2xl font-bold text-[#1661d2ff]">10+</h5>
                                <p className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase">AI Projects/Models</p>
                            </div>
                            <div className="flex-1 bg-slate-50 border border-slate-100 p-2 rounded-lg text-center shadow-sm">
                                <h5 className="text-xl md:text-2xl font-bold text-[#1661d2ff]">15+</h5>
                                <p className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase">RPA Projects</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {isModalOpen && <ExperienceModal onClose={handleCloseModal} />}
        </>
    );
}

export default About;