import React from "react";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div
      className="text-white py-2 sm:py-3 px-2 sm:px-4"
      // style={{ backgroundColor: "#090E26" }}
      style={{ backgroundColor: "#000" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto">
          {/* Logo and Brand removed */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Phone className="w-4 h-4 text-orange-500" />
            <span>123 1234 123</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Mail className="w-4 h-4 text-orange-500" />
            <span>Fitness@yourdomain.com</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 w-full sm:w-auto">
          <span className="text-gray-300 hidden sm:inline">Follow on</span>
          <div className="flex space-x-2">
            <LINK
            <button
              aria-label="Facebook"
              className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <Facebook className="w-4 h-4 text-black" />
            </button>
            <button
              aria-label="Instagram"
              className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <Instagram className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
      {/* Divider line between header and navigation */}
      <div className="w-full h-px bg-white mt-2" />
    </div>
  );
};

export default Header;
