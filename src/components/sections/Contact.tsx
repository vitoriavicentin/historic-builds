'use client';

import React from 'react';
import ContactForm from '../ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id='contact-section' className='w-full max-w-4xl px-4 py-12 md:py-16 mx-auto'>
      {' '}
      {/* Ajustado padding vertical para a seção */}
      <div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>
        {' '}
        {/* Adiciona o estilo de "card" para a seção */}
        <h2 className='text-4xl font-extrabold text-gray-900 mb-4 text-center'>Contact Us</h2>
        <p className='text-gray-600 text-lg mb-8 text-center max-w-2xl mx-auto'>
          Send us a message and we will get back to you shortly.{' '}
          {/* Você pode ajustar a largura da descrição aqui */}
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
