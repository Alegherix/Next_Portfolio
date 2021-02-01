import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import TriangleSvg from './TriangleSvg';

interface TriangleAnimationProps {}

const TriangleAnimation: React.FC<TriangleAnimationProps> = ({}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: '-100vh',
      }}
      transition={{ delay: 3.2, duration: 1 }}
    >
      <div className="h-almostFull flex justify-items-center items-center">
        <TriangleSvg />
      </div>
      <div className="h-notFull relative mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 2, duration: 1.2 }}
          className="text-center xl:mt-8 text-hearth text-4xl md:text-5xl"
        >
          Martin Hansson
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default TriangleAnimation;
