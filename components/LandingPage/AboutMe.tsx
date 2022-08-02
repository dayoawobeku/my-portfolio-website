import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {aboutMe, arrow} from '../../assets/images/images';

export default function AboutMe() {
  return (
    <section className="py-18">
      <div className="flex items-center justify-between">
        <div className="max-w-[568px]">
          <h2 className="text-2xl text-grey">Frontend React Developer</h2>
          <p className="mt-6 text-body text-2md">
            Hello again! I'm Dayo Awobeku.
          </p>
          <p className="mt-4 text-body text-2md">
            I love creating, designing, and developing wow projects that drive
            businesses forward.
          </p>
          <Link href="/">
            <a className="inline-flex items-center gap-4 mt-6">
              <span className="font-medium text-4md text-grey">
                Get to know more about me
              </span>
              <Image alt="" src={arrow} width={48} height={48} />
            </a>
          </Link>
        </div>
        <Image alt="" src={aboutMe} width={536} height={328} />
      </div>
    </section>
  );
}
