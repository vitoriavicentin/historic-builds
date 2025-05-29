'use client';

import React from 'react';
import ContactForm from '../ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id='contact-section' className='py-10 md:py-16 bg-[#f5f5f5]'>
      <div className='layout-content-container flex flex-col w-full max-w-[1200px] mx-auto gap-12 px-4'>
        {' '}
        <div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>
          {' '}
          <h2 className='text-4xl font-extrabold text-gray-900 mb-4 text-center'>Contact Us</h2>
          <p className='text-gray-600 text-lg mb-8 text-center max-w-2xl mx-auto'>
            Send us a message and we will get back to you shortly.{' '}
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
