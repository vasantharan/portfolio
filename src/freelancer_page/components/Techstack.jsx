import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import techstack from "../data/teachstack";

const circularcontent = [...techstack, ...techstack];

const Techstack = () => {
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
        <section
            className="pt-20 pb-10 bg-transparent text-white px-6 md:px-12 overflow-hidden"
            aria-label="Tech Stack"
        >
            <h2 className="text-3xl font-bold text-center text-white mb-12">
                Tech Stack
            </h2>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                transition={{ duration: 0.6 }}
                className="relative marquee-mask"
            >
                <div className="marquee">
                <div className="marquee__inner">
                    {circularcontent.map((logo, idx) => (
                    <div key={idx} className="marquee__item">
                        <img
                        src={logo}
                        alt={`tech-${idx}`}
                        className="marquee__img rounded-md shadow-md"
                        loading="lazy"
                        />
                    </div>
                    ))}
                </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Techstack;
