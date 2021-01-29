import React from 'react';

interface LayoutProps {}

const Wrapper: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="px-8 bg-evening max-w-screen-2xl mx-auto">{children}</div>
    </>
  );
};

export default Wrapper;
