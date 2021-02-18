import Image from 'next/image';
import React from 'react';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  name: string;
  description: string;
  img: string;
  alt: string;
  technologies: string[];
  vision?: string;
  github: string;
  href?: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  img,
  technologies,
  vision,
  github,
  alt,
  href,
}) => {
  return (
    <>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex justify-center w-full h-full">
          <Image
            className="rounded-md shadow-lg flex-1"
            src={img}
            quality={100}
            layout="intrinsic"
            width={950}
            height={460}
            alt={alt}
          />
        </div>
        <section className="max-w-3xl lg:w-full">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-2xl font-bold">{name}</h3>
            <a
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              href={github}
              aria-label="Github"
            >
              <FaGithub color="#C5C6C7" fontSize="1.6rem" />
            </a>
            <a
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              href={href}
              aria-label="Website"
            >
              <BsFillHouseDoorFill color="#C5C6C7" fontSize="1.6rem" />
            </a>
          </div>
          <p className="mb-4">{description}</p>
          {vision && <p>{vision}</p>}
          <h4 className="text-2xl font-bold mt-6">Technologies used</h4>
          <div className="grid grid-cols-2 max-w-sm">
            {technologies.map((technology) => {
              return (
                <p className="w-1/2 inline-block" key={technology}>
                  {technology}
                </p>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
