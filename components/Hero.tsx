import { IoChevronDown } from 'react-icons/io5';
import { SmoothScrollButton } from './SmoothScroll';
import Image from 'next/image';

function Hero() {
  return (
    <main
      className="flex flex-col justify-center items-center"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <Image
        className="absolute opacity-3"
        src="/hero.jpg"
        layout="fill"
        priority={true}
      />
      <div className="max-w-3xl z-10">
        <h1 className="text-5xl md:text-8xl text-ocean mb-6">Who am I?</h1>
        <p className="mb-6 leading-8">
          My name is Martin, I’m a Webdev student currently studying at{' '}
          <span className="text-hearth">Yrgo</span>. At heart I’m a tech nerd
          who loves building new and exciting projects! I spend most of my spare
          time coding on hobby projects and learning new technologies. As for
          favorite tech, I’m very passionate about <span>GraphQL</span>,
          <span>JAMstack</span> and <span>Serverless</span>.
        </p>
        <SmoothScrollButton
          text="View my work "
          to="portfolio"
          Icon={IoChevronDown}
        />
      </div>
    </main>
  );
}

export default Hero;
