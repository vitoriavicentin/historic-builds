// components/ContactForm.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';

import FormInput from './FormInput'; // Certifique-se que o caminho está correto
import StatusMessage from './StatusMessage'; // Certifique-se que o caminho está correto
import { useContactForm } from '@/app/hooks/useContactForm'; // Certifique-se que o caminho está correto

const ContactForm: React.FC = () => {
  const { formData, status, errorMessage, isFormValid, handleChange, handleSubmit, isFieldFilled } =
    useContactForm();

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className='w-full'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        {' '}
        <FormInput
          label='First Name'
          name='firstName'
          type='text'
          placeholder='Your first name'
          value={formData.firstName}
          onChange={handleChange}
          required
          isFilled={isFieldFilled('firstName')}
        />
        <FormInput
          label='Last Name'
          name='lastName'
          type='text'
          placeholder='Your last name'
          value={formData.lastName}
          onChange={handleChange}
          required
          isFilled={isFieldFilled('lastName')}
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        {' '}
        <FormInput
          label='Email'
          name='email'
          type='email'
          placeholder='Your email address'
          value={formData.email}
          onChange={handleChange}
          required
          isFilled={isFieldFilled('email')}
        />
        <FormInput
          label='Phone (Optional)'
          name='phone'
          type='tel'
          placeholder='Your phone number'
          value={formData.phone}
          onChange={handleChange}
          isFilled={isFieldFilled('phone')}
        />
      </div>

      <div className='mb-6'>
        {' '}
        <FormInput
          label='Your Message'
          name='message'
          placeholder='Write your message here...'
          value={formData.message}
          onChange={handleChange}
          required
          isTextArea
          rows={4}
          isFilled={isFieldFilled('message')}
        />
      </div>

      <div className='flex justify-end mt-4'>
        {' '}
        <button
          type='submit'
          disabled={status === 'loading' || !isFormValid}
          className={`inline-flex items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-base font-semibold text-white transition-colors duration-300
            ${
              status === 'loading' || !isFormValid
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
        >
          <AnimatePresence mode='wait'>
            {status === 'loading' ? (
              <motion.span
                key='loading'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex items-center'
              >
                <CircularProgress size={18} color='inherit' className='mr-2' />
                Sending...
              </motion.span>
            ) : (
              <motion.span
                key='send'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex items-center'
              >
                <SendIcon sx={{ fontSize: 18 }} className='mr-2 -rotate-45' />
                Send Message
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <StatusMessage status={status} message={errorMessage} />
    </motion.form>
  );
};

export default ContactForm;
