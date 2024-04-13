import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useScrollAnimation = (inView) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return controls;
};
