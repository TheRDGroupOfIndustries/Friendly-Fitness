import React from 'react';
import { Facebook, Twitter, Instagram, Send,Linkedin } from 'lucide-react';
import Img2 from '../assets/IMG-2.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white pt-16 sm:pt-24 pb-10 sm:pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden z-0">
        <img 
          src={Img2} 
          alt="Footer Background" 
          className="w-full h-full object-contain bg-black" 
          style={{position: 'absolute', inset: 0, zIndex: 0}}
        />
        <div className="absolute inset-0 bg-black/80" style={{zIndex: 1}}></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center w-full">
          <span className="text-orange-500">Fitness</span>
          <span className="text-white"> Evolution</span>
        </div>
        {/* Nav Links */}
        <nav className="w-full flex flex-col sm:flex-row justify-center mb-6 sm:mb-8">
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center w-full border-b-2 border-orange-500 pb-2">
            {['HOME', 'ABOUT US', 'COURSES', 'SCHEDULE', 'BLOG', 'CONTACT US'].map((link, idx) => (
              <li key={link} className="mx-0 sm:mx-4 my-1 sm:my-0 text-base sm:text-lg font-semibold">
                <a href="#" className="hover:text-orange-500 transition-colors block px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-500">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Newsletter */}
        <div className="w-full flex flex-col items-center mb-6 sm:mb-8">
          <form className="flex flex-col sm:flex-row w-full max-w-md gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-none border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none text-sm sm:text-base"
            />
            <button type="submit" className="bg-transparent border-2 border-orange-500 text-orange-500 px-4 sm:px-6 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 mt-2 sm:mt-0 rounded">
              <Send className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </form>
        </div>
        {/* Social Links */}
        <div className="text-center mb-4 sm:mb-6 w-full">
          <div className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">FOLLOW US ON</div>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href="https://www.facebook.com/profile.php?id=100068319542606#" aria-label="Facebook" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </a>
            <a href="https://www.instagram.com/fitness_evolution7244/" aria-label="Instagram" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-300 text-xs sm:text-sm mt-4 sm:mt-6 w-full">
          © 2025 FITNESS EVOLUTION. ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;