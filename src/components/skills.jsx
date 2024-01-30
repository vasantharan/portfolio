import React from "react";

const Skills = () => {
    return (
        <section id="skills" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                <span className="text-sky-600">Skills</span> Set
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Professional Skills</p>
                <div className="flex items-center justify-center mt-6 gap-10 flex-wrap">
                    <img src="https://skillicons.dev/icons?i=azure,terraform,python,github,react,c,arduino,raspberrypi&perline=8" alt="" />
                </div>
                <div className="flex items-center justify-center mt-6 gap-10 flex-wrap">
                    <img src="https://skillicons.dev/icons?i=vscode,figma,html,css,javascript,bootstrap,git&perline=8" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Skills;