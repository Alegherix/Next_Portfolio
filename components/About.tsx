import React from 'react';
import { IconType } from 'react-icons/lib';
import { AiFillSafetyCertificate, AiOutlineCodepen } from 'react-icons/ai';
import { SiTypescript } from 'react-icons/si';
import Wrapper from './Wrapper';
import Image from 'next/image';
import { FaGlobe } from 'react-icons/fa';
import { useWindowSize } from './UseWindow';
import { motion } from 'framer-motion';

interface IPriority {
  Icon: IconType;
  title: string;
  body: string;
}

const Priority: React.FC<IPriority> = ({ Icon, title, body }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 rounded-full h-24 w-24 bg-evening flex items-center justify-center">
        <Icon color="white" size="3rem" />
      </div>
      <p className="text-lg font-bold tracking-wide text-ocean xl:text-xl">
        {title}
      </p>
      <p className="text-xs tracking-wide md:text-base">{body}</p>
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
    Icon: FaGlobe,
    title: 'Responsive',
    body:
      'I strive towards always making sure the code I write is responsive for all types of layout to ensure accessibility for all users!',
  },
];

const About: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <div id="about" className="bg-moonlight pt-8 md:pt-12">
      <Wrapper color="bg-moonlight">
        <h2 className="text-center text-5xl mt-8 mb-3">About me</h2>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          className="h-1 w-60 bg-teeth mx-auto mb-16"
        ></motion.div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-8 justify-items-center lg:grid-cols-4 lg:gap-x-4">
          {priorities.map(({ Icon, title, body }) => {
            return (
              <Priority key={title} Icon={Icon} body={body} title={title} />
            );
          })}
        </div>

        <div className="mt-12 flex gap-8 flex-col-reverse md:flex-row md:justify-center md:gap-6 pb-16 lg:mt-20">
          <div className="flex justify-center w-full h-full md:w-80 md:h-80">
            <Image
              className="rounded-md"
              src="/jag.avif"
              width={width < 768 ? 250 : 330}
              height={250}
              quality={100}
            />
          </div>
          <div className="w-full md:w-96">
            <h4 className="text-2xl text-center md:text-4xl md:text-left">
              Who am I?
            </h4>
            <p className="mb-6 leading-8">
              My name is Martin, I’m a Webdev student currently studying at{' '}
              <span className="text-hearth">Yrgo</span>. At heart I’m a tech
              nerd who loves building new and exciting projects! I spend most of
              my spare time coding on hobby projects and learning new
              technologies. As for favorite tech, I’m very passionate about{' '}
              <span>GraphQL</span>, <span>JAMstack</span> and{' '}
              <span>Serverless</span>.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
