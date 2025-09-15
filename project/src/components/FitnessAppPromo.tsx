import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Trophy, Users, Dumbbell } from "lucide-react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const FitnessAppPromo: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Main Content with overall fade and slide animation */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Content */}
        <div className="text-white space-y-8">
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white" id="title">
              Fitness{" "}
            </span>
            <span className="text-orange-500">Revolution</span>
            <br />
            <span className="text-3xl md:text-4xl font-normal text-white">
              FOR ATHLETIC WOMEN
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            With Fitness Evolution App you can manage your fitness journey at
            your fingertips. Ease of booking classes, tracking workouts, and
            monitoring your progress.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4 max-w-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-orange-500" />
              <span className="text-gray-200">Book Classes</span>
            </div>
            <div className="flex items-center space-x-3">
              <Dumbbell className="w-6 h-6 text-orange-500" />
              <span className="text-gray-200">Track Workouts</span>
            </div>
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-orange-500" />
              <span className="text-gray-200">Monitor Progress</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-orange-500" />
              <span className="text-gray-200">Join Community</span>
            </div>
          </motion.div>

          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-gray-200 mb-4 text-lg">
              Get the link to download the app
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your Phone number"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black/50 whitespace-nowrap">
                Join the family
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center space-x-3 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white px-6 py-3 rounded-lg border border-white/20 transition-all duration-300 transform hover:scale-105">
                <IoLogoGooglePlaystore
                  className="w-8 h-8"
                  fill="currentColor"
                />
                <div className="text-left">
                  <div className="text-xs text-gray-300">ANDROID APP ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>

              <button className="flex items-center space-x-3 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white px-6 py-3 rounded-lg border border-white/20 transition-all duration-300 transform hover:scale-105">
                <FaApple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative flex items-center justify-center">
            {/* Phone Frame */}
            <div className="w-72 h-[620px] bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] shadow-2xl relative border-[3px] border-gray-700 overflow-hidden">
              {/* Side Buttons */}
              <div className="absolute top-28 -left-1 w-1.5 h-14 bg-gray-600 rounded-r-lg shadow-md"></div>
              <div className="absolute top-44 -left-1 w-1.5 h-24 bg-gray-700 rounded-r-lg shadow-md"></div>
              <div className="absolute top-32 -right-1 w-2 h-8 bg-gray-600 rounded-l-lg shadow-md"></div>

              {/* Inner Bezel */}
              <div className="absolute inset-1 rounded-[2.6rem] bg-black overflow-hidden shadow-inner">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-3xl flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></div>{" "}
                  {/* Camera */}
                  <div className="w-6 h-2 bg-gray-600 rounded-lg"></div>{" "}
                  {/* Speaker */}
                </div>

                {/* Phone Screen */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Phone screen content"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Bottom Port (Speaker/Charger) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FitnessAppPromo;
