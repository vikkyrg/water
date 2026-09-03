import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import aboutPageImg from '../assets/images/about/about-page-main.jpg';

export default function About() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="bg-primary py-16 text-center" data-aos="fade-down">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Us</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto px-4">
          Learn more about Bengaluru's trusted sump and tank cleaning experts.
        </p>
      </div>
      
      <AboutSection imageSrc={aboutPageImg} />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
