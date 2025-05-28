'use client';

import React, { useState } from 'react';
import Modal from './Modal'; // Importe o componente Modal
import ContactForm from './ContactForm'; // Importe o ContactForm

export default function GetQuoteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-colors duration-200'
      >
        <span className='truncate'>Get a Quote</span>
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ContactForm />
      </Modal>
    </>
  );
}
