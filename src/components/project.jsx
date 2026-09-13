import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient';
import ProjectCard from '../components/projectcomponents/ProjectCard';
import ProjectModal from '../components/projectcomponents/ProjectModal';

const Project = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const sectionRef = useRef(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase.from('projects').select('*').order('id', { ascending: false });
                if (error) throw error;
                
                setAllProjects(data);
                const projectItems = data.filter(project => project.category === 'project');
                setFilteredProjects(projectItems);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

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

    return (
        <>
            <section ref={sectionRef} id='projects' className="py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1661d2ff] mb-4">My Projects</h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                        A collection of projects I've worked on, showcasing my skills in web development, intelligent systems, and more.
                    </p>

                    <div className="relative">
                        <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                            <span>Swipe to explore</span>
                            <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#1661d2ff]" />
                                <span className="h-1.5 w-1.5 rounded-full bg-[#1661d2ff]/70" />
                                <span className="h-1.5 w-1.5 rounded-full bg-[#1661d2ff]/40" />
                            </span>
                        </div>

                        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#1661d2ff]/70 scrollbar-track-slate-200 rounded-2xl border border-slate-200/80 bg-slate-50/50 shadow-inner shadow-slate-200/40">
                            <div className="flex gap-8 min-w-max snap-x snap-mandatory px-2 py-3">
                                {filteredProjects.map((project) => (
                                    <div key={project.id} className="w-[300px] sm:w-[340px] md:w-[360px] flex-shrink-0 snap-center">
                                        <ProjectCard 
                                            project={project} 
                                            onViewDetail={handleOpenModal} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </>
    );
};

export default Project;