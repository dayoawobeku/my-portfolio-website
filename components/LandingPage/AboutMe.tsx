import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {aboutMe, arrowDark, arrowLight} from '../../assets/images/images';
import {useTheme} from 'next-themes';

export default function AboutMe() {
  const {theme} = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-18">
      <div className="flex flex-wrap items-center justify-between gap-8 md:flex-nowrap">
        <div className="md:max-w-[428px] lg:max-w-[568px]">
          <h2 className="font-medium text-2lg md:text-2xl md:font-normal text-grey dark:text-white-700">
            Frontend React Developer
          </h2>
          <p className="mt-6 text-body dark:text-grey-600 text-2md">
            Hello again! I'm Dayo Awobeku.
          </p>
          <p className="mt-4 text-body dark:text-grey-600 text-2md">
            I love creating, designing, and developing wow projects that drive
            businesses forward.
          </p>
          <Link href="/about">
            <a className="inline-flex items-center gap-4 mt-6">
              <span className="font-medium text-4md text-grey dark:text-white">
                Get to know more about me
              </span>
              <Image
                alt=""
                src={theme === 'light' ? arrowLight : arrowDark}
                width={48}
                height={48}
              />
            </a>
          </Link>
        </div>
        <Image alt="" src={aboutMe} width={536} height={350} />
      </div>
    </section>
  );
}
