import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import TriangleSvg from './TriangleSvg';

const TriangleAnimation: React.FC = () => {
  return (
    <>
      <div className="h-almostFull w-full flex justify-items-center items-center">
        <TriangleSvg />
      </div>
      <div className="h-notFull mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 2, duration: 1.2 }}
          className="text-center text-hearth text-4xl lg:text-5xl"
        >
          Martin Hansson
        </motion.h2>
      </div>
    </>
  );
};

export default TriangleAnimation;
