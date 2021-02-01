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
        delay: delay + 3.7, //3.6 used cause of Initial Animation taking 3.2s, so use to smooth out animation
        duration,
      },
    },
  };
}

export const slideVariant = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -30,
  },
};

export const containerVariant = {
  visible: {
    opacity: 1,
    transition: { duration: 1, delayChilden: 0.4, staggerChildren: 0.2 },
  },
  hidden: {
    opacity: 0,
  },
};

export const listItem = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delayChilden: 0.2, staggerChildren: 0.1 },
  },
  hidden: { opacity: 0, x: -30 },
};

export default defaultVariant;
