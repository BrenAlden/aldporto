import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient';
import ProjectCard from '../components/projectcomponents/ProjectCard';
import ProjectModal from '../components/projectcomponents/ProjectModal';

const Project = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const sectionRef = useRef(null);
    const projectsContainerRef = useRef(null);
    const additionalProjectsRef = useRef(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase.from('projects').select('*').order('id', { ascending: false });
                if (error) throw error;
                
                setAllProjects(data);
                const initialProjects = data.filter(project => project.category === 'project');
                setFilteredProjects(initialProjects);
                setActiveFilter('project');
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
    }, [showAll, filteredProjects]); // Menambahkan filteredProjects sebagai dependency

    const handleFilter = (filterType) => {
        setActiveFilter(filterType);
        setShowAll(false);
        const newFiltered = allProjects.filter(project => project.category === filterType);
        setFilteredProjects(newFiltered);
    };

    const handleToggleClick = () => {
        if (showAll && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setShowAll(!showAll);
    };

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    if (loading) return <p className="text-center py-10">Loading projects...</p>;
    if (error) return <p className="text-center text-red-500 py-10">Error: {error}</p>;

    const initialProjects = filteredProjects.slice(0, 3);
    const additionalProjects = filteredProjects.slice(3);

    return (
        <>
            <section ref={sectionRef} id='projects' className="py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1661d2ff] mb-4">My Projects</h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto">
                        A collection of projects I've worked on, showcasing my skills in web development, intelligent systems, and more.
                    </p>

                    <div className="flex justify-center gap-4 my-8">
                        <button
                            onClick={() => handleFilter('project')}
                            className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${activeFilter === 'project' ? 'bg-[#FBBF24] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            Web Projects
                        </button>
                        <button
                            onClick={() => handleFilter('Model')}
                            className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${activeFilter === 'Model' ? 'bg-[#FBBF24] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            AI Models
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {initialProjects.map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                onViewDetail={handleOpenModal} 
                            />
                        ))}
                    </div>

                    {filteredProjects.length > 3 && (
                        <div 
                            ref={additionalProjectsRef}
                            className={`
                                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden transition-all duration-700 
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

                    {filteredProjects.length > 3 && (
                        <div className="text-center mt-4">
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