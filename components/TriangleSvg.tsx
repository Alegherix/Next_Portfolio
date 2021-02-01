import { motion } from 'framer-motion';
import React from 'react';

const TriangleSvg = () => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  const svgVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.svg
      variants={svgVariant}
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
  );
};

export default TriangleSvg;
