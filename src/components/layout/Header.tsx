// src/components/layout/Header.tsx
import Link from 'next/link';
import LogoIcon from '../icons/LogoIcon';

export default function Header() {
  return (
    <header className='flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-light px-10 py-3'>
      <div className='flex items-center gap-4 text-primary-brand'>
        <div className='size-4'>
          <LogoIcon />
        </div>
        <h2 className='text-lg font-bold leading-tight tracking-[-0.015em]'>
          Williamson County Investments Corporation
        </h2>
      </div>
      <div className='flex flex-1 justify-end gap-8'>
        <nav className='flex items-center gap-9'>
          <Link href='/about' className='text-primary-brand text-sm font-medium leading-normal'>
            About Us
          </Link>
          <Link href='/projects' className='text-primary-brand text-sm font-medium leading-normal'>
            Projects
          </Link>
          <Link href='/services' className='text-primary-brand text-sm font-medium leading-normal'>
            Services
          </Link>
          <Link href='/contact' className='text-primary-brand text-sm font-medium leading-normal'>
            Contact
          </Link>
        </nav>
        <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-accent-green text-primary-brand text-sm font-bold leading-normal tracking-[0.015em]'>
          <span className='truncate'>Get a Quote</span>
        </button>
      </div>
    </header>
  );
}
