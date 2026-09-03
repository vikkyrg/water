import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import bgCta from '../assets/images/backgrounds/bg-cta.jpg';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-[#004f8f] relative overflow-hidden">
      {/* Subtle Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-10 mix-blend-overlay" 
        style={{ 
          backgroundImage: `url(${bgCta})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary blur-[120px] transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center" data-aos="zoom-in">
        <h2 className="text-4xl lg:text-[52px] font-extrabold text-white mb-6 leading-tight tracking-tight">
          Need Your Sump or Water Tank Cleaned?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
          Contact us today to enquire about professional sump and tank cleaning services in Bengaluru. We guarantee a clean, hygienic result.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5" data-aos="fade-up" data-aos-delay="200">
          <a 
            href="tel:7483338464" 
            className="bg-white text-primary hover:bg-gray-50 font-bold py-4 px-8 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto justify-center text-lg"
          >
            <FaPhoneAlt /> Call 7483338464
          </a>
          <a 
            href="https://wa.me/917483338464" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-secondary text-white hover:bg-secondary-dark font-bold py-4 px-8 rounded-2xl shadow-[0_0_30px_rgba(32,199,106,0.3)] hover:shadow-[0_0_40px_rgba(32,199,106,0.5)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto justify-center text-lg"
          >
            <FaWhatsapp className="text-2xl" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
