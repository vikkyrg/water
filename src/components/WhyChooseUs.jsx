import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import whyChooseUsImg from '../assets/images/why-choose-us/professional-cleaning-equipment.jpg';
import bgNavy from '../assets/images/backgrounds/bg-navy.jpg';

export default function WhyChooseUs() {
  const reasons = [
    "Professional Cleaning Process",
    "High-Pressure Cleaning Technology",
    "Hygienic Approach & Safe Methods",
    "Residential & Commercial Service",
    "Convenient Booking via WhatsApp or Call",
    "Local Bengaluru Service Team",
    "Customer-Focused Service Delivery"
  ];

  return (
    <section className="py-24 bg-light text-gray-700 relative overflow-hidden">
      {/* Subtle Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04]" 
        style={{
          backgroundImage: `url(${bgNavy})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div data-aos="fade-right">
            <h3 className="text-secondary font-extrabold uppercase tracking-widest text-sm mb-4">Why Choose Us?</h3>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-dark mb-10 leading-[1.1] tracking-tight">
              Professional Cleaning You Can Rely On
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-white shadow-sm p-1 rounded-full text-secondary flex-shrink-0 border border-gray-100">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <p className="font-semibold text-gray-700 leading-tight pt-1">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full" data-aos="fade-left" data-aos-delay="200">
            <div className="relative rounded-[20px] overflow-hidden shadow-premium border border-white/10 group">
               <img 
                  src={whyChooseUsImg} 
                  alt="Quality Service" 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
