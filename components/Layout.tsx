import React, {ReactNode} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {darkMode, logo} from '../assets/images/images';
import Newsletter from './Newsletter';

interface Props {
  children?: ReactNode;
}

function Layout({children}: Props) {
  return (
    <div className="max-w-[1168px] mx-auto px-4">
      <nav className="flex items-center justify-between py-8">
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
            width={40}
            height={40}
            priority
          />
          <div className="flex items-center gap-5 text-md leading-[21.6px] text-grey">
            <Link href="/">Testimonials</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/">About</Link>
          </div>
          <Link href="/contact">
            <a>
              <button className="px-6 py-4 text-white rounded-sm text-md bg-grey">
                Let's talk
              </button>
            </a>
          </Link>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="mt-40 mb-16">
        <Newsletter />
        <div className="flex items-center justify-between font-medium uppercase mt-18 text-brown">
          <p>dayo awobeku</p>
          <div className="flex items-center gap-5 underline">
            <a href="mailto: dayoawobeku@gmail.com">mail</a>
            <div className="relative">
              <span className="absolute w-1 h-1 rounded-full bg-brown -left-3 top-1/2" />
              <a
                href="https://twitter.com/dayoawobeku"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
            <div className="relative">
              <span className="absolute w-1 h-1 rounded-full bg-brown -left-3 top-1/2" />
              <a
                href="https://linkedin.com/in/dayoawobeku/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </div>
          </div>
          <p>2022 all rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
