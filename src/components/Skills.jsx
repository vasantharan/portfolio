import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import workingImage from '../assets/photos/skills.jpg';
import skills from '../data/skills';
import certifications from '../data/certifications';

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-4 pt-20 text-white overflow-x-hidden">
            <h2 className="text-3xl font-bold text-center mb-12">Skills and Certification</h2>

            <div className="flex flex-col md:flex-row items-start justify-center max-w-full mx-auto gap-10">
                
                {/* Left - Animated Image */}
                <AnimatePresence>
                    <motion.div
                        key="left"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}  // Added exit animation
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}  // Trigger every time it enters the viewport
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <div className="cursor-pointer rounded-xl transition-transform duration-500 
                            [transform:perspective(800px)_rotateY(0deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] 
                            hover:shadow-2xl hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out">
                            <img
                                src={workingImage}
                                alt="Working illustration"
                                className="rounded-xl shadow-xl w-full h-full object-cover" // Ensure the image covers the space
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Right - Skills + Badges */}
                <AnimatePresence>
                    <motion.div
                        key="right"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}  // Added exit animation
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}  // Trigger every time it enters the viewport
                        className="relative w-full md:w-1/2"
                    >
                        <div className="ml-4 md:ml-10">
                            {/* Skills Section */}
                            <div className="mb-10">
                                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-4">
                                    {skills.map((skill) => (
                                        <img
                                            key={skill}
                                            src={`https://skillicons.dev/icons?i=${skill}`}
                                            alt={skill}
                                            className="cursor-pointer w-12 h-12 rounded-lg hover:scale-110 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.8)] 
                                            transition-all ease-in-out"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Certifications Section */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                                <div className="flex flex-wrap gap-6">
                                    {certifications.map((cert, index) => (
                                        <div
                                            key={index}
                                            className="cursor-pointer bg-gray-700 rounded-md hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.3)] transition-all ease-in-out"
                                        >
                                            <img
                                                src={cert.image}
                                                alt={cert.alt}
                                                className="w-40 h-auto rounded-lg shadow-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Skills;
