'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface FormInputProps {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute; // Permite 'text', 'email', 'tel', etc.
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  isFilled: boolean;
  isTextArea?: boolean;
  rows?: number; // Apenas para textarea
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  isFilled,
  isTextArea = false,
  rows = 5,
}) => {
  const baseClasses = "mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10";
  const filledClass = "border-green-400 focus:border-green-500";
  const emptyClass = "border-gray-300";

  const inputClasses = `${baseClasses} ${isFilled ? filledClass : emptyClass}`;

  const showCheckIcon = isFilled && (name !== 'email' || value.includes('@')); // Adiciona validação básica para email

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {isTextArea ? (
          <textarea
            name={name}
            id={name}
            rows={rows}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={inputClasses}
          ></textarea>
        ) : (
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={inputClasses}
          />
        )}
        <AnimatePresence>
          {showCheckIcon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className={`absolute right-0 pr-3 flex items-center pointer-events-none ${isTextArea ? 'bottom-3' : 'inset-y-0'}`}
            >
              <CheckCircleOutlineIcon className="text-green-500" sx={{ fontSize: 20 }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FormInput;