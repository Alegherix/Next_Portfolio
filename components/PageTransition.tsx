import React from 'react';

const PageTransition: React.FC = () => {
  return (
    <div className="bg-drapes">
      <div
        className="h-32 w-screen bg-moonlight"
        style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
      ></div>
    </div>
  );
};

export default PageTransition;
