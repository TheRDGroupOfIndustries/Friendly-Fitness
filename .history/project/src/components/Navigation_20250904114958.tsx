import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/aboutus" },
  { label: "COURSES", to: "/courses" },
  { label: "SCHEDULE", to: "/schedule" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT US", to: "/contact" },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll when menu is open (optional, for better UX)
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    // <nav className="sticky top-0 z-50" style={{ backgroundColor: '#090E26' }}>
    <nav className="sticky top-0 z-50" style={{ backgroundColor: "#000" }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center space-x-2 sm:space-x-3 text-xl sm:text-2xl font-bold min-w-0">
            <img
              src={logo}
              alt="Fitness Revolution Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover flex-shrink-0"
            />
              <Link to="/">
             <span className="text-white truncate">Fitness </span>
             <span className="text-orange-500 truncate">Evolution</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm font-medium uppercase px-2 py-1 text-white hover:text-[#F97316] transition-colors focus:outline-none ${
                    isActive
                      ? "text-[#F97316] border-b-2 border-[#F97316] pb-1"
                      : ""
                  }`
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation + Overlay */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ${
            isMenuOpen ? "block" : "pointer-events-none"
          }`}
          aria-hidden={!isMenuOpen}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Slide-down menu */}
          <div
            className={`absolute top-0 left-0 w-full backdrop-blur-md shadow-lg transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } md:hidden pb-4 pt-2`}
            style={{ backgroundColor: "#090E26" }}
            role="menu"
          >
            <div className="flex flex-col space-y-2 px-4 pt-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }: { isActive: boolean }) =>
                    `block text-base font-medium uppercase px-3 py-3 text-white hover:text-[#F97316] transition-colors focus:outline-none ${
                      isActive
                        ? "text-[#F97316] border-b-2 border-[#F97316] pb-1"
                        : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end={item.to === "/"}
                  role="menuitem"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
