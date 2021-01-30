import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  color?: string;
}

const Wrapper: React.FC<LayoutProps> = ({ children, color = 'bg-evening' }) => {
  return (
    <>
      {/* <div className={"px-8 bg-evening max-w-screen-2xl mx-auto"}>{children}</div> */}
      <div className={`px-8 ${color} max-w-screen-2xl mx-auto`}>{children}</div>
    </>
  );
};

export default Wrapper;
