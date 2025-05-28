'use client';

import { useState } from 'react';
import Link from 'next/link';

function HamburgerIcon() {
  return (
    <svg
      className='w-6 h-6 text-primary-brand'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16M4 18h16'
      ></path>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className='w-6 h-6 text-primary-brand'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M6 18L18 6M6 6l12 12'
      ></path>
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className='flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-4 py-3 md:px-8 lg:px-12 bg-white shadow-sm sticky top-0 z-50'>
      <Link href='/' className='flex items-center gap-2 text-primary-brand'>
        <h1 className='text-base md:text-xl font-bold leading-tight tracking-[-0.015em]'>
          Williamson County Investments Corporation
        </h1>
      </Link>
      <nav className='hidden md:flex items-center gap-6 lg:gap-8'>
        <Link
          href='/'
          className='text-gray-700 text-sm font-medium leading-normal hover:text-green-600 transition-colors duration-200'
        >
          Home
        </Link>
        <button
          onClick={() => scrollToSection('about-us-section')}
          className='text-gray-700 text-sm font-medium leading-normal hover:text-green-600 transition-colors duration-200'
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          About Us
        </button>
        <button
          onClick={() => scrollToSection('projects-section')}
          className='text-gray-700 text-sm font-medium leading-normal hover:text-green-600 transition-colors duration-200'
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('services-section')}
          className='text-gray-700 text-sm font-medium leading-normal hover:text-green-600 transition-colors duration-200'
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection('contact-section')}
          className='text-gray-700 text-sm font-medium leading-normal hover:text-green-600 transition-colors duration-200'
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          Contact
        </button>
      </nav>

      <div className='md:hidden'>
        <button onClick={toggleMenu} aria-label='Toggle navigation menu'>
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40`}
      >
        <div className='flex justify-end p-4'>
          <button onClick={toggleMenu} aria-label='Close navigation menu'>
            <CloseIcon />
          </button>
        </div>
        <nav className='flex flex-col items-center gap-6 py-6'>
          <Link
            href='/'
            className='text-primary-brand text-lg font-medium hover:text-green-600 transition-colors duration-200'
            onClick={toggleMenu}
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection('about-us-section')}
            className='text-primary-brand text-lg font-medium hover:text-green-600 transition-colors duration-200'
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('projects-section')}
            className='text-primary-brand text-lg font-medium hover:text-green-600 transition-colors duration-200'
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('services-section')}
            className='text-primary-brand text-lg font-medium hover:text-green-600 transition-colors duration-200'
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className='text-primary-brand text-lg font-medium hover:text-green-600 transition-colors duration-200'
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            Contact
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden'
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
