'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

interface StatusMessageProps {
  status: 'success' | 'error' | 'idle' | 'loading';
  message?: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status, message }) => {
  if (status === 'idle' || status === 'loading') {
    return null;
  }

  const isSuccess = status === 'success';
  const icon = isSuccess ? <CheckCircleOutlineIcon sx={{ fontSize: 20 }} /> : <CancelOutlinedIcon sx={{ fontSize: 20 }} />;
  const textColor = isSuccess ? 'text-green-600' : 'text-red-600';
  const defaultMessage = isSuccess ? 'Message sent successfully!' : (message || 'An error occurred. Please try again.');

  return (
    <AnimatePresence>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`${textColor} mt-4 text-center text-base flex items-center justify-center`}
      >
        <span className="inline-block mr-1 align-text-bottom">{icon}</span>
        {defaultMessage}
      </motion.p>
    </AnimatePresence>
  );
};

export default StatusMessage;