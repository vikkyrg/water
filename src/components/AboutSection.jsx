import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import aboutImg from '../assets/images/about/sump-cleaning-about.jpg';

export default function AboutSection({ imageSrc }) {
  const finalImage = imageSrc || aboutImg;
  return (
    <section className="py-24 relative bg-style-a overflow-hidden">
      
      {/* Decorative Background Elements & Thematic Watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Water Drop Watermark */}
        <div className="absolute top-10 left-10 text-primary/5 transform -rotate-12 scale-[3]">
          <svg width="240" height="240" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.5c-4.136 0-7.5-3.364-7.5-7.5 0-2.348 1.488-5.32 4.412-8.835L12 1.25l3.088 3.915c2.924 3.515 4.412 6.487 4.412 8.835 0 4.136-3.364 7.5-7.5 7.5zm0-18.158l-2.008 2.545C7.458 9.102 6 11.758 6 14c0 3.309 2.691 6 6 6s6-2.691 6-6c0-2.242-1.458-4.898-3.992-8.113L12 3.342z"/>
          </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="rounded-[24px] overflow-hidden shadow-premium aspect-square lg:aspect-auto lg:h-[540px] relative z-10 group">
              <img 
                src={finalImage} 
                alt="Professional Tank Cleaning" 
                className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full z-0 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-[30px] z-0 transform rotate-12 blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h4 className="text-secondary font-bold tracking-[0.15em] uppercase text-xs mb-3">About Us</h4>
            <h2 className="text-3xl lg:text-[44px] font-extrabold text-dark mb-6 leading-[1.2] tracking-tight">
              Reliable Sump & Tank Cleaning Services
            </h2>
            
            <div className="space-y-5 text-gray-600 text-lg mb-10">
              <p>
                Based in Bengaluru, we specialize in providing professional and thorough cleaning services for water tanks and underground sumps. We understand that clean water storage is essential for health and hygiene.
              </p>
              <p>
                Using modern high-pressure cleaning equipment, we remove dirt, sludge, algae, and bacteria from your residential or commercial water tanks. Our focus is always on customer satisfaction, deep cleaning, and leaving you with a hygienic water storage system.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <li className="flex items-center gap-3 text-dark font-bold">
                <FaCheckCircle className="text-secondary text-xl flex-shrink-0" /> Clean Water Storage
              </li>
              <li className="flex items-center gap-3 text-dark font-bold">
                <FaCheckCircle className="text-secondary text-xl flex-shrink-0" /> Professional Equipment
              </li>
              <li className="flex items-center gap-3 text-dark font-bold">
                <FaCheckCircle className="text-secondary text-xl flex-shrink-0" /> Thorough Cleaning
              </li>
              <li className="flex items-center gap-3 text-dark font-bold">
                <FaCheckCircle className="text-secondary text-xl flex-shrink-0" /> High-Pressure Process
              </li>
            </ul>

            <Link to="/about" className="btn-primary gap-3 inline-flex group !px-8 !py-4 text-base">
              Learn More 
              <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
