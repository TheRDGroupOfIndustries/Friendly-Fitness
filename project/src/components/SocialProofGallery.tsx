import React from "react";
import testimonialImage1 from "../assets/testimonialImage1.jpg"
import testimonialImage2 from "../assets/testimonialImage2.jpg"
import testimonialImage3 from "../assets/testimonialImage3.jpg"
import testimonialImage4 from "../assets/testimonialImage4.jpg"
import testimonialImage5 from "../assets/testimonialImage5.jpg"


const chatScreenshots = [
  { id: 1, url: testimonialImage1 }, 
  { id: 2, url: testimonialImage2 },
  { id: 3, url: testimonialImage3 },
  { id: 4, url: testimonialImage4},
  { id: 5, url: testimonialImage5},
];

const SocialProofGallery = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          REAL <span className="text-orange-500">CONVERSATIONS</span>
        </h3>
        
        {/* Masonry-style columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {chatScreenshots.map((chat) => (
            <div 
              key={chat.id} 
              className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-md border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-gray-900"
            >
              <img 
                src={chat.url} 
                alt="Client Chat Feedback" 
                className="w-full h-80 object-cover"
              />
              {/* Subtle glassmorphism overlay on hover */}
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SocialProofGallery;