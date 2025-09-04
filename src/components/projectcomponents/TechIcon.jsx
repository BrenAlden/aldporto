import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaMicrophone } from 'react-icons/fa';
import { SiTailwindcss, SiSupabase, SiJavascript, SiVite, SiFigma } from 'react-icons/si';
import { TbBrain, TbChartInfographic } from 'react-icons/tb'; 

const TechIcon = ({ toolName }) => {
    const iconSize = "1.5em";
    const iconMap = {
        'react': <FaReact size={iconSize} className="text-cyan-400" />,
        'tailwindcss': <SiTailwindcss size={iconSize} className="text-cyan-500" />,
        'supabase': <SiSupabase size={iconSize} className="text-green-500" />,
        'nodejs': <FaNodeJs size={iconSize} className="text-green-600" />,
        'javascript': <SiJavascript size={iconSize} className="text-yellow-400" />,
        'html': <FaHtml5 size={iconSize} className="text-orange-500" />,
        'css': <FaCss3Alt size={iconSize} className="text-blue-500" />,
        'vite': <SiVite size={iconSize} className="text-purple-500" />,
        'python': <FaPython size={iconSize} className="text-yellow-500" />,
        
        'machine learning': <TbBrain size={iconSize} className="text-purple-600" />,
        'deep learning': <TbBrain size={iconSize} className="text-indigo-600" />,
        'data analysis': <TbChartInfographic size={iconSize} className="text-emerald-500" />,
        'public speaking': <FaMicrophone size={iconSize} className="text-red-500" />,
        'figma': <SiFigma size={iconSize} className="text-pink-500" />,
    };

    const icon = iconMap[toolName.toLowerCase()] || null;

        return (
        <div className="relative group flex justify-center">
            {icon}
            <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md 
                             invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {toolName}
            </span>
        </div>
    );
};

export default TechIcon;