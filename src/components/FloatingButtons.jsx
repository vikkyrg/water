import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 pointer-events-none items-center">
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`pointer-events-auto bg-gray-800 hover:bg-gray-900 text-white rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] shadow-premium hover:shadow-2xl transition-all duration-300 hover:scale-[1.08] flex items-center justify-center mb-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg md:text-xl" />
      </button>

      {/* Call Button */}
      <a 
        href="tel:7483338464" 
        className="pointer-events-auto bg-primary hover:bg-primary-dark text-white rounded-full w-[50px] h-[50px] md:w-[56px] md:h-[56px] shadow-premium hover:shadow-2xl transition-all duration-300 hover:scale-[1.08] flex items-center justify-center"
        aria-label="Call Us"
      >
        <FaPhoneAlt className="text-xl md:text-2xl" />
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/917483338464" 
        target="_blank" 
        rel="noopener noreferrer"
        className="pointer-events-auto bg-secondary hover:bg-secondary-dark text-white rounded-full w-[50px] h-[50px] md:w-[56px] md:h-[56px] shadow-premium hover:shadow-2xl transition-all duration-300 hover:scale-[1.08] flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </a>

    </div>
  );
}
