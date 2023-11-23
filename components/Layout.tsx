import {ReactNode, useEffect, useState} from 'react';
import Image from 'next/image';
import type {GetStaticProps} from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {useQuery, dehydrate, QueryClient} from '@tanstack/react-query';
const {countries, zones} = require('moment-timezone/data/meta/latest.json');
import Newsletter from './Newsletter';
import {closeMenuDark, menuDark, spotifyLogo} from '../assets/images';
import {getNowPlaying} from '../lib/spotify';
const NavLinkWithNoSSR = dynamic(() => import('./NavLink'), {
  ssr: false,
});

interface Artist {
  name: string;
}

const NAV_LINKS = [
  {
    href: '/#portfolio',
    text: 'Portfolio',
  },
  // {
  //   href: '/#testimonials',
  //   text: 'Testimonials',
  // },
  {
    href: '/blog',
    text: 'Blog',
  },
  {
    href: '/about',
    text: 'About',
  },
];

interface Props {
  children?: ReactNode;
}

function Layout({children}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const {data: spotifyNowPlaying} = useQuery({
    queryKey: ['spotify-now-playing'],
    queryFn: getSpotifyNowPlaying,
    refetchInterval: 1000 * 60,
  });

  // get users city & country
  const timeZoneCityToCountry: {[key: string]: string} = {};

  Object.keys(zones).forEach(z => {
    const cityArr = z.split('/');
    const city = cityArr[cityArr.length - 1];
    timeZoneCityToCountry[city] = countries[zones[z].countries[0]].name;
  });

  let userCity;
  let userCountry;
  let userTimeZone;

  if (Intl) {
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const tzArr = userTimeZone.split('/');
    userCity = tzArr[tzArr.length - 1];
    userCountry = timeZoneCityToCountry[userCity];
  }

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

  // https://embed.im/snow/
  function letItSnow() {
    let embedimSnow = document.getElementById('embedim--snow');
    function embRand(a: number, b: number) {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    }
    if (embedimSnow) {
      embedimSnow.remove();
      return;
    }

    let embCSS =
      '.embedim-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top:-10px}.light .embedim-snow{background: #d1edff}';
    let embHTML = '';
    for (let i = 1; i < 200; i++) {
      embHTML += '<i class="embedim-snow"></i>';
      const rndX = embRand(0, 1000000) * 0.0001;
      const rndO = embRand(-100000, 100000) * 0.0001;
      const rndT = (embRand(3, 8) * 10).toFixed(2);
      const rndS = (embRand(0, 10000) * 0.0001).toFixed(2);
      embCSS +=
        `.embedim-snow:nth-child(${i}){` +
        `opacity:${(embRand(1, 10000) * 0.0001).toFixed(2)};` +
        `transform:translate(${rndX.toFixed(2)}vw,-10px) scale(${rndS});` +
        `animation:fall-${i} ${embRand(10, 30)}s -${embRand(
          0,
          30,
        )}s linear infinite` +
        '}' +
        `@keyframes fall-${i}{${rndT}%{` +
        `transform:translate(${(rndX + rndO).toFixed(
          2,
        )}vw,${rndT}vh) scale(${rndS})` +
        '}' +
        'to{' +
        `transform:translate(${(rndX + rndO / 2).toFixed(
          2,
        )}vw, 105vh) scale(${rndS})` +
        '}' +
        '}';
    }
    embedimSnow = document.createElement('div');
    embedimSnow.id = 'embedim--snow';
    embedimSnow.innerHTML = `<style>#embedim--snow{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}${embCSS}</style>${embHTML}`;
    document.body.appendChild(embedimSnow);
  }

  return (
    <div className="dark:bg-[#131920]">
      <div className="px-4 sm:px-6 xl:px-[5%]">
        <nav className="relative bg-white py-8 dark:bg-[#131920]">
          <div className="relative flex items-center justify-between">
            <Link href="/">
              <Image
                src="/logo-light.svg"
                alt="Logo"
                width={180}
                height={30.6}
                className="h-[30.6px] w-[180px]"
              />
            </Link>
            <button
              onClick={letItSnow}
              title="Snow away!"
              className="motion-safe:animate-spin-slow"
            >
              ❄️
            </button>
            <div className="flex items-center gap-6 md:gap-8">
              <button
                className="h-8 w-8 rounded-full outline-none outline-offset-4 transition-all duration-300 hover:outline-[#d1d1d1] focus:outline-[#d1d1d1] hover:dark:outline-[#EAEAEA] focus:dark:outline-[#EAEAEA] md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <Image
                    src={closeMenuDark}
                    alt="menu"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image src={menuDark} alt="menu" width={32} height={32} />
                )}
              </button>
              <div
                className={`z-50 md:hidden ${
                  menuOpen ? 'min-h-[400px]' : 'hidden h-0'
                } absolute left-4 top-20 -mx-4 flex w-full flex-col divide-y divide-grey-600 bg-white dark:divide-grey-800 dark:bg-[#131920]`}
              >
                {NAV_LINKS.map(({href, text}, index) => (
                  <NavLinkWithNoSSR
                    className="py-6 text-md font-medium"
                    key={index}
                    href={href}
                    text={text}
                    onClick={() => setMenuOpen(false)}
                  />
                ))}
                <Link
                  href="/contact"
                  className="inline-flex w-fit rounded-sm bg-grey px-6 py-4 text-md text-white outline-none outline-[3px] outline-offset-4 transition-all duration-300 hover:outline-grey focus:outline-grey dark:bg-white dark:text-grey hover:dark:outline-white-700 focus:dark:outline-white-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Let's talk
                </Link>
              </div>
              <div className="hidden items-center gap-8 text-md leading-[21.6px] text-grey dark:text-white md:flex">
                {NAV_LINKS.map(({href, text}, index) => (
                  <NavLinkWithNoSSR key={index} href={href} text={text} />
                ))}
              </div>
              <Link
                href="/contact"
                className="hidden rounded-sm bg-grey px-6 py-4 text-md text-white outline-none outline-[3px] outline-offset-4 transition-all duration-300 hover:outline-grey focus:outline-grey dark:bg-white dark:text-grey hover:dark:outline-white-700 focus:dark:outline-white-700 md:block"
              >
                Let's talk
              </Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="mt-18 pb-16 md:mt-10">
          <Newsletter />

          <div className="mt-18 flex flex-wrap justify-between gap-4">
            <div className="inline-flex items-center gap-2">
              <div className="h-4 w-4">
                <Image
                  src={spotifyLogo}
                  alt="spotify icon logo"
                  width={16}
                  height={16}
                  className={`${
                    !spotifyNowPlaying?.isPlaying
                      ? ''
                      : 'motion-safe:animate-spin-slow'
                  }`}
                />
              </div>

              {!spotifyNowPlaying?.isPlaying ? (
                <p className="text-[0.8125rem] font-medium dark:text-grey-600">
                  Not listening to anything right now
                </p>
              ) : (
                <a
                  href={spotifyNowPlaying.songUrl}
                  target="_blank"
                  className="text-[0.8125rem] font-medium hover:underline dark:text-white"
                  rel="noreferrer"
                >
                  {spotifyNowPlaying.title}, {spotifyNowPlaying.artist}
                </a>
              )}
              <p className="text-[0.8125rem] font-medium dark:text-grey-600">
                -
              </p>
              <p className="text-[0.8125rem] text-grey-800 dark:text-grey-600">
                Spotify
              </p>
            </div>
            <div className="inline-flex items-center gap-4 text-grey-800 dark:text-grey-600">
              <p>
                {userCity}, {userCountry}
              </p>
              <p>{currentTime}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-medium uppercase text-brown dark:text-grey-600">
            <p>dayo awobeku</p>
            <div className="flex items-center gap-5">
              <a
                href="mailto: dayoawobeku@gmail.com"
                className="transition-all duration-300 hover:text-danger"
              >
                mail
              </a>
              <div className="relative">
                <span className="absolute -left-3 top-1/2 h-1 w-1 rounded-full bg-brown dark:bg-grey-600" />
                <a
                  href="https://twitter.com/dayoawobeku"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 hover:text-success"
                >
                  twitter
                </a>
              </div>
              <div className="relative">
                <span className="absolute -left-3 top-1/2 h-1 w-1 rounded-full bg-brown dark:bg-grey-600" />
                <a
                  href="https://linkedin.com/in/dayoawobeku/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 hover:text-info"
                >
                  linkedin
                </a>
              </div>
              <div className="relative">
                <span className="absolute -left-3 top-1/2 h-1 w-1 rounded-full bg-brown dark:bg-grey-600" />
                <a
                  href="https://github.com/dayoawobeku/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 hover:text-body dark:hover:text-orange-400"
                >
                  github
                </a>
              </div>
            </div>
            <p>{new Date().getFullYear()} all rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;

async function getSpotifyNowPlaying() {
  const response = await getNowPlaying();
  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: Artist) => _artist.name)
    .join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return {
    isPlaying,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ['spotify-now-playing'],
    getSpotifyNowPlaying,
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
