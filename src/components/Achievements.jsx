import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import achievementData from "../data/achievement";
import medal from "../assets/logo/medal.png";
import achiver from "../assets/photos/achievements.jpg";

const AchievementCard = ({ item, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        } else {
            controls.start({ opacity: 0, x: 50 });
        }
    }, [inView, controls]); // ✅ All dependencies included

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="grid grid-cols-[auto_1fr] gap-4 items-center mb-10"
        >
            {/* Medal Icon */}
            <div className="flex justify-center items-center z-10">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                    <img src={medal} alt="Medal" className="w-5 h-5 object-contain" />
                </div>
            </div>

            {/* Card Content */}
            <div className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-md w-full hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out">
                <h3 className="text-md font-semibold">{item.award}</h3>
                <p className="text-sm text-gray-300">{item.issuer}</p>
                <p className="text-xs text-blue-300 mt-1 italic">{item.issuedon}</p>
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    const reversedData = [...achievementData].reverse();

    // Image scroll in/out motion setup
    const imageRef = useRef(null);
    const imageInView = useInView(imageRef, { threshold: 0.3 });
    const imageControls = useAnimation();

    useEffect(() => {
        if (imageInView) {
            imageControls.start({ opacity: 1, x: 0 });
        } else {
            imageControls.start({ opacity: 0, x: -80 });
        }
    }, [imageInView, imageControls]); // ✅ Both dependencies correctly included

    return (
        <section id="achievements" className="py-16 px-4 pt-20 text-white overflow-x-hidden">
            <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>

            <div className="flex flex-col md:flex-row items-start justify-center max-w-full mx-auto gap-10">
                {/* Left - Animated Image */}
                <motion.div
                    ref={imageRef}
                    animate={imageControls}
                    initial={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div
                        className="cursor-pointer rounded-xl transition-transform duration-500 [transform:perspective(800px)_rotateY(0deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] hover:shadow-2xl hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out"
                    >
                        <img
                            src={achiver}
                            alt="Achiever"
                            className="rounded-xl shadow-xl max-w-full w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right - Timeline */}
                <div className="relative w-full md:w-1/2">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-0 h-full border-l-2 border-yellow-400 z-0" />
                    <div className="ml-4 md:ml-10">
                        {reversedData.map((item, index) => (
                            <AchievementCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;