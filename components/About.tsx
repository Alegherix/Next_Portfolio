import React from 'react';
import { IconType } from 'react-icons/lib';
import { AiFillSafetyCertificate, AiOutlineCodepen } from 'react-icons/ai';
import { SiTypescript } from 'react-icons/si';
import Wrapper from './Wrapper';

interface IPriority {
  Icon: IconType;
  title: string;
  body: string;
}

const Priority: React.FC<IPriority> = ({ Icon, title, body }) => {
  return (
    <div className="p-6 flex flex-col items-center flex-wrap">
      <div className="mb-3 rounded-full h-24 w-24 bg-evening flex items-center justify-center">
        <Icon color="white" size="3rem" />
      </div>
      <p className="text-2xl font-bold tracking-wide text-ocean">{title}</p>
      <p className="tracking-wide">{body}</p>
    </div>
  );
};

const priorities: Array<IPriority> = [
  {
    Icon: SiTypescript,
    title: 'Typesafe',
    body:
      'I’m a big proponent of always writing typesafe code. Needless to say, I love Typescript!',
  },
  {
    Icon: AiOutlineCodepen,
    title: 'Efficent code',
    body:
      'Code shouldn’t just be easy to read, it should be just as efficent  of serving clients as performing background tasks.',
  },
  {
    Icon: AiFillSafetyCertificate,
    title: 'Security',
    body:
      'Security in applications to ensure safety and prevent unauthorized access is one of my greatest priorities. ',
  },
  {
    Icon: AiFillSafetyCertificate,
    title: 'safety',
    body:
      'I’m a big proponent of always writing typesafe code. Needless to say, I love Typescript!',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-moonlight p-6">
      <Wrapper color="bg-moonlight">
        <h2 className="text-center text-5xl mt-8 mb-3">About me</h2>
        <div className="h-1 w-60 bg-teeth mx-auto mb-8"></div>
        <div className="flex mb-20">
          {priorities.map(({ Icon, title, body }) => {
            return (
              <Priority key={title} Icon={Icon} body={body} title={title} />
            );
          })}
        </div>
        <div className="flex justify-evenly gap-48">
          <div className="w-full p-6">
            <h4 className="text-3xl">Who am I?</h4>
            <p className="mb-6 leading-8">
              My name is Martin, I’m a Webdev student currently studying at{' '}
              <span className="text-hearth">Yrgo</span>. At heart I’m a tech
              nerd who loves building new and exciting projects! I spend most of
              my spare time coding on hobby projects and learning new
              technologies. As for favorite tech, I’m very passionate about{' '}
              <span>GraphQL</span>,<span>JAMstack</span> and{' '}
              <span>Serverless</span>.
            </p>
          </div>
          <div className="h-64 w-64 w-full bg-night "></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
