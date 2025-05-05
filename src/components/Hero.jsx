import React from "react";
import { TypeAnimation } from 'react-type-animation';
import intro from "../assets/photos/intro.png";
import hi from "../assets/photos/hi.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-black pt-10 px-4"
        >
            {/* Sub-background wrapper with padding */}
            <div className="w-full max-w-7xl bg-[#1f1f1f] rounded-xl shadow-xl p-6 md:p-10 flex md:flex-row flex-col items-center gap-10 hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] hover:scale-100 transition-all ease-in-out">
                
                {/* Left Side - Image */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="cursor-pointer w-72 sm:w-80 md:w-50 h-72 sm:h-80 md:h-96 p-4 bg-gray-700 rounded-lg shadow-lg group duration-300 hover:shadow-2xl [transform:perspective(800px)_rotateY(10deg)] hover:[transform:perspective(800px)_rotateY(-10deg)]">
                        <div className="w-full h-full rounded-lg flex items-center justify-center">
                            <img
                                className="h-full w-auto object-contain duration-300 group-hover:-translate-x-8"
                                src={intro}
                                alt="intro"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side - Text */}
                <div className="flex-1">
                    <div className="md:text-left text-center">
                        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                            <span className="text-cyan-600 md:text-6xl text-5xl">
                                <div className="flex justify-center md:justify-start items-center gap-2">
                                    <div>Hello</div>
                                    <div>
                                        <img src={hi} className="w-12 inline animate-wave origin-[70%_70%]" alt="hi" />
                                    </div>
                                </div>
                            </span>
                            I am <span>Vasantharan K</span>
                        </h1>
                        <h3 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-200">
                        <TypeAnimation
                            sequence={[
                                'Content Creator', 
                                2000, 
                                'Educator', 
                                2000, 
                                'Mentor', 
                                2000, 
                                'Freelance Developer', 
                                2000, 
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '23px' }}
                        />
                    </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
