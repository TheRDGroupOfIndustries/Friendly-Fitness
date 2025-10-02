// import React from 'react';
// import { Facebook, Instagram, Send,Linkedin } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="relative bg-black text-white pt-16 sm:pt-24 pb-10 sm:pb-16 overflow-hidden">
//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 flex flex-col items-center">
//         {/* Logo */}
//         <div className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center w-full">
//           <span className="text-orange-500">Fitness</span>
//           <span className="text-white"> Evolution</span>
//         </div>
//         {/* Nav Links */}
//         <nav className="w-full flex flex-col sm:flex-row justify-center mb-6 sm:mb-8">
//           <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center w-full border-b-2 border-orange-500 pb-2">
//             {['HOME', 'ABOUT US', 'COURSES', 'SCHEDULE', 'BLOG', 'CONTACT US'].map((link, idx) => (
//               <li key={link} className="mx-0 sm:mx-4 my-1 sm:my-0 text-base sm:text-lg font-semibold">
//                 <a href="#" className="hover:text-orange-500 transition-colors block px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-500">{link}</a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {/* Newsletter */}
//         <div className="w-full flex flex-col items-center mb-6 sm:mb-8">
//           <form className="flex flex-col sm:flex-row w-full max-w-md gap-2 sm:gap-0">
//             <input
//               type="email"
//               placeholder="ENTER YOUR EMAIL"
//               className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-none border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none text-sm sm:text-base"
//             />
//             <button type="submit" className="bg-transparent border-2 border-orange-500 text-orange-500 px-4 sm:px-6 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 mt-2 sm:mt-0 rounded">
//               <Send className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
//           </form>
//         </div>
//         {/* Social Links */}
//         <div className="text-center mb-4 sm:mb-6 w-full">
//           <div className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">FOLLOW US ON</div>
//           <div className="flex justify-center space-x-4 sm:space-x-6">
//             <a href="https://www.facebook.com/profile.php?id=100068319542606#" aria-label="Facebook" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500">
//               <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
//             </a>
//             <a href="https://www.linkedin.com/company/the-fitness-evolution-app" aria-label="Twitter" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500">
//               <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
//             </a>
//             <a href="https://www.instagram.com/fitness_evolution7244/" aria-label="Instagram" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500">
//               <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
//             </a>
//           </div>
//         </div>
//         {/* Copyright */}
//         <div className="text-center text-gray-300 text-xs sm:text-sm mt-4 sm:mt-6 w-full">
//           © 2025 FITNESS EVOLUTION. ALL RIGHTS RESERVED
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  

  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold">
                <span className="text-orange-500">Fitness</span>
                <span className="text-white"> Evolution</span>
              </h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your body and mind with our expert-led fitness programs.
              Join thousands who've achieved their fitness goals with us.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
                <span className="text-sm">+91-931-980-4497</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
                <span className="text-sm">fitnessevolution108@gmail.com</span>
  ,            </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 mb-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutus" },
                { name: "Courses", path: "/courses" },
                { name: "Testimonial", path: "/testimonial" },
                { name: "Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Our Services
            </h3>
            <ul className="space-y-3 mb-2">
              {[
                "CrossFit",
                "Kettlebell Workout",
                "Strength Training",
                "Meditation",
                "Recovery",
                "Pranayam",
                "Hatha Yoga",
                "HIIT",
                "Functional Workout",
                "Indoor Cardio",
                "Body Movements",
                "Fat loss/ weight loss",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/courses"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for fitness tips, workout plans, and
              exclusive offers.
            </p>
            {/* Newsletter Signup */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm"
                />
                <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Facebook,
                    link: "https://www.facebook.com/profile.php?id=100068319542606",
                  },
                  {
                    icon: Instagram,
                    link: "https://www.instagram.com/fitness_evolution7244/",
                  },
                  {
                    icon: Linkedin,
                    link: "https://www.linkedin.com/company/the-fitness-evolution-app",
                  },
                ].map(({ icon: Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    aria-label="Social Link"
                    className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download Apps */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-white">
                Download Our App
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fitness.evolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-40 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="w-full h-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/fitness-evolution/id6747019076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-40 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="w-full h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Fitness Evolution. All rights reserved.
            </div>
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link
                to="/privacypolicy"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="t&c"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
