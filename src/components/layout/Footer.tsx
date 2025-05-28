function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-6 md:py-8 text-center'>
      {' '}
      <div className='layout-container mx-auto px-4'>
        <p className='text-sm mb-2'>
          &copy; {currentYear} Williamson County Investments Corporation. All rights reserved.
        </p>
        <p className='text-xs text-gray-400'>
          Developer by <span className='font-semibold'>VCM</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
