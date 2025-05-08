import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import aboutData from "../data/about";
import aboutphoto from "../assets/photos/about.jpg";

const About = () => {
    const textRef = useRef(null);
    const imgRef = useRef(null);
    const textInView = useInView(textRef, { threshold: 0.3 });
    const imgInView = useInView(imgRef, { threshold: 0.3 });

    const textControls = useAnimation();
    const imgControls = useAnimation();

    useEffect(() => {
        if (textInView) {
            textControls.start({ opacity: 1, x: 0 });
        } else {
            textControls.start({ opacity: 0, x: -80 });
        }
    }, [textInView, textControls]);

    useEffect(() => {
        if (imgInView) {
            imgControls.start({ opacity: 1, x: 0 });
        } else {
            imgControls.start({ opacity: 0, x: 80 });
        }
    }, [imgInView, imgControls]);

    return (
        <section id="about" className="pt-20 pb-10 bg-transparent text-white px-6 md:px-12 overflow-x-hidden">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

            <div className="flex flex-col md:flex-row justify-between gap-10">
                {/* Text Content */}
                <motion.div
                    ref={textRef}
                    animate={textControls}
                    initial={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    {aboutData.map((paragraph, index) => (
                        <p key={index} className="mb-6 leading-relaxed text-justify text-lg">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                {/* Image */}
                <motion.div
                    ref={imgRef}
                    animate={imgControls}
                    initial={{ opacity: 0, x: 80 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div
                        className="cursor-pointer rounded-xl"
                    >
                        <img
                            src={aboutphoto}
                            alt="About"
                            className="rounded-2xl shadow-xl max-w-md w-full object-cover transition-transform duration-500 [transform:perspective(800px)_rotateY(0deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] hover:shadow-2xl hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
