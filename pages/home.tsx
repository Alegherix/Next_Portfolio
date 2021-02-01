import React, { useEffect, useState } from 'react';
import TestSvg from '../components/TestSvg';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import defaultVariant, { slideVariant } from '../utils/utils';

const home: React.FC = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   let timer = setTimeout(() => router.push('/'), 3000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <>
      <motion.div
        // initial={{ rotate: 0, scale: 1 }}
        // animate={{ rotate: 720, scale: 2.8 }}
        // transition={{ delay: 3.2, duration: 1.2 }}
        className="h-almostFull flex justify-items-center items-center"
      >
        <TestSvg />
      </motion.div>
      <div className="h-notFull relative mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 2, duration: 1.2 }}
          className="-mt-12 text-center xl:mt-8 text-hearth text-4xl md:text-5xl"
        >
          Martin Hansson
        </motion.h2>
      </div>
    </>
  );
};

export default home;
