import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/aboutus" },
  { label: "COURSES", to: "/courses" },
  { label: "TESTIMONIAL", to: "/testimonial" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT US", to: "/contact" },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="Fitness Revolution Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover"
            />
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Fitness <span className="text-orange-500">Evolution</span>
            </h1>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-sm lg:text-base font-medium uppercase text-white transition-all hover:text-[#F97316] ${
                    isActive
                      ? "text-[#F97316] border-b-2 border-[#F97316] pb-1"
                      : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background Blur */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Slide-down Menu */}
        <div
          className={`absolute top-0 left-0 w-full bg-[#090E26] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col space-y-3 px-4 pt-4 pb-6">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `block text-base font-medium uppercase text-white px-3 py-2 rounded-md transition-colors hover:text-[#F97316] ${
                    isActive
                      ? "text-[#F97316] border-b-2 border-[#F97316]"
                      : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
