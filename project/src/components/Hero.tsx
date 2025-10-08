import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const gymBackgrounds = [
  "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gymBackgrounds.length);
    }, 4000); // Change every 4 seconds for smoother transitions
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with transition */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[1200ms] ease-in-out"
        style={{
          backgroundImage: `url(${gymBackgrounds[current]})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-snug sm:leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">Fitness </span>
          <span className="text-orange-500">Evolution</span>
          <br />
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-200">
            For Every Individual
          </span>
        </motion.h1>

        <motion.p
          className="text-xs sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
       We offer personalized fitness coaching, online training sessions, and holistic wellness programs designed to transform your body, mindset, and lifestyle wherever you are. </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/courses"
            className="inline-block border-2 border-white text-white px-6 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            JOIN NOW
          </Link>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {gymBackgrounds.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              current === idx ? "bg-orange-500 scale-110" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>

      {/* Vertical Text for Large Screens */}
      <div className="hidden lg:flex flex-col items-center absolute left-6 top-1/2 -translate-y-1/2 text-white/40">
        <span
          className="text-sm tracking-wider rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          PREV
        </span>
      </div>
      <div className="hidden lg:flex flex-col items-center absolute right-6 top-1/2 -translate-y-1/2 text-white/40">
        <span
          className="text-sm tracking-wider"
          style={{ writingMode: "vertical-rl" }}
        >
          NEXT
        </span>
      </div>

      {/* Slanted Divider at Bottom */}
      <div className="absolute left-0 bottom-0 w-full h-20 sm:h-28 z-20 pointer-events-none">
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <polygon fill="white" points="0,10 100,1 100,10 0,10" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
