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
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${gymBackgrounds[current]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 sm:bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Fitness </span>
            <span className="text-orange-500">Revolution</span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white">
              FOR ATHLETIC WOMEN
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We Offer Hardcore Strength Machines, Curve Treadmills, Boxing
            Studio, TRX, And Spinning.
          </motion.p>

          <motion.button
            className="bg-transparent border-2 border-white text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/courses" className="hover:text-white">
              JOIN NOW
            </Link>
          </motion.button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {gymBackgrounds.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              current === idx ? "bg-orange-500" : "bg-white/50"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>

      {/* Side Text */}
      <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div
          className="text-white/30 text-xs sm:text-sm font-light tracking-wider transform rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          PREV
        </div>
      </div>

      <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div
          className="text-white/30 text-xs sm:text-sm font-light tracking-wider"
          style={{ writingMode: "vertical-rl" }}
        >
          NEXT
        </div>
      </div>

      {/* Slanting white divider at the bottom */}
      <div className="absolute left-0 bottom-0 w-full h-24 sm:h-28 z-20 pointer-events-none">
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
