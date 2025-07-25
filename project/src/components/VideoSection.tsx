import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import Img16 from '../assets/IMG-16.jpg';

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
            className="w-full h-full object-contain bg-black" 
            style={{position: 'absolute', inset: 0, zIndex: 0}}
          />
          <div className="absolute inset-0 bg-black/70" style={{zIndex: 1}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          {/* Play Button */}
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="group mb-12 relative"
          >
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 shadow-2xl">
              <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
            </div>
            
            {/* Pulse animation */}
            <div className="absolute inset-0 w-24 h-24 bg-orange-500/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-24 h-24 bg-orange-500/20 rounded-full animate-ping animation-delay-75"></div>
          </button>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            EXPLORE LIFE FITNESS
          </h2>

          {/* CTA Button */}
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
          >
            WATCH NOW !
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-8 left-8">
          <div className="w-16 h-1 bg-orange-500 transform -rotate-45 mb-4"></div>
          <div className="w-12 h-1 bg-orange-500 transform -rotate-45"></div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
            >
              <X className="w-8 h-8" />
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