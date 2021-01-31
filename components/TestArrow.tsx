import React from 'react';

interface TestArrowProps {}

const TestArrow: React.FC<TestArrowProps> = ({}) => {
  return (
    <div className="bg-moonlight">
      <div
        className="h-32 w-screen bg-hearth"
        style={{ clipPath: 'polygon(0 1%, 50% 90%, 100% 0, 50% 100%)' }}
      ></div>
    </div>
  );
};

export default TestArrow;
