import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import yt from "../assets/photos/youtube.jpg";
import ytlogo from "../assets/logo/ytlogo.png";

const yturl = "https://www.youtube.com/embed/IBGANwELS0E?si=-nP1fZI8Cjv-Mbli";

const Youtube = () => {
    const controls = useAnimation();
    const rightControls = useAnimation(); 
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false }); 

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0, 
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 0.3, 
                    ease: "easeOut",
                },
            });

            rightControls.start({
                x: 0, 
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 0.3, 
                    ease: "easeOut",
                },
            });
        } else {
            controls.start({
                x: -100, 
                opacity: 0,
                transition: {
                    duration: 1,
                    ease: "easeIn",
                },
            });

            rightControls.start({
                x: 100, 
                opacity: 0,
                transition: {
                    duration: 1,
                    ease: "easeIn",
                },
            });
        }
    }, [inView, controls, rightControls]);

    return (
        <section id="youtube" className="pt-20 px-4 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-12">
                YouTube
            </h2>

            <motion.div
                ref={ref}
                className="flex flex-col lg:flex-row items-center justify-center gap-10"
                initial={{ x: -100, opacity: 0 }} 
                animate={controls}
                transition={{ duration: 1 }}
            >
                {/* Left Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-center lg:items-center">
                    <img
                        src={yt}
                        alt="YouTube Channel"
                        className=" cursor-pointer rounded-xl shadow-lg w-full max-w-md mb-6 [transform:perspective(800px)_rotateY(0deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] hover:shadow-2xl hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out"
                    />

                    {/* Channel Name with Logo */}
                    <div className="mb-4">
                        <span className="inline-flex items-center gap-3">
                            <img
                                src={ytlogo}
                                alt="YouTube Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-2xl font-extrabold text-red-600">
                                TechKalvi Talks
                            </span>
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-white text-base leading-relaxed text-justify max-w-md mb-4">
                        Welcome to <strong>TechKalvi Talks</strong> – your go-to hub for simplified tech learning! 📚 Dive into topics like <strong>Machine Learning</strong>, <strong>Python</strong>, <strong>Git & GitHub Actions</strong>, and much more. Whether you're a curious beginner or a passionate coder, our channel will fuel your growth with practical insights and hands-on learning. Subscribe and stay ahead in tech! 🚀
                    </p>
                </div>

                {/* Right Section - YouTube Embed */}
                <motion.div
                    className="w-full lg:w-1/2 flex flex-col items-center justify-center"
                    initial={{ x: 100, opacity: 0 }} 
                    animate={rightControls} 
                    transition={{ duration: 1 }}
                >
                    <div className="w-full max-w-2xl aspect-video">
                        <iframe
                            className="rounded-xl shadow-xl w-full h-full hover:shadow-2xl hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out"
                            src={yturl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>

                    {/* Channel Name and Subscribe Button below the YouTube video */}
                    <div className="flex items-center bg-gray-700 rounded-lg justify-center gap-4 mt-4 w-auto p-2 max-w-2xl flex-wrap">
                        <div className="flex items-center gap-2">
                            <img
                                src={ytlogo}
                                alt="YouTube Logo"
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            />
                            <h3 className="text-lg sm:text-lg md:text-lg font-extrabold text-white">
                                TechKalvi Talks
                            </h3>
                        </div>
                        {/* Subscribe Button */}
                        <motion.a
                            href="https://www.youtube.com/@TechKalviTalks?sub_confirmation=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-600 text-sm sm:text-base md:text-lg lg:text-lg text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out"
                        >
                            Subscribe 🔔
                        </motion.a>
                    </div>

                </motion.div>
            </motion.div>
        </section>
    );
};

export default Youtube;
