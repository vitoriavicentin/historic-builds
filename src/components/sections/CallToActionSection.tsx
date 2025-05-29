import React from 'react';
import GetQuoteButton from '../GetQuoteButton';

export default function CallToActionSection() {
  return (
    <section className='flex flex-col items-center justify-center gap-6 py-12 text-center md:py-20 bg-gray-800 text-white'>
      <h2 className='tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px] mx-auto'>
        Ready to Revitalize Your Property?
      </h2>
      <p className='text-lg md:text-xl font-normal leading-normal max-w-[720px] mx-auto px-4 text-gray-200'>
        Contact us today for a consultation and let’s discuss how we can turn your vision into
        reality.
      </p>
      <div className='flex justify-center mt-10 md:mt-12'>
        <GetQuoteButton />
      </div>
    </section>
  );
}
