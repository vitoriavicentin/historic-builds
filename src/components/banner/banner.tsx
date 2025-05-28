import React, { useState } from 'react';

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
      // Aqui você pode redirecionar ou carregar os projetos
      // Ex: router.push("/projects")
    }, 2000);
  };

  return (
    <section className='flex flex-wrap pt-24 px-4 md:px-10 mb-4'>
      <div className='w-full md:w-1/2 flex justify-center items-center transition-shadow duration-300 '>
        <img
          src='/img/banner.avif'
          alt='Historic Build'
          className='max-w-xs md:max-w-md rounded shadow-lg transition-transform duration-700 ease-out animate-banner3d'
          style={{
            transform: 'perspective(1000px) rotateY(0deg) scale(1)',
            opacity: 0,
            animation: 'banner3dIn 1s ease-out forwards',
          }}
        />
      </div>

      {/* Estilo da animação */}
      <style jsx>{`
        @keyframes banner3dIn {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-20deg) scale(0.85);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) scale(1);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left transition-shadow duration-300 mt-8 md:mt-0'>
        <h2 className='text-2xl font-semibold mb-6 max-w-md'>
          Discover our latest restoration and renovation projects
        </h2>
        <button
          onClick={handleClick}
          disabled={isLoading}
          className={`${
            isLoading ? 'cursor-not-allowed' : 'hover:bg-[#53d22c]-600 cursor-pointer'
          } bg-[#53d22c] text-[#131712] font-semibold py-3 px-10 md:px-16 lg:px-40 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          {isLoading ? (
            <>
              <span
                className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'
                style={{ animation: 'spin 0.8s linear infinite' }}
              ></span>
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
    </section>
  );
}
