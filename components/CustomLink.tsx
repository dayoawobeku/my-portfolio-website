import {useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {arrowDark, arrowLight} from '../assets/images';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  href?: string;
  externalUrl?: string;
  text: string;
}

export default function CustomLink({href = '', externalUrl = '', text}: Props) {
  const {theme} = useContext(ThemeContext);
  if (href) {
    return (
      <Link href={href} passHref>
        <a className="group mt-8 inline-flex items-center gap-4">
          <span className="mb-1 text-4md font-medium text-grey dark:text-white">
            {text}
          </span>
          <div className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2">
            <Image
              alt=""
              src={theme === 'light' ? arrowLight : arrowDark}
              width={20}
              height={20}
              layout="fixed"
            />
          </div>
        </a>
      </Link>
    );
  }
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-8 inline-flex items-center gap-4"
    >
      <span className="mb-1 text-4md font-medium text-grey underline dark:text-white">
        {text}
      </span>
      <div className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2">
        <Image
          alt=""
          src={theme === 'light' ? arrowLight : arrowDark}
          width={20}
          height={20}
          layout="fixed"
        />
      </div>
    </a>
  );
}
