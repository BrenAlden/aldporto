import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; 
import TechIcon from './TechIcon';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []); 

    if (!project) return null;

    return (
        <div 
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        >
            <motion.div 
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }}   
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
            >
                <div className="w-full h-64 flex-shrink-0 bg-slate-100">
                    <img 
                        src={project.image_url} 
                        alt={project.project_name} 
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6 flex flex-col overflow-y-auto"> 
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold text-[#1661d2ff]">{project.project_name}</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-800 transition-colors">
                            <FaTimes size="1.5em" />
                        </button>
                    </div>

                    <div className="space-y-4 text-sm text-gray-700 mb-6">
                        <div>
                            <h4 className="font-bold text-gray-800">Description</h4>
                            <p>{project.description}</p>
                        </div>
                         <div>
                            <h4 className="font-bold text-gray-800">My Role</h4>
                            <p>{project.Role}</p>
                        </div>
                         <div>
                            <h4 className="font-bold text-gray-800">Contributor</h4>
                            <p>{project.contributor}</p>
                        </div>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t">
                        <h4 className="font-bold text-gray-800 mb-3">Skills, Programming Language, and Tools</h4>
                        <div className="flex flex-wrap items-center gap-4">
                            {(project.skill || []).map((tech, index) => (
                                <TechIcon key={index} toolName={tech} />
                            ))}
                        </div>

                        <a 
                            href={project.project_link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full mt-6 bg-[#FBBF24] text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            <FaExternalLinkAlt />
                            Visit Project
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;