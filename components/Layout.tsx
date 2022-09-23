import {ReactNode, useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useTheme} from 'next-themes';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Newsletter from './Newsletter';
import {
  darkMode,
  lightMode,
  menuDark,
  menuLight,
  spotifyLogo,
} from '../assets/images/images';

const NAV_LINKS = [
  {
    href: '/#testimonials',
    text: 'Testimonials',
  },
  {
    href: '/#portfolio',
    text: 'Portfolio',
  },
  {
    href: '/blog',
    text: 'Blog',
  },
  {
    href: '/about',
    text: 'About',
  },
];

interface NavLinkProps {
  href: string;
  text: string;
}

function NavLink({href = '', text}: NavLinkProps) {
  const {theme} = useTheme();
  return (
    <Link href={href} passHref shallow>
      <a
        className={`nav-link ${
          theme === 'light' ? 'before:bg-grey' : 'before:bg-white-800'
        }`}
      >
        {text}
      </a>
    </Link>
  );
}

interface Props {
  children?: ReactNode;
}

function Layout({children}: Props) {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
      hourCycle: 'h23',
    }),
  );

  const {data: spotifyNowPlaying} = useSpotifyNowPlaying();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hourCycle: 'h23',
        }),
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="dark:bg-[#131920]">
      <div className="max-w-[1168px] mx-auto px-4">
        <nav className="flex items-center justify-between py-8">
          <Link href="/">
            <a className="font-medium text-grey dark:text-white-800 text-5md">
              Dayo Awobeku
            </a>
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <button
              className="w-10 h-10 outline-none outline-offset-4 transition-all duration-300 focus:outline-[#d1d1d1] hover:outline-[#d1d1d1] focus:dark:outline-[#EAEAEA] hover:dark:outline-[#EAEAEA] rounded-full"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              title={
                theme === 'light' ? 'Activate dark mode' : 'Activate light mode'
              }
            >
              <Image
                src={theme === 'light' ? darkMode : lightMode}
                alt="mode"
                className="cursor-pointer"
                width={40}
                height={40}
                priority
              />
            </button>
            <button className="w-8 h-8 md:hidden">
              <Image
                src={theme === 'light' ? menuLight : menuDark}
                alt=""
                width={32}
                height={32}
              />
            </button>
            <div className="hidden md:flex items-center gap-5 text-md leading-[21.6px] text-grey dark:text-white">
              {NAV_LINKS.map(({href, text}, index) => (
                <NavLink key={index} href={href} text={text} />
              ))}
            </div>
            <Link href="/contact">
              <button className="hidden md:block px-6 py-4 text-white rounded-sm dark:text-grey text-md bg-grey dark:bg-white outline-none outline-offset-4 transition-all outline-[3px] duration-300 focus:outline-grey hover:outline-grey hover:dark:outline-white-700 focus:dark:outline-white-700">
                Let's talk
              </button>
            </Link>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="pb-16 mt-18 md:mt-40">
          <Newsletter />

          <div className="flex justify-between gap-2 flex-wrap mt-18">
            <div className="inline-flex items-center gap-2">
              <Image
                src={spotifyLogo}
                alt="spotify icon logo"
                width={16}
                height={16}
              />

              {!spotifyNowPlaying?.isPlaying ? (
                <p className="font-medium">Not Playing</p>
              ) : (
                <Link href={spotifyNowPlaying.songUrl}>
                  <a target="_blank" className="font-medium hover:underline">
                    {spotifyNowPlaying.title}, {spotifyNowPlaying.artist}
                  </a>
                </Link>
              )}
              <p className="font-medium">-</p>
              <p className="text-grey-800 dark:text-grey-600">Spotify</p>
            </div>
            <div className="inline-flex items-center gap-2 text-grey-800 dark:text-grey-600">
              <p>{Intl.DateTimeFormat().resolvedOptions().timeZone},</p>
              <p>{currentTime}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 font-medium uppercase text-brown mt-10 dark:text-grey-600">
            <p>dayo awobeku</p>
            <div className="flex items-center gap-5 underline">
              <a
                href="mailto: dayoawobeku@gmail.com"
                className="hover:text-danger transition-all duration-300"
              >
                mail
              </a>
              <div className="relative">
                <span className="absolute w-1 h-1 rounded-full bg-brown dark:bg-grey-600 -left-3 top-1/2" />
                <a
                  href="https://twitter.com/dayoawobeku"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-success transition-all duration-300"
                >
                  twitter
                </a>
              </div>
              <div className="relative">
                <span className="absolute w-1 h-1 rounded-full bg-brown dark:bg-grey-600 -left-3 top-1/2" />
                <a
                  href="https://linkedin.com/in/dayoawobeku/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-info transition-all duration-300"
                >
                  linkedin
                </a>
              </div>
            </div>
            <p>2022 all rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;

function useSpotifyNowPlaying() {
  return useQuery(
    ['spotify-now-playing'],
    () => axios.get('/api/spotify/now-playing').then(res => res.data),
    {
      refetchInterval: 1000 * 60,
    },
  );
}
