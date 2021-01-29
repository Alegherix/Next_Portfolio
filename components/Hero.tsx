import { IoChevronDown } from 'react-icons/io5';

function Hero() {
  return (
    <main
      className="flex flex-col justify-center items-center"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-8xl text-ocean mb-6">Who am I?</h1>
        <p className="mb-6 leading-8">
          My name is Martin, I’m a Webdev student currently studying at{' '}
          <span className="text-hearth">Yrgo</span>. At heart I’m a tech nerd
          who loves building new and exciting projects! I spend most of my spare
          time coding on hobby projects and learning new technologies. As for
          favorite tech, I’m very passionate about <span>GraphQL</span>,
          <span>JAMstack</span> and <span>Serverless</span>.
        </p>
        <button className="btn px-4 py-2 flex items-center gap-4">
          View my work <IoChevronDown size="1.5rem" />
        </button>
      </div>
    </main>
  );
}

export default Hero;
