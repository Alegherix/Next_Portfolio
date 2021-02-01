import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import TriangleAnimation from '../components/TriangleAnimation';

const home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
    let timer = setTimeout(() => router.push('/'), 4200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <TriangleAnimation />;
};

export default home;
