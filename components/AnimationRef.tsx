import { AnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // 1.9K gzipped

const AnimationRef = (animation: AnimationControls, when: number) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: `-${when}px 0px`,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  return ref;
};

export default AnimationRef;
