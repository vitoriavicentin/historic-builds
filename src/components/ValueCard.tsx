import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className='flex flex-1 gap-3 rounded-lg border border-[#dee4dc] bg-white p-4 flex-col  transition-transform duration-200 hover:scale-105'>
      <div className='text-green-600' data-icon='Hammer' data-size='24px' data-weight='regular'>
        {icon}
      </div>
      <div className='flex flex-col gap-1'>
        <h2 className='text-[#131712] text-base font-bold leading-tight'>{title}</h2>
        <p className='text-[#6d8566] text-sm font-normal leading-normal'>{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
