// src/components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex justify-center'>
      <div className='flex max-w-[960px] flex-1 flex-col'>
        <footer className='flex flex-col gap-6 px-5 py-10 text-center @container'>
          <div className='flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around'>
            <Link
              href='/about'
              className='text-secondary-brand text-base font-normal leading-normal min-w-40'
            >
              About Us
            </Link>
            <Link
              href='/projects'
              className='text-secondary-brand text-base font-normal leading-normal min-w-40'
            >
              Projects
            </Link>
            <Link
              href='/services'
              className='text-secondary-brand text-base font-normal leading-normal min-w-40'
            >
              Services
            </Link>
            <Link
              href='/contact'
              className='text-secondary-brand text-base font-normal leading-normal min-w-40'
            >
              Contact
            </Link>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href='#' aria-label='Instagram'>
              <div
                className='text-secondary-brand'
                data-icon='InstagramLogo'
                data-size='24px'
                data-weight='regular'
              ></div>
            </a>
            <a href='#' aria-label='Facebook'>
              <div
                className='text-secondary-brand'
                data-icon='FacebookLogo'
                data-size='24px'
                data-weight='regular'
              ></div>
            </a>
            <a href='#' aria-label='Twitter'>
              <div
                className='text-secondary-brand'
                data-icon='TwitterLogo'
                data-size='24px'
                data-weight='regular'
              ></div>
            </a>
          </div>
          <p className='text-secondary-brand text-base font-normal leading-normal'>
            © 2025 Williamson County Investments Corporation. All rights reserved.
          </p>
        </footer>
      </div>
    </footer>
  );
}
