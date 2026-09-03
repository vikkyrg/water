import React from 'react';
import { FcEngineering, FcDonate, FcClock, FcOk } from 'react-icons/fc';

export default function TrustSection() {
  const trustItems = [
    {
      icon: <FcEngineering className="w-12 h-12" />,
      title: "EXPERIENCED TECHNICIANS"
    },
    {
      icon: <FcOk className="w-12 h-12" />,
      title: "ECO-FRIENDLY CLEANING SOLUTIONS"
    },
    {
      icon: <FcClock className="w-12 h-12" />,
      title: "NO DOWNTIME - FAST & EFFICIENT"
    },
    {
      icon: <FcDonate className="w-12 h-12" />,
      title: "AFFORDABLE PRICING"
    }
  ];

  return (
    <section className="py-20 relative bg-[#2A6DF5]">
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 flex flex-col items-center justify-center text-center gap-6 shadow-xl transition-transform hover:-translate-y-2 duration-300"
              style={{ borderRadius: '40px 0 40px 0' }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-dark font-extrabold text-sm lg:text-base uppercase tracking-wide leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
