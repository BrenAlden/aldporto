import React from 'react';
import TechIcon from './TechIcon';

const ProjectCard = ({ project, onViewDetail }) => {
    const truncateDescription = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <div 
            onClick={() => onViewDetail(project)}
            className="bg-slate-50 rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
        >
            <img src={project.image_url} alt={project.project_name} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#1661d2ff] mb-2">{project.project_name}</h3>
                <p className="text-gray-600 text-sm flex-grow mb-4">
                    {truncateDescription(project.description, 100)}
                </p>
                
                <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-4">
                        {project.skill.slice(0, 4).map((tech, index) => (
                            <TechIcon key={index} toolName={tech} />
                        ))}
                    </div>
                    <div
                        className="w-full bg-[#FBBF24] text-white font-bold py-2 px-4 rounded-lg text-center"
                    >
                        View Detail
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;