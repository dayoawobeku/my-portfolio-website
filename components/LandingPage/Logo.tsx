import React, {useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ThemeContext} from '../../context/ThemeContext';

export default function Logo() {
  const {theme} = useContext(ThemeContext);

  return (
    <Link href="/">
      <a className="relative h-[30.6px] w-[180px]">
        <Image
          key={theme}
          src={theme === 'light' ? '/logo-dark.svg' : '/logo-light.svg'}
          alt="Logo"
          layout="fill"
        />
      </a>
    </Link>
  );
}
