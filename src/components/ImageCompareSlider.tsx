'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

interface ImageCompareSliderProps {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}

const ImageCompareSlider: React.FC<ImageCompareSliderProps> = ({ beforeSrc, afterSrc, alt }) => {
  const [sliderPosition, setSliderPosition] = React.useState<number>(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateSliderPosition = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handlePointerDown = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    dragging.current = true;
    if ('touches' in e) {
      updateSliderPosition(e.touches[0].clientX);
    } else {
      updateSliderPosition(e.clientX);
    }
  };

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      if ('touches' in e) {
        updateSliderPosition((e as TouchEvent).touches[0].clientX);
      } else {
        updateSliderPosition((e as MouseEvent).clientX);
      }
    };

    const handlePointerUp = () => {
      dragging.current = false;
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className='relative w-full aspect-[4/3] rounded-lg overflow-hidden select-none group cursor-ew-resize'
      style={{ minHeight: 400, maxHeight: 400 }}
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      onClick={(e) => updateSliderPosition(e.clientX)}
    >
      <Image
        src={beforeSrc}
        alt={`${alt} Before`}
        fill
        style={{ objectFit: 'cover' }}
        className='rounded-lg'
        quality={100}
        priority
      />

      <div
        className='absolute top-0 left-0 h-full overflow-hidden rounded-lg'
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={afterSrc}
          alt={`${alt} After`}
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-lg'
          quality={100}
          priority
        />
        <div
          className='absolute inset-0'
          style={{ transform: `translateX(-${sliderPosition}%)` }}
        ></div>
      </div>

      <div
        className='absolute top-0 h-full w-1 bg-white cursor-ew-resize z-10'
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 size-8 bg-white rounded-full shadow flex items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-800'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10.293 15.707a1 1 0 010-1.414L12.586 12H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageCompareSlider;
