import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useTheme} from 'next-themes';
import {arrowDark, arrowLight, heroImage} from '../../assets/images/images';

export default function HeroSection() {
  const {theme} = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex items-center gap-6 flex-wrap md:flex-nowrap justify-between mt-10">
      <div className="md:max-w-[511px]">
        <h1 className="text-xl lg:text-4xl text-black dark:text-white-700">
          Hi, I'm Dayo.
        </h1>
        <h1 className="text-xl lg:text-4xl text-black dark:text-white-700">
          I build websites that your customers will love to use and pay for.
        </h1>
        <p className="mt-4 lg:mt-8 text-md lg:text-3md text-body dark:text-grey-600">
          By building value through strategic web design, people-centric digital
          experiences, and developing high-quality websites that stand out from
          the competition.
        </p>
        <Link href="/contact">
          <a className="inline-flex items-center gap-4 mt-8">
            <span className="font-medium text-4md text-grey dark:text-white">
              Contact me
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

      <Image src={heroImage} alt="Dayo" width={557} height={783} priority />
    </main>
  );
}
