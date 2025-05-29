import React from 'react';
import BrushIcon from '../icons/BrushIcon';
import HammerIcon from '../icons/HammerIcon';
import MechanicalWheelIcon from '../icons/MechanicalWheelIcon';
import ServiceCard from '../ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      icon: <HammerIcon />,
      title: 'Restoration',
      description:
        'Meticulous restoration of original features, preserving historical integrity and enhancing property value for generations.',
    },
    {
      icon: <BrushIcon />,
      title: 'Renovation',
      description:
        "Modernizing interiors and systems while respecting the building's heritage, creating refreshed and highly functional spaces.",
    },
    {
      icon: <MechanicalWheelIcon />,
      title: 'Adaptive Reuse',
      description:
        'Transforming historic structures for new purposes, blending old and new for innovative, sustainable, and impactful solutions.',
    },
  ];

  return (
    <section
      id='services-section'
      className='py-10 md:py-16 bg-[#f5f5f5] w-screen relative left-1/2 right-1/2 -mx-[50vw] px-0'
    >
      <h2 className='text-primary-brand text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em] text-center px-4 mb-10 md:mb-14'>
        Our Services
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto'>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
