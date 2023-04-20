import Link from 'next/link';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

interface NavLinkProps {
  href: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({
  href = '',
  text,
  className,
  onClick,
}: NavLinkProps) {
  const {theme} = useContext(ThemeContext);
  return (
    <Link href={href} passHref shallow>
      <a
        className={`nav-link ${className} ${
          theme === 'light'
            ? 'before:bg-grey'
            : 'text-white-800 before:bg-white-800'
        }`}
        onClick={onClick}
      >
        {text}
      </a>
    </Link>
  );
}
