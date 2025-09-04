import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { ExperienceTimeline } from './ExperienceTimeline'; 

const ExperienceModal = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []); 

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
                className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col"
            >
                <div className="flex justify-between items-center p-4 md:p-6 border-b">
                    <h2 className="text-2xl font-bold text-[#1661d2ff]">Experience & Organization</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-800">
                        <FaTimes size="1.5em" />
                    </button>
                </div>
                <div className="overflow-y-auto p-4 md:p-6">
                    <ExperienceTimeline />
                </div>
            </motion.div>
        </div>
    );
};

export default ExperienceModal;