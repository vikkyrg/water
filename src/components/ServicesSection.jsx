import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../data/services';

export default function ServicesSection({ limit = false }) {
  const displayedServices = limit ? services.slice(0, 3) : services;

  return (
    <section className="py-24 relative bg-[#f8fafc] overflow-hidden">
      
      {/* Decorative Background Elements & Large Thematic Watermarks */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px]"></div>
        
        {/* Massive Water Drop Watermark */}
        <div className="absolute top-[15%] left-[5%] text-primary/10 transform -rotate-12 scale-[4]">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.5c-4.136 0-7.5-3.364-7.5-7.5 0-2.348 1.488-5.32 4.412-8.835L12 1.25l3.088 3.915c2.924 3.515 4.412 6.487 4.412 8.835 0 4.136-3.364 7.5-7.5 7.5zm0-18.158l-2.008 2.545C7.458 9.102 6 11.758 6 14c0 3.309 2.691 6 6 6s6-2.691 6-6c0-2.242-1.458-4.898-3.992-8.113L12 3.342z"/>
          </svg>
        </div>
        
        {/* Massive Shield/Hygiene Watermark */}
        <div className="absolute bottom-[10%] right-[2%] text-secondary/10 transform rotate-12 scale-[3]">
          <svg width="240" height="240" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm0 18.92c-4.12-1.12-7-5.4-7-10.42V7.4l7-3.11 7 3.11v3.5h-7v8.02z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px] relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h4 className="text-secondary font-bold tracking-[0.15em] uppercase text-xs mb-3">What We Do</h4>
          <h2 className="text-3xl lg:text-[44px] font-extrabold text-dark mb-6 leading-[1.2] tracking-tight">
            Our Cleaning Services
          </h2>
          <p className="text-gray-600 text-lg">
            We offer comprehensive high-pressure water tank and sump cleaning solutions designed to maintain the highest hygiene standards for your property.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-premium border border-gray-100 transition-all duration-300 group flex flex-col items-start text-left hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex-shrink-0 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-[22px] font-extrabold text-dark mb-3 group-hover:text-primary transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow text-[15px]">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Enquire Now <FaArrowRight className="text-sm" />
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
