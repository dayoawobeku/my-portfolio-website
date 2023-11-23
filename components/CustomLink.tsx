import Link from 'next/link';
import Image from 'next/image';
import {arrowDark} from '../assets/images';

interface Props {
  href?: string;
  externalUrl?: string;
  text: string;
}

export default function CustomLink({href = '', externalUrl = '', text}: Props) {
  if (href) {
    return (
      <Link
        href={href}
        passHref
        className="group inline-flex w-fit items-center gap-4"
      >
        <span className="mb-1 font-medium text-grey dark:text-white lg:text-2md">
          {text}
        </span>
        <div className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2">
          <Image
            alt=""
            src={arrowDark}
            width={20}
            height={20}
            className="h-full w-full"
          />
        </div>
      </Link>
    );
  }
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-4"
    >
      <span className="mb-1 text-md font-medium text-grey underline dark:text-white">
        {text}
      </span>
      <div className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2">
        <Image
          alt=""
          src={arrowDark}
          width={20}
          height={20}
          className="h-full w-full"
        />
      </div>
    </a>
  );
}
