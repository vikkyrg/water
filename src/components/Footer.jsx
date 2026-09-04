import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 pt-16 pb-8 border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden">
      
      {/* Subtle brand color accents matching website */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      {/* Container matching rest of site */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 mb-12">
          
          {/* Column 1 – Company */}
          <div className="flex flex-col lg:col-span-4 xl:col-span-4">
            <div className="flex items-center mb-6 lg:mb-1 lg:-mt-4 lg:-ml-2">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm flex-shrink-0 group-hover:shadow-md transition-shadow">
                  <img src={logo} alt="High Pressure Sump & Tank Logo" className="w-14 h-14 object-contain" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg lg:text-[22px] font-bold text-dark leading-tight group-hover:text-primary transition-colors whitespace-nowrap">High Pressure Sump & Tank</h3>
                  <h4 className="text-[14px] font-semibold text-primary mt-1 tracking-wide">Cleaning Services</h4>
                </div>
              </Link>
            </div>
            <p className="text-gray-600 leading-loose text-[15px] pr-2">
              Professional, hygienic, and reliable high-pressure sump and water tank cleaning services in Bengaluru. We guarantee safe results for residential, commercial, and industrial properties.
            </p>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="flex flex-col lg:col-span-2">
            <h4 className="text-xl font-bold text-dark tracking-tight mb-6 lg:mb-10">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-300">Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-300">About Us</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-300">Services</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 – Our Services */}
          <div className="flex flex-col lg:col-span-2">
            <h4 className="text-xl font-bold text-dark tracking-tight mb-6 lg:mb-10">Our Services</h4>
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-gray-600">
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-300">Sump Cleaning</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-300">Water Tank Cleaning</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-300">Residential Cleaning</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-300">Commercial Cleaning</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-300">High-Pressure Wash</Link></li>
            </ul>
          </div>

          {/* Column 4 – Contact Information */}
          <div className="flex flex-col lg:col-span-4">
            <h4 className="text-xl font-bold text-dark tracking-tight mb-6 lg:mb-10">Contact Info</h4>
            <ul className="flex flex-col gap-5 text-[15px] font-medium text-gray-600">
              <li className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0 text-base group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">Varthur Madhura Nagar 2nd Stage,<br />1st Main, Madhuranagara,<br />Bengaluru, Karnataka 560087</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaPhoneAlt className="text-primary flex-shrink-0 text-base group-hover:scale-110 transition-transform" />
                <a href="tel:7483338464" className="hover:text-primary font-bold text-dark transition-colors">+9174833 38464</a>
              </li>
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="text-primary flex-shrink-0 text-base group-hover:scale-110 transition-transform" />
                <a href="mailto:highpressuresumptankcleaningse@gmail.com" className="hover:text-primary font-bold text-dark transition-colors tracking-tight text-[13px] sm:text-[14px] break-all sm:break-normal">highpressuresumptankcleaningse@gmail.com</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6 flex flex-col items-center justify-center gap-2 text-gray-500 text-sm text-center font-medium">
          <p>&copy; {currentYear} Sump & Tank Cleaning Services. All Rights Reserved.</p>
          <p>
            Developed by <a href="https://www.innomatricstech.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:text-primary-dark transition-colors">Innomatrics Technologies</a>
          </p>
        </div>
        
      </div>
    </footer>
  );
}
