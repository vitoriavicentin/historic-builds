import { useEffect, useRef, useState } from 'react';
import { useAnimation } from 'framer-motion';

interface UseAnimateOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useAnimateOnScroll = ({
  threshold = 0.2,
  rootMargin = '0px',
  once = true,
}: UseAnimateOnScrollOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          controls.start('visible');
          if (once) {
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        } else if (!entry.isIntersecting && !once && hasAnimated) {
          controls.start('hidden');
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current); // Limpa o observer ao desmontar
      }
    };
  }, [controls, threshold, rootMargin, once, hasAnimated]); // Adiciona hasAnimated às dependências

  return { ref, controls };
};
