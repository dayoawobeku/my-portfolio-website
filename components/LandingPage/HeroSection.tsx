import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {arrow, heroImage} from '../../assets/images/images';

export default function HeroSection() {
  return (
    <main className="mt-10 flex items-center justify-between">
      <div className="max-w-[511px]">
        <h1 className="text-4xl text-black">Hi, I'm Dayo.</h1>
        <h1 className="text-4xl text-black">
          I build websites that your customers will love to use and pay for.
        </h1>
        <p className="mt-8 text-3md text-body">
          By building value through strategic web design, people-centric digital
          experiences, and developing high-quality websites that stand out from
          the competition.
        </p>
        <Link href="/">
          <a className="mt-8 inline-flex items-center gap-4">
            <span className="text-4md text-grey font-medium">Contact me</span>
            <Image src={arrow} />
          </a>
        </Link>
      </div>

      <div className="w-[557px] h-[783px]">
        <Image src={heroImage} alt="Dayo" layout="responsive" priority />
      </div>
    </main>
  );
}
