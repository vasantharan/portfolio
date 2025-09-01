import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import intro from "../assets/photos/intro.png";
import hi from "../assets/logo/hi.png";
import resume from "../assets/resume/Resume - Vasantharan.pdf"; 

const Hero = () => {
    const imageRef = useRef(null);
    const imageInView = useInView(imageRef, { threshold: 0.3 });
    const imageControls = useAnimation();
    const textRef = useRef(null);
    const textInView = useInView(textRef, { threshold: 0.3 });
    const textControls = useAnimation();
    useEffect(() => {
        if (imageInView) {
        imageControls.start({ opacity: 1, x: 0 });
        } else {
        imageControls.start({ opacity: 0, x: -80 });
        }
    }, [imageInView, imageControls]);

    useEffect(() => {
        if (textInView) {
        textControls.start({ opacity: 1, x: 0 });
        } else {
        textControls.start({ opacity: 0, x: 50 });
        }
    }, [textInView, textControls]);

    return (
        <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r pt-10 px-4"
        >
        {/* Sub-background wrapper with padding */}
        <div className="w-full max-w-7xl rounded-xl shadow-xl p-6 md:p-10 flex md:flex-row flex-col items-center gap-10">
            {/* Left Side - Image */}
            <motion.div
            ref={imageRef}
            animate={imageControls}
            initial={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex items-center justify-center"
            >
            <div className="cursor-pointer w-72 sm:w-80 md:w-50 h-72 sm:h-80 md:h-96 p-4 bg-gray-700 rounded-lg shadow-lg group duration-300 hover:shadow-2xl [transform:perspective(800px)_rotateY(10deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] hover:scale-100 transition-all ease-in-out">
                <div className="w-full h-full rounded-lg flex items-center justify-center">
                <img
                    className="h-full w-auto object-contain duration-300 group-hover:-translate-x-8"
                    src={intro}
                    alt="intro"
                />
                </div>
            </div>
            </motion.div>

            {/* Right Side - Text */}
            <motion.div
            ref={textRef}
            animate={textControls}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
            >
            <div className="md:text-left text-center">
                <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                <span className="text-cyan-600 md:text-6xl text-5xl">
                    <div className="flex justify-center md:justify-start items-center gap-2">
                    <div>Hello</div>
                    <div>
                        <img
                        src={hi}
                        className="w-12 inline animate-wave origin-[70%_70%]"
                        alt="hi"
                        />
                    </div>
                    </div>
                </span>
                I am <span>Vasantharan K</span>
                </h1>
                <h3 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-200">
                <TypeAnimation
                    sequence={[
                    "Content Creator",
                    2000,
                    "Freelance Educator",
                    2000,
                    "Mentor",
                    2000,
                    "Freelance Developer",
                    2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: "23px" }}
                />
                </h3>
                <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                {/* Resume Button */}
                <a
                    href={resume}
                    download="Vasantharan_Resume.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white border border-white rounded-lg 
                            hover:text-[#3182ce] hover:border-[#3182ce] 
                            transition-colors duration-300 ease-in-out"
                >
                    Resume
                </a>

                {/* Freelancing Button */}
                <a
                    href="/freelancing"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white border border-white rounded-lg 
                            hover:text-[#3182ce] hover:border-[#3182ce] 
                            transition-colors duration-300 ease-in-out"
                >
                    Hire Me for Your Next Project
                </a>
                </div>
            </div>
            </motion.div>
        </div>
        </section>
    );
};

export default Hero;
