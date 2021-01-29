import React from 'react';
import { IconType } from 'react-icons';
import {
  FaChevronUp,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

interface FooterProps {
  //   medias: SocialMedia[];
}

const icons: SocialMedia[] = [
  {
    Icon: FaLinkedinIn,
    url: 'https://www.linkedin.com/in/martin-hansson-7b4875204/',
  },
  {
    Icon: FaGithub,
    url: 'https://github.com/Alegherix',
  },
  {
    Icon: FaInstagram,
    url: 'https://instagram.com/Alegherix',
  },
  {
    Icon: FaYoutube,
    url: 'https://www.youtube.com/channel/UCDk7JqZdFp2PUpOW0Ea2KKA',
  },
];

interface SocialMedia {
  Icon: IconType;
  url: string;
}

const Media: React.FC<SocialMedia> = ({ Icon, url }) => {
  return (
    <a
      className="transition duration-300 ease-out transform  hover:bg-ocean hover:scale-90"
      href={url}
    >
      <div className="w-12 h-12 bg-evening flex items-center justify-center">
        {<Icon size="1.6rem" color="#fff" />}
      </div>
    </a>
  );
};

function scrollToTop() {
  scroll.scrollToTop();
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex items-center flex-col bg-drapes relative">
      <button
        onClick={scrollToTop}
        className="group absolute -top-7 w-12 h-14 bg-giant flex items-center justify-center flex-col mb-8 transition duration-300 ease-in-out hover:bg-blood"
      >
        <FaChevronUp
          className="group-hover:animate-bounce"
          color="#fff"
          fontSize="1.2rem"
        />
        <FaChevronUp
          className="group-hover:animate-bounce"
          color="#fff"
          fontSize="1.2rem"
        />
      </button>
      <div className="flex gap-12 mb-12 mt-20 ">
        {icons.map((icon) => {
          return <Media key={icon.url} Icon={icon.Icon} url={icon.url} />;
        })}
      </div>
      <p className="text-center mb-4">
        Martin Hansson &copy;{' '}
        <span className="font-normal"> {new Date().getFullYear()}</span>
      </p>
    </div>
  );
};

export default Footer;
