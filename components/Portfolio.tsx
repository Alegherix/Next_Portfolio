import React from 'react';
import Project from './Project';

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <>
      <div>
        <Project
          description="This is a hobby project of mine which I started working on when I had a hard time finding a website which would help me create a framework for reaching personal goals."
          vision="The vision of this project is to create a clear and straightforward way of both defining and reaching your goals, aswell as being able to create shared goals with persons close to you."
          name="Vetention"
          img="/32217.jpg"
          technologies={['Next.js', 'Tailwind']}
          github="https://github.com/Alegherix/house_project"
        />
      </div>
    </>
  );
};

export default Portfolio;
