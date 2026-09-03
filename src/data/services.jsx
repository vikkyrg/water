import React from 'react';
import { FcEngineering, FcServices, FcHome, FcDepartment, FcOrganization, FcFactory } from 'react-icons/fc';

export const services = [
  {
    id: 1,
    title: "Sump Cleaning",
    description: "Professional cleaning of underground water sumps using high-pressure cleaning methods for deep stain and sludge removal.",
    icon: <FcEngineering className="w-12 h-12" />
  },
  {
    id: 2,
    title: "Water Tank Cleaning",
    description: "Thorough cleaning of overhead and underground water tanks to maintain better hygiene and clean water supply.",
    icon: <FcServices className="w-12 h-12" />
  },
  {
    id: 3,
    title: "Residential Tank Cleaning",
    description: "Cleaning services specifically tailored for homes, villas, and residential properties for safe drinking water.",
    icon: <FcHome className="w-12 h-12" />
  },
  {
    id: 4,
    title: "Apartment Tank Cleaning",
    description: "Large scale tank and sump cleaning services for apartment buildings and residential communities.",
    icon: <FcDepartment className="w-12 h-12" />
  },
  {
    id: 5,
    title: "Commercial Tank Cleaning",
    description: "Professional cleaning solutions for offices, shops, hotels, hospitals, and commercial properties.",
    icon: <FcOrganization className="w-12 h-12" />
  },
  {
    id: 6,
    title: "Industrial Tank Cleaning",
    description: "Heavy-duty cleaning support for industrial plants and large-capacity water storage systems.",
    icon: <FcFactory className="w-12 h-12" />
  }
];
