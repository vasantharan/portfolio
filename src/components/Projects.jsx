import React, { useState, useEffect } from "react";
import projects from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const colorVariants = [
    "text-blue-300",
    "text-emerald-300",
    "text-pink-300",
    "text-yellow-300",
    "text-orange-300",
    "text-purple-300",
];

const Projects = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 5000); // Adjust to a faster slide transition (5 seconds)
        return () => clearInterval(interval);
    }, []);

    const colorClass = colorVariants[current % colorVariants.length];

    return (
        <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center text-white pt-10 px-4"
        >
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="relative w-full flex justify-center items-center group">
            {/* Left Arrow */}
            <button
            onClick={prevSlide}
            className="p-3 mr-4 text-white opacity-0 group-hover:opacity-100 hover:scale-110 transition-all ease-in-out"
            aria-label="Previous Project"
            >
            <ChevronLeft size={36} />
            </button>

            {/* Project Card */}
            <div className="w-full max-w-lg">
            <AnimatePresence mode="wait">
                <motion.div
                key={projects[current].title}
                initial={{ x: 300, opacity: 0, scale: 0.95 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -300, opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="cursor-pointer bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out"
                >
                <h3
                    className={`text-xl font-semibold mb-2 text-center ${colorClass} transition-all ease-in-out`}
                >
                    {projects[current].title}
                </h3>
                <p className="text-sm text-gray-300 mb-1 text-center">
                    <strong>Role:</strong> {projects[current].role}
                </p>
                <p className="text-sm text-gray-300 mb-3 text-center">
                    <strong>Duration:</strong> {projects[current].duration}
                </p>
                <p className="text-gray-200 text-sm text-justify">
                    {projects[current].description}
                </p>
                </motion.div>
            </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
            onClick={nextSlide}
            className="p-3 ml-4 text-white opacity-0 group-hover:opacity-100 hover:scale-110 transition-all ease-in-out"
            aria-label="Next Project"
            >
            <ChevronRight size={36} />
            </button>
        </div>
        </section>
    );
};

export default Projects;
