import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Trophy, Users, Dumbbell } from "lucide-react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import PhoneScreen from "../assets/images/PhoneScreen.jpeg";

// Note: The original relative import for PhoneScreen has been replaced with a placeholder URL 
// to ensure the component is self-contained and runnable in a single file environment.

const FitnessAppPromo = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handler for the "Join the family" button
  const handleJoin = () => {
    if (phoneNumber.length > 5) {
      console.log(`Sending download link to: ${phoneNumber}`);
      // In a real app, you would integrate a backend service here
    } else {
      console.log("Please enter a valid phone number.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible font-inter">
      {/* Load Tailwind CSS from CDN for styling consistency */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
          /* Custom style to ensure the interactive elements are touch-friendly */
          button, a {
            min-height: 48px;
            min-width: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />


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
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              />
              <button 
                onClick={handleJoin}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black/50 whitespace-nowrap"
              >
                Join the family
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Google Play Button - Now a link */}
              <a
                href="https://play.google.com/store/apps/details?id=com.fitness.evolution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white px-6 py-3 rounded-lg border border-white/20 transition-all duration-300 transform hover:scale-105 "
              >
                <IoLogoGooglePlaystore
                  className="w-8 h-8"
                  fill="currentColor"
                />
                <div className="text-left">
                  <div className="text-xs text-gray-300">ANDROID APP ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>

              {/* App Store Button - Now a link with sm:-ml-2 for left shift */}
              <a
                href="https://apps.apple.com/in/app/fitness-evolution/id6747019076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white px-6 py-3 rounded-lg border border-white/20 transition-all duration-300 transform hover:scale-105 sm:-ml-2 lg:ml-9"
              >
                <FaApple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
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
                   src={PhoneScreen}
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
