import React from 'react';
import { IconType } from 'react-icons';
import {
  FaChevronUp,
  FaCodepen,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const icons: SocialMedia[] = [
  {
    Icon: FaLinkedinIn,
    url: 'https://www.linkedin.com/in/martin-hansson-7b4875204/',
    label: 'LinkedIn',
  },
  {
    Icon: FaGithub,
    url: 'https://github.com/Alegherix',
    label: 'Github',
  },
  {
    Icon: FaInstagram,
    url: 'https://instagram.com/Alegherix',
    label: 'Instagram',
  },
  {
    Icon: FaCodepen,
    url: 'https://codepen.io/alegherix',
    label: 'Codepen',
  },
];

interface SocialMedia {
  Icon: IconType;
  url: string;
  label: string;
}

const Media: React.FC<SocialMedia> = ({ Icon, url, label }) => {
  return (
    <a
      className="transition duration-300 ease-out transform  hover:bg-ocean hover:scale-90"
      href={url}
      aria-label={label}
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

const Footer: React.FC = () => {
  return (
    <div className="flex items-center flex-col bg-drapes relative">
      <button
        onClick={scrollToTop}
        aria-label="Back to Nav"
        className=" absolute -top-7 w-12 h-14 bg-giant flex items-center justify-center flex-col mb-8 transition duration-300 ease-in-out hover:bg-blood"
      >
        <FaChevronUp color="#fff" fontSize="1.2rem" />
        <FaChevronUp color="#fff" fontSize="1.2rem" />
      </button>
      <div className="flex gap-12 mb-12 mt-20 ">
        {icons.map((icon) => {
          return (
            <Media
              key={icon.url}
              Icon={icon.Icon}
              url={icon.url}
              label={icon.label}
            />
          );
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
