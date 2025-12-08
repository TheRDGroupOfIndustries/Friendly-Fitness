import React, { useState } from "react";
import { Play, X } from "lucide-react";
import Img16 from "../assets/IMG-16.jpg";
import LocalVideo from "../assets/fitnessVideo1.mp4"; 

const VideoSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src={Img16}
            alt="Background"
            className="w-full h-full object-cover object-top"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
          />
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>

       
        <div className="relative z-20 text-center text-white px-4 sm:px-6 md:px-8">
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group mb-8 sm:mb-12 relative inline-flex items-center justify-center"
          >
            <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 shadow-2xl relative z-20">
              <Play className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-white ml-1" fill="currentColor" />
            </div>
            <div className="absolute inset-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-orange-500/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-orange-500/20 rounded-full animate-ping animation-delay-75"></div>
          </button>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8" style={{ color: "#fff" }}>
            EXPLORE LIFE FITNESS
          </h2>

          <button
            onClick={() => setIsVideoOpen(true)}
            className="bg-transparent border-2 border-white text-white px-8 sm:px-12 py-2 sm:py-4 rounded-full text-sm sm:text-lg md:text-xl font-semibold hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
          >
            WATCH NOW !
          </button>
        </div>

    
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 flex flex-col space-y-2">
          <div className="w-12 sm:w-16 h-1 bg-orange-500 transform -rotate-45"></div>
          <div className="w-8 sm:w-12 h-1 bg-orange-500 transform -rotate-45"></div>
        </div>
      </section>

    
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          
         
          <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">
            
           
            <button
              onClick={() => setIsVideoOpen(false)}
              className="self-end mb-4 text-white hover:text-orange-500 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

 
            <div className="w-full relative bg-black rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={LocalVideo}
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
