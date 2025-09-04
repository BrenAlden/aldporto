import React from 'react';
import icitcom1 from '../assets/certificate/ce1.png'; 

const achievementsData = [
    {
        id: 1,
        image: icitcom1,
        description: 'Author and Presenter in ICITCOM 2025 - "Analyzing Deep Learning in Quick, Draw!: A Case Study on Hand-drawn Sketch Recognition".',
    },
];

const Achievement = () => {
    return (
        <section className="px-6 py-16 md:px-12">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-center text-2xl font-bold text-[#1661d2ff] md:text-4xl">
                    My Achievements
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
                    Hope I get more achievements in the future :)
                </p>

                <div 
                    className={
                        achievementsData.length === 1 
                            ? 'flex justify-center' 
                            : 'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
                    }
                >
                    {achievementsData.map((achievement) => (
                        <div 
                            key={achievement.id} 
                            className="overflow-hidden rounded-lg shadow-lg lg:max-w-md bg-white"
                        >
                            <div className="group relative">
                                <img 
                                    src={achievement.image} 
                                    alt={`Sertifikat ${achievement.id}`} 
                                    className="block w-full"
                                />
                                
                                <div 
                                    className="absolute inset-0 flex items-center justify-center 
                                               bg-black bg-opacity-60 
                                               opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300
                                               hidden md:flex" 
                                >
                                    <p className="p-4 text-center text-white">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="p-4 md:hidden"> 
                                <p className="text-sm text-gray-700">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievement;