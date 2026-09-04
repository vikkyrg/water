import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`fixed w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            
            {/* Logo & Brand */}
            <Link to="/" className="flex items-center gap-3 lg:gap-4 group" onClick={() => { closeMenu(); window.scrollTo(0, 0); }}>
              <div className="relative overflow-hidden rounded-full p-1.5 bg-white shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                <img src={logo} alt="Sump & Tank Cleaning Services Logo" className="h-14 w-14 object-contain" />
              </div>
              <div>
                <h1 className="text-base sm:text-2xl font-extrabold text-primary leading-tight sm:leading-none tracking-tight">High Pressure Sump & Tank</h1>
                <h2 className="text-xs sm:text-[15px] font-semibold text-dark tracking-wide mt-0.5 sm:mt-1">Cleaning Services</h2>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <ul className="flex gap-10 text-dark font-semibold text-[17px]">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group">
                    <Link 
                      to={link.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`hover:text-primary transition-colors py-2 ${location.pathname === link.path ? 'text-primary' : ''}`}
                    >
                      {link.name}
                    </Link>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </li>
                ))}
              </ul>
              <a href="tel:7483338464" className="btn-primary gap-2 !py-2.5 !px-5 text-sm">
                <FaPhoneAlt className="text-xs" /> Call Now
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-2xl text-primary p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <div className={`md:hidden fixed inset-0 z-50 bg-navy/30 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}></div>
      <div className={`md:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <span className="font-extrabold text-dark text-lg">Menu</span>
          <button onClick={closeMenu} className="text-2xl text-gray-400 hover:text-primary transition-colors">
            <FaTimes />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col px-4">
            {navLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <Link 
                  to={link.path}
                  onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-dark hover:bg-light'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-light border-t border-gray-100">
          <a href="tel:7483338464" className="btn-primary w-full gap-2 justify-center">
            <FaPhoneAlt /> Call 7483338464
          </a>
        </div>
      </div>
    </>
  );
}
