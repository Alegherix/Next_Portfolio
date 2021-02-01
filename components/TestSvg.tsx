import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import containerVariant from '../utils/utils';
import { useRouter } from 'next/router';

const pathVariants = {
  hidden: {
    // opacity: 0
    pathLength: 0,
  },
  visible: {
    // opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const TestSvg = () => {
  const router = useRouter();

  return (
    <div className="mx-auto flex-1 max-w-6xl">
      <motion.svg
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1934.986 1675.747"
      >
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M967.493 39.744l923.76 1600H43.733z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M905.292 159.324l913.521 1367.18L178.04 1634.046z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M857.013 269.142l890.874 1161.01-1450.901 191.015z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M820.529 369.482l858.761 979.23-1277.418 254.094z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M793.968 460.717l819.661 819.661-1119.678 300.017z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M775.69 543.288l775.648 680.225-976.916 331.618z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M764.264 617.683l728.444 558.954-848.291 351.374z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M758.447 684.418l679.463 454.002-732.909 361.431z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M757.166 744.023l629.854 363.647-629.854 363.646z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M759.497 797.033l580.538 286.289-538.203 359.616z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M764.653 843.975l532.237 220.46-457.042 350.7z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M771.965 885.364l485.509 164.808-385.483 338.059z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M780.868 921.695l440.771 118.305-322.667 322.667z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M790.889 953.443l398.321 79.231-267.777 305.341z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M801.636 981.055l358.359 47.179-220.037 286.758z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M812.789 3004.951l321.002 21.039-178.722 267.477z"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          stroke="#FF3A6B"
          strokeWidth="8"
          stroke-miterlimit="30"
          d="M824.084 3025.524h286.305l-143.152 247.947z"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

export const Random = () => {
  return (
    <div className="w-60 h-60">
      <motion.svg
        viewBox="0 0 505 444"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M1 135L229 1L504 268.5L212.5 443L20 170L229 56M229 56L445 261.5L229 386L72.5 174.5L229 89.5V56Z"
          stroke="white"
          strokeWidth="8"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

export const SvgM = () => {
  return (
    <div className="w-40 h-40">
      <motion.svg
        viewBox="0 0 399 447"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M7.5 403.516C20 459.016 50.9998 -12.4839 7.5 2.51598C-35.9998 17.5159 201.855 220.016 201.855 220.016C201.855 220.016 416.066 24.5156 381.565 6.5156C347.064 -11.4843 362.564 448.016 390.565 403.516C418.566 359.016 331.066 440.516 331.066 440.516V130.516L201.855 258.516L62.065 130.016L61.065 440.516C61.065 440.516 -5 348.016 7.5 403.516Z"
          stroke="white"
          strokeWidth="5"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

export default TestSvg;
