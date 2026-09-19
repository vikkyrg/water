import React from 'react';
import img1 from '../assets/images/gallery/sump-cleaning.jpg';
import img2 from '../assets/images/gallery/water-tank-cleaning.jpg';
import img3 from '../assets/images/gallery/clean-water-storage.jpg';
import img4 from '../assets/images/gallery/high-pressure-cleaning.jpg';
import img5 from '../assets/images/gallery/1.jpeg';
import img6 from '../assets/images/gallery/2.jpeg';
import img7 from '../assets/images/gallery/3.jpeg';
import img8 from '../assets/images/gallery/4.jpeg';
import img9 from '../assets/images/gallery/5.jpeg';

export default function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      image: img1,
      title: "Underground Sump Cleaning",
      category: "Sump Cleaning",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2"
    },
    {
      id: 2,
      image: img4,
      title: "High-Pressure Wash",
      category: "Process",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      id: 3,
      image: img2,
      title: "Overhead Tank Cleaning",
      category: "Tank Cleaning",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      id: 4,
      image: img3,
      title: "Clean Water Results",
      category: "Quality Assurance",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1"
    },
    {
      id: 5,
      image: img5,
      title: "Professional Equipment",
      category: "Tools",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-2"
    },
    {
      id: 6,
      image: img6,
      title: "Deep Scrubbing",
      category: "Process",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1"
    },
    {
      id: 7,
      image: img7,
      title: "Hygienic Standards",
      category: "Quality",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      id: 8,
      image: img8,
      title: "Expert Team",
      category: "Service",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      id: 9,
      image: img9,
      title: "Spotless Finish",
      category: "Results",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FAFCFF]">
      {/* Massive Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-secondary/10 via-secondary/5 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-70"></div>
        {/* Fine dotted texture overlay */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h4 className="text-secondary font-bold tracking-[0.15em] uppercase text-xs mb-3">Our Work</h4>
          <h2 className="text-3xl lg:text-[44px] font-extrabold text-dark mb-6 leading-[1.2] tracking-tight">
            Professional Cleaning in Action
          </h2>
          <p className="text-gray-600 text-lg">
            See how we clean and restore water storage systems to ensure the highest standards of hygiene and safety for your family or business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative rounded-2xl overflow-hidden group shadow-sm ${item.colSpan} ${item.rowSpan}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-[#0a192f]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary/20 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-3 w-fit border border-white/20">
                  {item.category}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-white drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
