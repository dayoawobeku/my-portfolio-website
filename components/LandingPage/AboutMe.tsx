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
            <a className="inline-flex items-center gap-4 mt-6 group">
              <span className="font-medium text-4md text-grey dark:text-white mb-1">
                Get to know more about me
              </span>
              <div className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2">
                <Image
                  alt=""
                  src={theme === 'light' ? arrowLight : arrowDark}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          </Link>
        </div>
        <Image
          alt=""
          src={aboutMe}
          width={536}
          height={350}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
        />
      </div>
    </section>
  );
}
