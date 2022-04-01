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
          <div className="h-1 w-1/2 md:w-100 bg-teeth mx-auto mb-12 rounded-md"></div>
          <section className="flex flex-col gap-20 lg:gap-32">
            <Project
              description="This application was written as a freelance contract to help the swedish real estate agency Higab create a platform to launch their new project Bagih."
              vision="The main goal of this project was to create an application where the users could buy a membership, and then use the application to book seating slots in their coworking space, book meeting rooms, aswell as sign up for events hosted by Bagih. There was also a a big emphasize on creating a working administrative tool to allow for administrating members, create upcoming events etc..."
              name="World Explorer"
              img="/Bagih.webp"
              alt="Example image of a project"
              technologies={[
                'React',
                'TailwindCSS',
                'Typescript',
                'Jest',
                'Laravel',
                'Inertia.js',
                'Postgres',
              ]}
              github="https://github.com/Alegherix"
              href="https://bagih.se"
            />

            <Project
              description="This is a 3D Game written in Three.js where you're a ball exploring the world, jumping over obstacles, and scoring points in 3 different maps, all the way until you reach the diamond at the end of the map."
              vision="The main goal of this project was to further my knowledge with Three.js aswell as exploring other techonologies such as Svelte. Typescript is used all throughout the entire stack to ensure typesafety. Socket.io was also utilized to make the last map a multiplayer map to spice things up even further."
              name="World Explorer"
              img="/explorer.webp"
              alt="Example image of a project"
              technologies={[
                'Three.js',
                'Cannon.js',
                'Typescript',
                'Svelte',
                'Socket.io',
                'Firestore Database',
                'Netlify',
              ]}
              github="https://github.com/Alegherix/world_explorer"
              href="https://worldexploration.netlify.app"
            />

            <Project
              description="This is a project with the purpose of making it easier to track locations of where you've found forages such as mushrooms, berries etc.. whenever you're out in the forrest."
              vision="The main goal was to make it easy to find your location of wherever you are, easily add the kind of forage you found, aswell as optionally adding images of the location for future reference, everything persisted in the cloud."
              name="Forager"
              img="/forager2.webp"
              alt="Example image of a project"
              technologies={[
                'React',
                'TailwindCSS',
                'Typescript',
                'Google Maps API',
                'Firebase Auth',
                'Firestore Database',
                'Google Cloud Storage',
                'Vercel',
              ]}
              github="https://github.com/Alegherix/forager"
              href="https://forager-phi.vercel.app"
            />

            <Project
              description='A website for the uppcoming event "Kul med djur", which is a fictional event aimed at inviting customers and potential customers to a day at delsjön to learn more about taking care of their pets.'
              vision="The vision of this project was to create something fun and exciting by using a layout with warm colors and wavy section separation."
              name="Kul med djur"
              img="/trees.svg"
              alt="Example image of trees from the project"
              technologies={[
                'Next.js',
                'TailwindCSS',
                'Typescript',
                'Vercel',
                'Framer Motion',
                'Immer',
                'Google Maps API',
              ]}
              github="https://github.com/Alegherix/wuip"
              href="https://wuip.vercel.app"
            />
            {/* <Project
              description="This is a project for being able to safely create an account, add houses to a map, and persist it for other people to see."
              vision="The main idea behind this project was to get a deeper understanding of implementing Firebase Authentication aswell as persisting data with a GraphQL backed API."
              name="House Finder"
              img="/House.webp"
              alt="Example image of a project"
              technologies={[
                'Next.js',
                'TailwindCSS',
                'Typescript',
                'TypeGraphQL',
                'Apollo',
                'Prisma',
                'Firebase Authentication',
                'Mapbox',
                'Cloudinary',
              ]}
              github="https://github.com/Alegherix/house_project"
            /> */}

            <Project
              description="This was my first serious attempt at a portfolio written entirely in Gatsby. This Project leverages Static Site Generation to reduce loadtimes and improve Search Engine Optimization."
              name="Gatsby Portfolio"
              img="/gatsby.webp"
              alt="Example image of a project"
              technologies={[
                'Gatsby',
                'GraphQL',
                'Jamstack',
                'Netlify',
                'SCSS',
                'Javascript',
              ]}
              github="https://github.com/Alegherix/Portfolio"
              href="https://alegherix.netlify.app"
            />

            <Project
              description="This was a School project made at Yrgo, to create a landing page for a fictional release of a new electric vehicle."
              name="Electric"
              img="/blueTerra.webp"
              alt="Example image of a project"
              technologies={['HTML', 'CSS', 'Javascript', 'GSAP', 'Barba.js']}
              github="https://github.com/Alegherix/ElectricCar"
              href="https://yrgoelectric.netlify.app"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
