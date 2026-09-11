import React from "react";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

export default function LocationSection() {
  // General Madhura Nagar / Varthur area
  // This is the service area, not an exact business building location.
  const latitude = 12.94093;
  const longitude = 77.75930;

  // Google Maps directions to the general area
  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full relative overflow-hidden flex flex-col">

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-secondary-dark"></div>

      {/* Heading */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-sm">
          <FaMapMarkerAlt className="text-2xl" />
        </div>

        <h3 className="text-[28px] font-extrabold text-dark tracking-tight">
          Our Location
        </h3>
      </div>

      {/* Address */}
      <div className="space-y-6 mb-8 flex-grow">
        <address className="not-italic text-gray-700 text-lg leading-relaxed">

          <strong className="text-dark font-extrabold text-xl block mb-2">
            High Pressure Sump & Tank Cleaning Services
          </strong>

          <span className="text-primary font-bold block mb-1">
            Proprietor: Suresh
          </span>

          <a href="mailto:
highpressuresumptankcleaning@gmail.com" className="text-gray-600 hover:text-primary font-medium block mb-4 transition-colors text-sm sm:text-base tracking-tight whitespace-nowrap">

            highpressuresumptankcleaning@gmail.com
          </a>

          <div className="pl-4 border-l-4 border-primary/20 bg-primary/5 p-4 rounded-r-lg">
            Varthur Madhura Nagar 2nd Stage,
            <br />
            1st Main, Madhuranagara,
            <br />
            Bengaluru, Karnataka 560087
          </div>

        </address>
      </div>

      {/* Get Directions Button */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full gap-3 h-[56px] text-lg rounded-xl mt-auto flex items-center justify-center"
      >
        <FaDirections className="text-xl" />
        Get Directions
      </a>

      {/* Google Maps - Zoomed Out */}
      <div className="mt-8 w-full h-56 rounded-[14px] overflow-hidden relative border border-gray-100 shadow-sm">

        <iframe
          title="Madhura Nagar Varthur Bengaluru Map"
          src={`https://maps.google.com/maps?ll=${latitude},${longitude}&z=14&t=m&output=embed`}
          width="100%"
          height="100%"
          style={{
            border: 0,
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>

    </div>
  );
}