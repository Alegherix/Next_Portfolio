import { Variants } from 'framer-motion/types/types';

function defaultVariant(y = 20, delay = 0.2, duration = 0.4): Variants {
  return {
    init: {
      y,
      opacity: 0,
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
      },
    },
  };
}

export default defaultVariant;
