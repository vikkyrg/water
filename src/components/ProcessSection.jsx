import React from 'react';
import { FcSearch, FcDataBackup, FcEmptyTrash, FcFlashOn, FcEngineering, FcApproval } from 'react-icons/fc';

export default function ProcessSection() {
  const steps = [
    { number: '01', title: 'Inspection', desc: 'Detailed assessment of tank condition.', icon: <FcSearch className="w-8 h-8" /> },
    { number: '02', title: 'Water Removal', desc: 'Draining the existing water safely.', icon: <FcDataBackup className="w-8 h-8" /> },
    { number: '03', title: 'Sludge Removal', desc: 'Clearing settled dirt and sludge.', icon: <FcEmptyTrash className="w-8 h-8" /> },
    { number: '04', title: 'High-Pressure Wash', desc: 'Washing walls with high-pressure jets.', icon: <FcFlashOn className="w-8 h-8" /> },
    { number: '05', title: 'Scrubbing', desc: 'Deep cleaning and scrubbing.', icon: <FcEngineering className="w-8 h-8" /> },
    { number: '06', title: 'Final Rinse', desc: 'Thorough rinsing for a clean finish.', icon: <FcApproval className="w-8 h-8" /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-style-a">
      {/* Massive Abstract Background Elements & Watermarks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Thematic Gear/Process Watermark */}
        <div className="absolute top-[20%] right-[-5%] text-secondary/10 transform rotate-45 scale-[5]">
          <svg width="240" height="240" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22l-1.92 3.32c-.12.21-.07.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        </div>
        
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-t from-secondary/10 to-transparent rounded-[100px] rotate-45 blur-[100px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h4 className="text-secondary font-bold tracking-[0.15em] uppercase text-xs mb-3">How It Works</h4>
          <h2 className="text-3xl lg:text-[44px] font-extrabold text-dark mb-6 leading-[1.2] tracking-tight">
            Our Cleaning Process
          </h2>
          <p className="text-gray-600 text-lg">
            A systematic and hygienic approach to ensure your water storage is perfectly clean.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="flex flex-col relative group bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50 hover:-translate-y-2 hover:shadow-xl hover:bg-white transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="text-[48px] font-extrabold text-primary/10 group-hover:text-primary transition-colors leading-none font-sans">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-gray-100">
                  {step.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-dark mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
