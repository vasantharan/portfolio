import React from "react";
import aboutImg from "../assets/img-bg-rem.png";
const About = () => {
    const info = [
        { text: "Undergraduate Degree", count: "B. Tech" },
        { text: "Current Semester", count: "06" },
        { text: "Current CGPA", count: "9.57" },
        { text: "Projects Done", count: "6" },
    ];
    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                About <span className="text-sky-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">Introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                <div className="p-2">
                    <div className="text-gray-300 my-3">
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                        Hey there, I'm Vasantharan, currently pursuing B.Tech in Artificial Intelligence and Data Science at Kongu Engineering College. While AI is my primary focus, I'm also drawn to the world of IoT problem-solving and embedded systems. I find joy in unraveling the hardware mysteries behind the software magic.
                        My journey goes beyond academics—I proudly serve as a Cadet in the SD Kongu Engineering College NCC Unit [15 (TN) BN, ERODE KOVAI GROUPS]. This experience has instilled discipline, leadership, and teamwork in me, qualities that complement my tech interests well.
                        But that's not all—besides coding, I've challenged myself by participating in four SSBs, two each for the Army and Navy. These experiences have taught me the essence of resilience and determination.
                        Let's explore the fusion of AI, IoT, and embedded systems. Connect with me as we push the boundaries of technology together!
                    </p>
                    <div className="flex mt-10 items-center gap-7">
                        {info.map((content) => (
                        <div key={content.text}>
                            <h3 className="md:text-4xl text-2xl font-semibold text-white">
                            {content.count}
                            <span className="text-sky-600"></span>{" "}
                            </h3>
                            <span className="md:text-base text-xs">{content.text}</span>
                        </div>
                        ))}
                    </div>
                    <br />
                    <br />
                    </div>
                </div>
                <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                    <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                    <img
                        src={aboutImg}
                        alt=""
                        className="w-full object-cover bg-sky-600 rounded-xl"
                    />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;