import React from 'react';
import { IconType } from 'react-icons';
import {
  FaChevronUp,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

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
      className="transition duration-500 ease-in-out transform  hover:bg-ocean hover:scale-90"
      href={url}
    >
      <div className="w-12 h-12 bg-evening flex items-center justify-center">
        {<Icon size="1.6rem" color="#fff" />}
      </div>
    </a>
  );
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className="flex items-center flex-col bg-drapes relative">
        <button className="absolute -top-6 w-12 h-12 bg-giant flex items-center justify-center flex-col mb-8 transition duration-300 ease-in-out hover:bg-blood">
          <FaChevronUp color="#fff" fontSize="1.2rem" />
          <FaChevronUp color="#fff" fontSize="1.2rem" />
        </button>
        <div className="flex gap-12 mb-8 mt-16 ">
          {icons.map((icon) => {
            return <Media Icon={icon.Icon} url={icon.url} />;
          })}
        </div>
        <p className="text-center">
          Martin Hansson &copy; <span> {new Date().getFullYear()}</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
