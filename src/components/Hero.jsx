import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaChevronDown } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import heroImg from '../assets/images/hero/sump-cleaning-hero.jpg';
import bgTank from '../assets/images/about/about-page-main.jpg';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Uses Environment Variables for security. 
    // If not set in .env, it will fail gracefully or use placeholders.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const templateParams = {
      full_name: formData.name,
      phone_number: formData.phone,
      address: formData.address,
      service: formData.service,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', phone: '', address: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section 
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.65) 45%, rgba(255, 255, 255, 0) 100%), url(${bgTank})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* Decorative blurred shapes to enhance text readability on the left */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white rounded-full blur-[100px] pointer-events-none opacity-40 -translate-x-1/4 -translate-y-1/4"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-8">
          
          {/* Text Content (Left) */}
          <div className="w-full lg:w-[55%] space-y-8 lg:mt-10" data-aos="fade-right">
            <h1 className="text-[44px] md:text-5xl lg:text-[68px] font-extrabold text-dark leading-[1.1] tracking-tight">
              High Pressure <br className="hidden md:block" />
              <span className="text-primary">Sump & Tank</span> <br className="hidden md:block" />
              Cleaning Services
            </h1>
            
            <p className="text-lg md:text-xl text-gray-900 leading-relaxed max-w-lg font-semibold">
              Ensure your family's health with our 6-step deep cleaning process. We use advanced UV sterilization and high-pressure cleaning to remove 99.9% of bacteria.
            </p>
            
          </div>

          {/* Booking Form (Right) */}
          <div className="w-full lg:w-[40%] relative" data-aos="fade-left">
            <div className="bg-white/95 backdrop-blur-xl rounded-[32px] p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white">
              <h3 className="text-2xl font-extrabold text-dark mb-6 tracking-tight">Book Your Cleaning</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-gray-700 font-medium"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength="10"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    placeholder="Phone Number" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-gray-700 font-medium"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Address" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-gray-700 font-medium"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    placeholder="Service Required" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-gray-700 font-medium"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message (optional)" 
                    rows="3"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-gray-700 font-medium resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all mt-2 ${
                    status === 'success' ? 'bg-green-500 text-white shadow-green-500/30' : 
                    status === 'error' ? 'bg-red-500 text-white shadow-red-500/30' :
                    'bg-primary hover:bg-primary-dark text-white shadow-primary/30 hover:-translate-y-1'
                  } ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? 'Sending Request...' : 
                   status === 'success' ? 'Request Sent Successfully!' : 
                   status === 'error' ? 'Failed to Send. Try Again.' : 
                   'Book Service Now'}
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
