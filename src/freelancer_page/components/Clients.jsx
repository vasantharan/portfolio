import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import clientsdata from "../data/clients";

const ClientLogo = ({ logo, index }) => {
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
        <motion.img
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        src={logo}
        alt={`client-${index}`}
        className="max-h-24 w-auto object-contain cursor-pointer shadow-lg
                hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] transition-all ease-in-out"
        loading="lazy"
        />
    );
};

const Clients = () => {
    return (
        <section className="pt-2 pb-10 bg-transparent text-white px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Business Clients</h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
            {clientsdata.map((logo, idx) => (
            <ClientLogo key={idx} logo={logo} index={idx} />
            ))}
        </div>
        </section>
    );
};

export default Clients;
