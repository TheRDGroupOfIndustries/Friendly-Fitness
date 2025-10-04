import React, { useState } from "react";
import { Play, X } from "lucide-react";
import Img16 from "../assets/IMG-16.jpg";

const VideoSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src={Img16}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
          />
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 md:px-8">
          {/* Play Button */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group mb-8 sm:mb-12 relative inline-flex items-center justify-center"
          >
            <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 shadow-2xl relative z-20">
              <Play className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white ml-1" fill="currentColor" />
            </div>

            {/* Pulse animation */}
            <div className="absolute inset-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-orange-500/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-orange-500/20 rounded-full animate-ping animation-delay-75"></div>
          </button>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8" style={{ color: "#fff" }}>
            EXPLORE LIFE FITNESS
          </h2>

          {/* CTA Button */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="bg-transparent border-2 border-white text-white px-8 sm:px-12 py-2 sm:py-4 rounded-full text-sm sm:text-lg md:text-xl font-semibold hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
          >
            WATCH NOW !
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 flex flex-col space-y-2">
          <div className="w-12 sm:w-16 h-1 bg-orange-500 transform -rotate-45"></div>
          <div className="w-8 sm:w-12 h-1 bg-orange-500 transform -rotate-45"></div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-orange-500 transition-colors"
            >
              <X className="w-6 sm:w-8 h-6 sm:h-8" />
            </button>

            {/* Video Container */}
            <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Fitness Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
