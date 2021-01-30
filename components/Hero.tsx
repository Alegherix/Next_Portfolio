import { IoChevronDown } from 'react-icons/io5';
import { SmoothScrollButton } from './SmoothScroll';
import Image from 'next/image';

function Hero() {
  return (
    <>
      <main
        className="rel flex flex-col justify-center items-center"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <Image
          className="absolute opacity-3"
          src="/hero.avif"
          layout="fill"
          alt="background image of computer and coffee"
          priority={true}
        />
        <div className="max-w-3xl z-10">
          <h1 className="text-5xl md:text-7xl text-ocean mb-6">
            Fullstack Student
          </h1>
          <p className="text-lg">
            Hello, I'm <span className="text-hearth">Martin</span>, A Webdev
            student at Yrgo based in Gothenburg.
          </p>
          <p className="mb-6 text-lg">
            {' '}
            Welcome to my site, I’m happy to have you here.
          </p>
          <SmoothScrollButton
            text="View my work "
            to="portfolio"
            Icon={IoChevronDown}
          />
        </div>
      </main>
    </>
  );
}

export default Hero;
