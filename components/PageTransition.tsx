import React from 'react';

const PageTransition: React.FC = () => {
  return (
    <div
      className="h-32 w-screen bg-drapes"
      style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
    ></div>
  );
};

export default PageTransition;
