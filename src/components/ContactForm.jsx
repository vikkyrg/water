import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
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
    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-dark"></div>
      
      <h3 className="text-2xl lg:text-3xl font-extrabold text-dark mb-8 tracking-tight">Send an Enquiry</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-[#DCE3EA] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 text-gray-800"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required
            maxLength="10"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-[#DCE3EA] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 text-gray-800"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">Address</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-[#DCE3EA] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 text-gray-800"
            placeholder="Your address"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Service Required</label>
          <input 
            type="text" 
            id="service" 
            name="service" 
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-[#DCE3EA] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 text-gray-800"
            placeholder="Service Required"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-[#DCE3EA] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 text-gray-800 resize-none"
            placeholder="Tell us about your requirement..."
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'loading' || status === 'success'}
          className={`w-full gap-3 mt-4 h-[56px] text-lg rounded-xl flex items-center justify-center font-bold transition-all duration-300 ${
            status === 'success' ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 
            status === 'error' ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' :
            'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30 hover:-translate-y-1'
          } ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {status === 'loading' ? (
            'Sending Request...'
          ) : status === 'success' ? (
            'Enquiry Sent Successfully!'
          ) : status === 'error' ? (
            'Failed to Send. Try Again.'
          ) : (
            <><FaPaperPlane /> Book Service Now</>
          )}
        </button>
      </form>
    </div>
  );
}
