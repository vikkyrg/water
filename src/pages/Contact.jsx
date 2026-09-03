import React from 'react';
import ContactForm from '../components/ContactForm';
import LocationSection from '../components/LocationSection';

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="bg-primary py-16 text-center" data-aos="fade-down">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto px-4">
          Get in touch for professional high-pressure sump and tank cleaning services in Bengaluru.
        </p>
      </div>

      {/* Main Content */}
      <section className="py-20 relative bg-style-b overflow-hidden">
        {/* Abstract floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-3/5" data-aos="fade-right">
              <ContactForm />
            </div>
            <div className="w-full lg:w-2/5 flex flex-col gap-8" data-aos="fade-left">
              <LocationSection />
              
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Monday - Saturday:</span>
                    <span className="font-semibold text-dark">8:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span>Sunday:</span>
                    <span className="font-semibold text-secondary">Available on request</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
