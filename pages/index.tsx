import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import TriangleAnimation from '../components/TriangleAnimation';

const home: React.FC = () => {
  const router = useRouter();
  const redirect = () => router.push('/home');
  useEffect(() => {
    router.prefetch('/');
  }, []);

  return (
    <motion.div
      className="w-screen h-screen flex flex-col justify-center items-center"
      initial={{ y: 0 }}
      animate={{ y: '-100vh', transition: { delay: 3.2, duration: 1 } }}
      onAnimationComplete={redirect}
    >
      <TriangleAnimation />
    </motion.div>
  );
};

export default home;
