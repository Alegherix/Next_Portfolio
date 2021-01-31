import React from 'react';
import Project from './Project';

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <>
      <div id="portfolio" className="p-8 pt-24 bg-drapes">
        <div className="max-w-screen-2xl mx-auto mb-20">
          <h2 className="text-5xl mb-5 font-bold text-center leading-tight md:leading-none">
            Featured Projects
          </h2>
          <div className="h-1 w-1/2 md:w-100 bg-teeth mx-auto mb-12"></div>

          <Project
            description="This is a hobby project of mine which I started working on when I had a hard time finding a website which would help me create a framework for reaching personal goals."
            vision="The vision of this project is to create a clear and straightforward way of both defining and reaching your goals, aswell as being able to create shared goals with persons close to you."
            name="Vetention"
            img="/32217.jpg"
            technologies={['Next.js', 'Tailwind']}
            github="https://github.com/Alegherix/house_project"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
