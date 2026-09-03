import React from 'react';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';

export default function Services() {
  return (
    <div className="pt-24">
      <div className="bg-primary py-16 text-center" data-aos="fade-down">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto px-4">
          Professional sump and water tank cleaning solutions for every requirement.
        </p>
      </div>
      
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
