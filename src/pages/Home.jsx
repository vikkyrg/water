import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import LocationSection from '../components/LocationSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ProcessSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
