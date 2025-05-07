import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import tp from "../assets/photos/topmate.jpg";
import tplogo from "../assets/logo/topmatelogo.png";

const topmateurl = "https://topmate.io/vasantharank";

const Topmate = () => {
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    
    // Image scroll in/out motion setup
    const imageInView = useInView(imageRef, { threshold: 0.3 });
    const imageControls = useAnimation();

    // Content scroll in/out motion setup
    const contentInView = useInView(contentRef, { threshold: 0.3 });
    const contentControls = useAnimation();

    useEffect(() => {
        if (imageInView) {
            imageControls.start({ opacity: 1, x: 0 });
        } else {
            imageControls.start({ opacity: 0, x: -80 });
        }
    }, [imageInView, imageControls]);

    useEffect(() => {
        if (contentInView) {
            contentControls.start({ opacity: 1, x: 0 });
        } else {
            contentControls.start({ opacity: 0, x: 50 });
        }
    }, [contentInView, contentControls]);

    return (
        <section id="topmate" className="pt-20 px-4 md:px-20">
            <h2 className="text-3xl font-bold text-center mb-12">Topmate</h2>

            <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8">
                {/* Right Side: Logo + Caption + Iframe */}
                <motion.div
                    ref={contentRef}
                    animate={contentControls}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex flex-col items-center gap-4"
                >
                    {/* Logo and Caption Side-by-Side */}
                    <div className="flex items-center gap-x-4">
                        <img 
                            src={tplogo}
                            alt="Topmate Logo"
                            className="w-16 h-16 object-contain"
                        />
                        <h2 className="text-sm md:text-base lg:text-lg font-medium">
                            Book 1:1 Sessions or Get Guidance with Me on Topmate!
                        </h2>
                    </div>

                    {/* Iframe */}
                    <div className="w-full max-w-[700px] h-[90vh] rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-80 hover:shadow-2xl hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out">
                        <iframe 
                            src={topmateurl}
                            title="Topmate Profile"
                            className="cursor-pointer w-full h-full border-none"
                        ></iframe>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    ref={imageRef}
                    animate={imageControls}
                    initial={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <img 
                        src={tp} 
                        alt="Topmate Promo" 
                        className="cursor-pointer rounded-xl shadow-md w-[80%] md:w-[350px] lg:w-[380px] h-auto object-cover transition-transform duration-500 [transform:perspective(800px)_rotateY(0deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] hover:shadow-2xl hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Topmate;
