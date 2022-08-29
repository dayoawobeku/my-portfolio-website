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
      <div className="flex items-center gap-8 flex-wrap md:flex-nowrap justify-between">
        <div className="md:max-w-[428px] lg:max-w-[568px]">
          <h2 className="text-2lg md:text-2xl font-medium md:font-normal text-grey">
            Frontend React Developer
          </h2>
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
              <Image
                alt=""
                src={theme === 'light' ? arrowLight : arrowDark}
                width={48}
                height={48}
              />
            </a>
          </Link>
        </div>
        <Image alt="" src={aboutMe} width={536} height={328} />
      </div>
    </section>
  );
}
