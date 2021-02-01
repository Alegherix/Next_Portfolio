import { motion } from 'framer-motion';
import React from 'react';
import TriangleSvg from './TriangleSvg';

const TriangleAnimation: React.FC = () => {
  return (
    <>
      <div className="p-4 h-almostFull w-full flex justify-items-center items-center">
        <div className="flex-1 mx-auto max-w-xl lg:max-w-3xl">
          <TriangleSvg />
        </div>
      </div>
      <div className="h-notFull">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 2, duration: 1.2 }}
          className="text-center text-hearth text-4xl lg:text-5xl -mt-12 lg:mt-0"
        >
          Martin Hansson
        </motion.h2>
      </div>
    </>
  );
};

export default TriangleAnimation;
