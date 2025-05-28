'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function ArrowRightIcon() {
  return (
    <svg
      className='inline-block ml-2 w-5 h-5'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
    </svg>
  );
}

export default function Banner() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.hash = 'projects-section';
    }, 2000);
  };

  return (
    <section className='relative h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center text-white overflow-hidden'>
      <Image
        src='/img/bank.jpg'
        alt='Historic Bank Building'
        layout='fill'
        objectFit='cover'
        quality={85}
        priority
        className='absolute inset-0 z-0'
      />
      <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
      <div className='relative z-20 text-center px-4 max-w-4xl mx-auto'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-md md:drop-shadow-lg'>
          Transforming Properties, Preserving Legacies.
        </h1>
        <p className='text-base md:text-lg lg:text-xl mb-10 text-gray-100 drop-shadow'>
          Discover our latest restoration and renovation projects, transforming your vision into
          reality.
        </p>
        <button
          onClick={handleClick}
          disabled={isLoading}
          className={`${
            isLoading ? 'cursor-not-allowed opacity-75' : 'hover:bg-[#53d22c] hover:scale-105'
          } bg-green-600 text-[#131712] font-semibold py-3 px-8 md:px-12 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center mx-auto text-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75`}
        >
          {isLoading ? (
            <>
              <span className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></span>
              Loading...
            </>
          ) : (
            <>
              View Projects
              <ArrowRightIcon />
            </>
          )}
        </button>
      </div>

      {/* Estilos de Animação (mantidos apenas o 'spin') */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
