import { motion } from "framer-motion";
import Techstack from "../freelancer_page/components/Techstack";
import Team from "../freelancer_page/components/Team";

const Freelancing = () => {
    return (
        <div>
            <div className="relative min-h-screen flex items-center justify-center bg-transparent text-white">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-2xl px-6"
                >
            
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        🚀 Freelance Portfolio
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-6">
                        This page is <span className="text-cyan-400">under development</span>.  
                        Stay tuned for exciting updates!
                    </p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-xl md:text-2xl font-semibold text-cyan-400 mb-8"
                    >
                        “Ideas → Code → Impact”
                    </motion.p>

                    {/* Contact Email */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="text-lg md:text-xl"
                    >
                        <span className="text-white">Reach me now through: </span>
                        <span className="text-cyan-400">vasantharank.work@gmail.com</span>
                    </motion.p>
                </motion.div>
            </div>
            <p>Hero</p>
            <p>Services</p>
            <Techstack/>
            <p>Clients</p>
            <p>Testimonials</p>
            <Team/>
            <p>Enquire</p>
        </div>
    );
};

export default Freelancing;
