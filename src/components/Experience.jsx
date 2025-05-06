import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import experienceData from '../data/experience';
import workIcon from '../assets/logo/work.svg';

const ExperienceCard = ({ item, index, isLeft }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 40 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="grid grid-cols-[1fr_auto_1fr] items-center mb-16"
        >
            {/* Left card */}
            <div className={`flex justify-end pr-2 ${isLeft ? '' : 'opacity-0 pointer-events-none'}`}>
                <div className="cursor-pointer bg-gray-800 p-5 rounded-lg shadow-md w-full max-w-sm sm:max-w-md text-right hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out">
                    <h3 className="text-lg sm:text-xl font-semibold">{item.role}</h3>
                    <p className="text-xs sm:text-sm text-blue-300">{item.company}</p>
                    <p className="text-xs sm:text-sm italic">{item.location}</p>
                    <p className="text-xs sm:text-sm mt-2 text-gray-300">{item.duration}</p>
                </div>
            </div>

            {/* Center icon */}
            <div className="flex justify-center items-center relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                    <img src={workIcon} alt="Work Icon" className="w-6 h-6 object-contain" />
                </div>
            </div>

            {/* Right card */}
            <div className={`flex justify-start pl-2 ${!isLeft ? '' : 'opacity-0 pointer-events-none'}`}>
                <div className="cursor-pointer bg-gray-800 p-5 rounded-lg shadow-md w-full max-w-sm sm:max-w-md text-left hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out">
                    <h3 className="text-lg sm:text-xl font-semibold">{item.role}</h3>
                    <p className="text-xs sm:text-sm text-blue-300">{item.company}</p>
                    <p className="text-xs sm:text-sm italic">{item.location}</p>
                    <p className="text-xs sm:text-sm mt-2 text-gray-300">{item.duration}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const reversedData = [...experienceData].reverse();

    return (
        <section id="experience" className="py-10 text-white pt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

            <div className="relative w-full max-w-6xl mx-auto px-4">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-500 z-0" />

                {reversedData.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <ExperienceCard
                            key={index}
                            item={item}
                            index={index}
                            isLeft={isLeft}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;