// src/components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode; // Para passar o componente SVG como prop
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className='flex flex-1 flex-col gap-3 rounded-lg border border-border-medium bg-white p-4'>
      <div className='text-primary-brand'>{icon}</div>
      <div className='flex flex-col gap-1'>
        <h2 className='text-primary-brand text-base font-bold leading-tight'>{title}</h2>
        <p className='text-secondary-brand text-sm font-normal leading-normal'>{description}</p>
      </div>
    </div>
  );
}
