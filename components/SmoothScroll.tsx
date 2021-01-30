import { Link } from 'react-scroll';
import { IconType } from 'react-icons/lib';

interface IScrollTo {
  text: string;
  to: string;
}

interface IScrollToButton extends IScrollTo {
  Icon: IconType;
}

export const SmoothScroll: React.FC<IScrollTo> = ({ text, to }) => {
  return (
    <li>
      <Link
        className="cursor-pointer p-2 hover:underline"
        to={to}
        smooth={true}
        duration={500}
      >
        {text}
      </Link>
    </li>
  );
};

export const SmoothScrollButton: React.FC<IScrollToButton> = ({
  text,
  to,
  Icon,
}) => {
  return (
    <Link className="cursor-pointer p-2" to={to} smooth={true} duration={500}>
      <button className="group btn px-4 py-2 flex items-center gap-4">
        {text}
        <Icon className="group-hover:animate-bouncy" size="1.2rem" />
      </button>
    </Link>
  );
};
