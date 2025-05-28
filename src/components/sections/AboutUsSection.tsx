// components/sections/AboutUsSection.jsx
'use client'; // Se você for usar efeitos ou estados dentro desta seção no futuro

import React, { useRef, useEffect, useState } from 'react';
import {
  Construction as ConstructionIcon,
  MilitaryTech as MilitaryTechIcon,
  LocalLibrary as LocalLibraryIcon,
  Compost as CompostIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';
import ValueCard from '@/components/ValueCard';

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Opcional: para animar apenas uma vez
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Animar quando 10% da seção estiver visível
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id='about-us-section'
      ref={sectionRef}
      className={`py-10 md:py-16 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='layout-content-container flex flex-col max-w-[960px] mx-auto'>
        {' '}
        {/* Adicionado mx-auto aqui */}
        <div className='flex flex-wrap justify-between gap-3 p-4'>
          <p className='text-[#131712] tracking-light text-[32px] font-bold leading-tight min-w-72'>
            About Williamson County Inc
          </p>
        </div>
        <p className='text-[#131712] text-base font-normal leading-normal pb-3 pt-1 px-4'>
          Williamson County Investments Corporation is a nationally recognized leader in historic
          building restoration, proudly based in Paris, Texas. Since day one, we’ve taken a
          full-service approach to project management, breathing new life into forgotten landmarks
          and offering communities the chance to witness history reborn. Just imagine the past
          coming back to life before your very eyes! Contact us today and discover how we can help
          transform aging buildings in your city into vibrant, living pieces of heritage
        </p>
        <h2 className='text-[#131712] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5'>
          Our History
        </h2>
        <p className='text-[#131712] text-base font-normal leading-normal pb-3 pt-1 px-4'>
          Since 1999, we’ve been a part of history — and we’re making history! We acquire historic
          buildings in critical, often near-collapse condition, and fully restore them, bringing the
          past ALIVE for all to see. Every project is a living tribute to our nation's heritage. In
          doing so, we proudly PRESERVE THE HISTORY OF AMERICA for present and future generations,
          keeping the stories that shaped us alive and thriving.
        </p>
        <h2 className='text-[#131712] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5'>
          Our Values
        </h2>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4'>
          <ValueCard
            title='Respect for History'
            description='We cherish every detail of the past, believing that each historic building holds a vital piece of our nation’s identity.'
            icon={<LocalLibraryIcon color='inherit' fontSize='large' />}
          />
          <ValueCard
            title='Commitment to Excellence'
            description='We uphold the highest standards in every project — from planning to the final restoration — ensuring lasting and authentic results.'
            icon={<MilitaryTechIcon color='inherit' fontSize='large' />}
          />
          <ValueCard
            title='Boldness to Transform'
            description='We take on the toughest challenges — structures in ruins and on the verge of collapse — and turn them into living works of art.'
            icon={<ConstructionIcon color='inherit' fontSize='large' />}
          />
          <ValueCard
            title='Legacy for the Future'
            description='Our work is not just for today. We restore with purpose, preserving memories and building bridges between generations.'
            icon={<CompostIcon color='inherit' fontSize='large' />}
          />
          <ValueCard
            title='Passion for What We Do'
            description='We believe in the power of history. Every brick we restore is a tribute to time and a labor of love for our cultural heritage.'
            icon={<FavoriteIcon color='inherit' fontSize='large' />}
          />
        </div>
      </div>
    </section>
  );
}
