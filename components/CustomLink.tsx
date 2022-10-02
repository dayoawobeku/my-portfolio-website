import Link from 'next/link';
import Image from 'next/image';
import {useTheme} from 'next-themes';
import {arrowDark, arrowLight} from '../assets/images/images';

interface Props {
  href?: string;
  externalUrl?: string;
  text: string;
}

export default function CustomLink({href = '', externalUrl = '', text}: Props) {
  const {theme} = useTheme();
  if (href) {
    return (
      <Link href={href} passHref>
        <a className="inline-flex items-center gap-4 mt-8 group">
          <span className="font-medium text-4md text-grey dark:text-white mb-1">
            {text}
          </span>
          <div className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2">
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
      className="inline-flex items-center gap-4 mt-8 group"
    >
      <span className="font-medium text-4md text-grey dark:text-white underline mb-1">
        {text}
      </span>
      <div className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2">
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
