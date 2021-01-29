import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  name: string;
  description: string;
  img: string;
  technologies: string[];
  vision?: string;
  github: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  img,
  technologies,
  vision,
  github,
}) => {
  return (
    <>
      <div className="flex gap-8">
        <Image
          className="rounded-md shadow-lg flex-1"
          src={img}
          quality={100}
          layout="intrinsic"
          width={600}
          height={500}
        />
        <section className="max-w-3xl">
          <div className="flex items-center gap-3">
            <h3 className="text-3xl mb-2 font-bold">{name}</h3>
            <a
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              href={github}
            >
              <FaGithub color="#C5C6C7" fontSize="1.6rem" />
            </a>
          </div>
          <p className="mb-4">{description}</p>
          {vision && <p>{vision}</p>}
          <h4 className="text-2xl font-bold mt-6">Technologies used</h4>
          {technologies.map((technology) => {
            return <p key={technology}>{technology}</p>;
          })}
        </section>
      </div>
    </>
  );
};

export default Project;
