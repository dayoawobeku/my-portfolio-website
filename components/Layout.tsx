import React, {ReactNode} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {darkMode, logo} from '../assets/images/images';

interface Props {
  children?: ReactNode;
}

function Layout({children}: Props) {
  return (
    <div className="max-w-[1168px] mx-auto px-4">
      <nav className="py-8 flex items-center justify-between">
        <Link href="/">
          <a className="leading-none">
            <Image src={logo} alt="logo" width={169} height={30} priority />
          </a>
        </Link>

        <div className="flex items-center gap-8">
          <Image
            src={darkMode}
            alt="mode"
            className="cursor-pointer"
            priority
          />
          <div className="flex items-center gap-5 text-md text-grey">
            <Link href="/">Testimonials</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
          </div>
          <Link href="/">
            <a>
              <button className="px-6 py-4 text-md text-white bg-grey rounded-sm">
                Let's talk
              </button>
            </a>
          </Link>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="flex items-center justify-between uppercase text-brown font-medium mb-16">
        <p>dayo awobeku</p>
        <div className="flex items-center gap-5 underline">
          <a href="/">mail</a>
          <div className="relative">
            <span className="absolute h-1 w-1 bg-brown rounded-full -left-3 top-1/2" />
            <a href="/">twitter</a>
          </div>
          <div className="relative">
            <span className="absolute h-1 w-1 bg-brown rounded-full -left-3 top-1/2" />
            <a href="/">linkedin</a>
          </div>
        </div>
        <p>2022 all rights reserved</p>
      </footer>
    </div>
  );
}

export default Layout;
