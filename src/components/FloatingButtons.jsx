import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 pointer-events-none">
      
      {/* Call Button (Top) */}
      <a 
        href="tel:7483338464" 
        className="pointer-events-auto bg-primary hover:bg-primary-dark text-white rounded-full w-[50px] h-[50px] md:w-[56px] md:h-[56px] shadow-premium hover:shadow-2xl transition-all duration-300 hover:scale-[1.08] flex items-center justify-center"
        aria-label="Call Us"
      >
        <FaPhoneAlt className="text-xl md:text-2xl" />
      </a>

      {/* WhatsApp Button (Bottom) */}
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
