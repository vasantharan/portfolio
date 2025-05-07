import React, { useRef, useEffect } from "react";
import contactData from "../data/contacts";
import cphoto from "../assets/photos/contact.jpg";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact = () => {
  const emailData = contactData.find((item) => item.type === "email");
  const locationData = contactData.find((item) => item.type === "location");
  const socialLinks = contactData.filter(
    (item) => item.type !== "email" && item.type !== "location"
  );

  // Image scroll in/out motion setup
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { threshold: 0.3 });
  const imageControls = useAnimation();

  // Content scroll in/out motion setup
  const contentRef = useRef(null);
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
    <section id="contact" className="pt-20 px-4 pb-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <div className="max-w-2xl mx-auto flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden">
        {/* Left Side (Photo) */}
        <motion.div
          ref={imageRef}
          animate={imageControls}
          initial={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3 pt-2 w-full flex items-center justify-center"
        >
          <img
            src={cphoto}
            alt="Contact"
            className="w-28 h-28 cursor-pointer object-cover object-scale-down rounded-full border-4 border-gray-300 hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] hover:outline-none outline-4 outline-gray-300 transition-all ease-in-out"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          ref={contentRef}
          animate={contentControls}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="md:w-auto w-full p-4 flex flex-col items-center md:items-start justify-center gap-4"
        >
          {/* Social Icons */}
          <div className="flex gap-4 flex-wrap">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.content}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.logo}
                  alt={item.type}
                  className="w-12 h-12 object-contain hover:scale-110 hover:bg-transparent transition-all ease-in-out duration-200"
                />
              </a>
            ))}
          </div>

          {/* Email Row */}
          {emailData && (
            <div className="flex items-center gap-3 text-lg whitespace-nowrap">
              <img
                src={emailData.logo}
                alt="email"
                className="w-6 h-6 object-contain hover:bg-transparent transition-all ease-in-out"
              />
              <span>{emailData.content}</span>
            </div>
          )}

          {/* Location Row */}
          {locationData && (
            <div className="flex items-center gap-3 text-lg">
              <img
                src={locationData.logo}
                alt="location"
                className="w-6 h-6 object-contain hover:bg-transparent transition-all ease-in-out"
              />
              <span>{locationData.content}</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
