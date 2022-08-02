import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {arrow, heroImage} from '../../assets/images/images';

export default function HeroSection() {
  return (
    <main className="flex items-center justify-between mt-10">
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
        <Link href="/contact">
          <a className="inline-flex items-center gap-4 mt-8">
            <span className="font-medium text-4md text-grey">Contact me</span>
            <Image alt="" src={arrow} width={48} height={48} />
          </a>
        </Link>
      </div>

      <div className="w-[557px] h-[783px]">
        <Image src={heroImage} alt="Dayo" layout="responsive" priority />
      </div>
    </main>
  );
}
