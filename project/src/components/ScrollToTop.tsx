import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
      <button
      onClick={scrollToTop}
      className="
        fixed bottom-4 sm:bottom-6 md:bottom-8
        right-4 sm:right-6 md:right-8
        bg-orange-500 text-white
        p-3 sm:p-4 md:p-5
        rounded-full shadow-lg
        hover:bg-orange-600
        transition-all duration-300
        transform hover:scale-110
        z-50
      "
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
    </button>
      )}
    </>
  );
};

export default ScrollToTop;