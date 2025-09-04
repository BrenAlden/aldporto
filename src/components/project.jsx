import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient';
import ProjectCard from '../components/projectcomponents/ProjectCard';
import ProjectModal from '../components/projectcomponents/ProjectModal';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const additionalProjectsRef = useRef(null);
    const sectionRef = useRef(null); 

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase.from('projects').select('*').order('id', { ascending: false });
                if (error) throw error;
                setProjects(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    useEffect(() => {
        if (showAll && additionalProjectsRef.current) {
            additionalProjectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [showAll]);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };
    
    const handleToggleClick = () => {
        if (showAll && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setShowAll(!showAll);
    };

    if (loading) return <p className="text-center py-10">Loading projects...</p>;
    if (error) return <p className="text-center text-red-500 py-10">Error: {error}</p>;

    const initialProjects = projects.slice(0, 3);
    const additionalProjects = projects.slice(3);

    return (
        <>
            <section id='project' ref={sectionRef} className="py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1661d2ff] mb-4">My Projects</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        A collection of projects I've worked on, showcasing my skills in web development, intelligent systems, and more.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 px-4 md:px-20">
                        {initialProjects.map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                onViewDetail={handleOpenModal} 
                            />
                        ))}
                    </div>

                    {projects.length > 3 && (
                        <div 
                            ref={additionalProjectsRef}
                            className={`
                                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden transition-all duration-700 ease-in-out
                                px-4 md:px-10 
                                ${showAll ? 'max-h-screen opacity-100 mt-8' : 'max-h-0 opacity-0'}
                            `}
                        >
                            {additionalProjects.map((project) => (
                                <ProjectCard 
                                    key={project.id} 
                                    project={project} 
                                    onViewDetail={handleOpenModal} 
                                />
                            ))}
                        </div>
                    )}


                    {projects.length > 3 && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleToggleClick}
                                className="bg-[#1661d2ff] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
                            >
                                {showAll ? 'Show Less' : 'Show All Projects'}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {isModalOpen && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </>
    );
};

export default Project;