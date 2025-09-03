import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import teamdata from "../data/team";

const TeamCard = ({ member, index }) => {
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
            className="bg-black/80 cursor-pointer rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center text-center
                hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out"
        >
            <img
                src={member.photo}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-gray-600 shadow-md"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-400 mt-2">{member.subtitle}</p>
        </motion.div>
    );
};

const Team = () => {
    return (
        <section className="pt-10 pb-10 bg-transparent text-white px-6 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

            <div className="flex justify-center">
                <div
                className={`grid gap-10 
                    grid-cols-1
                    ${teamdata.length === 2 ? "sm:grid-cols-2" : ""} 
                    ${teamdata.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}
                `}
                >
                {teamdata.map((member, idx) => (
                    <TeamCard key={idx} member={member} index={idx} />
                ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
