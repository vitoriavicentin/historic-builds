'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/app/hooks/useAnimateOnScroll';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variants?: any;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  variants = defaultVariants,
  threshold = 0.2,
  rootMargin = '0px',
  once = true,
  className,
}) => {
  const { ref, controls } = useAnimateOnScroll({ threshold, rootMargin, once });

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
