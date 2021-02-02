import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { AiFillSafetyCertificate, AiOutlineCodepen } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { SiTypescript } from 'react-icons/si';
import { containerVariant, listItem, slideVariant } from '../utils/utils';
import AnimationRef from './AnimationRef';
import { useWindowSize } from './UseWindow';
import Wrapper from './Wrapper';

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

  const priorityAnimation = useAnimation();
  const priorityRef = AnimationRef(priorityAnimation, 225);

  const underlineAnimation = useAnimation();
  const refers = AnimationRef(underlineAnimation, 150);

  return (
    <div id="about" className="bg-moonlight pt-8 md:pt-12">
      <Wrapper color="bg-moonlight">
        <motion.div
          ref={refers}
          animate={underlineAnimation}
          initial="hidden"
          variants={slideVariant}
        >
          <h2 className="text-center text-5xl mt-8 mb-3">About me</h2>
          <div className="h-1 w-60 bg-teeth mx-auto mb-16"></div>
        </motion.div>
        <motion.div
          ref={priorityRef}
          animate={priorityAnimation}
          initial="hidden"
          variants={containerVariant}
          className="grid grid-cols-2 gap-x-2 gap-y-8 justify-items-center lg:grid-cols-4 lg:gap-x-4"
        >
          {priorities.map(({ Icon, title, body }) => {
            return (
              <motion.div key={title} variants={listItem}>
                <Priority Icon={Icon} body={body} title={title} />
              </motion.div>
            );
          })}
        </motion.div>
        <div className="mt-12 flex gap-8 flex-col-reverse md:flex-row md:justify-center md:gap-6 pb-16 lg:mt-20">
          <div className="flex justify-center w-full h-full md:w-80 md:h-80">
            <Image
              className="rounded-md"
              src="/jag.webp"
              alt="Image of me infront of computer"
              width={width < 768 ? 250 : 330}
              height={250}
              quality={100}
            />
          </div>
          <div className="w-full md:w-96 lg:w-101">
            <h3 className="text-2xl text-center md:text-4xl md:text-left">
              Who am I?
            </h3>
            <p className="mb-6 text-sm md:text-base tracking-wide leading-6">
              I'm Martin, a Webdev student currently studying at{' '}
              <span className="text-hearth">Yrgo</span>. In a sentence, I'm a
              huge tech nerd who loves to fiddle around with code and build new
              & exciting projects! Most of my spare time is spent programming on
              hobby projects and learning new technologies. When I'm not coding,
              I like to browse Reddit, spend time with my spouse and play with
              my cat. As for favorite tech, I’m very passionate about{' '}
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
