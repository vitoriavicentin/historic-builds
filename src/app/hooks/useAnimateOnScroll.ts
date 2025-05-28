// app/hooks/useAnimateOnScroll.ts
import { useEffect, useRef, useState } from 'react';
import { useAnimation } from 'framer-motion';

interface UseAnimateOnScrollOptions {
  threshold?: number; // 0.0 - 1.0, quão visível o elemento precisa estar para disparar
  rootMargin?: string; // Margem ao redor do root (viewport)
  once?: boolean; // Se a animação deve acontecer apenas uma vez
}

export const useAnimateOnScroll = ({
  threshold = 0.2, // 20% do elemento visível
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
          controls.start('visible'); // Inicia a animação 'visible'
          if (once) {
            setHasAnimated(true);
            observer.unobserve(entry.target); // Para de observar se for para animar apenas uma vez
          }
        } else if (!entry.isIntersecting && !once && hasAnimated) {
          controls.start('hidden'); // Opcional: anima para fora da tela se não for 'once'
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
