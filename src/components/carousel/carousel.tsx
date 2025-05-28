import React, { useState } from 'react';

const images = [
  {
    url: '/img/build1.png',
  },
  {
    url: '/img/build2.png',
  },
  {
    url: '/img/build3.png',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section
      className='relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10 text-center text-white @[480px]:px-8 @[480px]:py-16 min-h-[400px] transition-all duration-500'
      style={{
        backgroundImage: `url(${images[current].url || '/img/build1.png'})`,
        backgroundSize: 'ellipsis',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute left-4 top-1/2 z-10 -translate-y-1/2'>
        <button
          aria-label='Previous'
          onClick={prevSlide}
          className='rounded-full bg-black/40 p-2 hover:bg-black/60 transition'
        >
          &#8592;
        </button>
      </div>
      <div className='absolute right-4 top-1/2 z-10 -translate-y-1/2'>
        <button
          aria-label='Next'
          onClick={nextSlide}
          className='rounded-full bg-black/40 p-2 hover:bg-black/60 transition'
        >
          &#8594;
        </button>
      </div>
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full transition-all ${idx === current ? 'bg-white' : 'bg-white/40'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
