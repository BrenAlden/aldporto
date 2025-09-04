import React, { useState } from "react";
import profileImage from '../assets/about/about1.jpg';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';
import ExperienceModal from "./aboutcomponents/ExperienceModal"; 
import "./aboutcomponents/about.css";

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="w-full max-w-6xl flex flex-col items-center p-6 md:p-0">
                <h1 className="about-title text-4xl font-bold text-[#1661d2ff] text-center block md:hidden">
                    About Me
                </h1>

                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
                    <div className="md:w-2/3 text-center md:text-left order-2 md:order-none">
                        <h1 className="about-title text-4xl font-bold mb-4 text-[#1661d2ff] hidden md:block">
                            About Me
                        </h1>

                        <p className="about-paragraph text-xl text-justify leading-relaxed mb-8 py-2 px-1 md:px-0">
                            As a Computer Science student at Bina Nusantara University specializing in{' '}
                            <span className="bg-[#FBBF24] text-white px-2 py-1 rounded">
                                Intelligent Systems
                            </span>
                            , I have a strong foundation in Machine Learning, Deep Learning, Natural Language Processing, and Speech Recognition. Beyond my core curriculum, I am actively expanding my skills in both data analysis and web development. I am a highly motivated and adaptable learner, passionate about leveraging my technical expertise to solve complex problems and contribute to innovative, impactful solutions in the tech industry.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between mb-4">
                                <h2 className="experience-title text-2xl font-bold text-[#1661d2ff]">Experience</h2>
                                <button 
                                    onClick={handleOpenModal}
                                    className="bg-[#FBBF24] text-white px-4 py-2 text-sm rounded-lg hover:opacity-90 transition-opacity md:py-1">
                                    View Detail
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <FaChalkboardTeacher className="text-2xl text-[#1661d2ff]" />
                                    <div>
                                        <h3 className="font-semibold">Binus Student Advisory & Support Center</h3>
                                        <p className="text-sm text-slate-600">Mentor | September 2025 - Present</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaGraduationCap className="text-2xl text-[#1661d2ff]" />
                                    <div>
                                        <h3 className="font-semibold">Bina Nusantara University</h3>
                                        <p className="text-sm text-slate-600">Undergraduate Computer Science | September 2023 - Present</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full md:w-80 mt-5 md:mt-0 order-1 md:order-none">
                        <img
                            src={profileImage}
                            alt="Foto Bren Alden"
                            className="about-photo rounded-xl shadow-lg w-48 h-48 md:w-full md:h-auto object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="w-full mt-6 flex flex-row justify-around items-start text-center gap-2">
                            <div className="flex-1 bg-slate-100 p-3 rounded-lg">
                                <h5 className="text-2xl md:text-3xl font-bold text-[#1661d2ff]">3+</h5>
                                <p className="text-xs md:text-sm text-slate-600">Years of Coding</p>
                            </div>
                            <div className="flex-1 bg-slate-100 p-3 rounded-lg">
                                <h5 className="text-2xl md:text-3xl font-bold text-[#1661d2ff]">5+</h5>
                                <p className="text-xs md:text-sm text-slate-600">Programming Language</p>
                            </div>
                            <div className="flex-1 bg-slate-100 p-3 rounded-lg">
                                <h5 className="text-2xl md:text-3xl font-bold text-[#1661d2ff]">10+</h5>
                                <p className="text-xs md:text-sm text-slate-600">AI Models Trained</p>
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