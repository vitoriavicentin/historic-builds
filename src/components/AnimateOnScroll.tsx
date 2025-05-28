// components/AnimateOnScroll.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/app/hooks/useAnimateOnScroll'; // Ajuste o caminho

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variants?: any; // Variações de animação do Framer Motion
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string; // Para passar classes Tailwind para o div wrapper
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
      className={className} // Aplica classes passadas
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
