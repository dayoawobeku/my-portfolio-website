import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

interface Track {
  title: string;
  artist: string;
  songUrl: string;
}

const About: NextPage = () => {
  const {data: spotifyTopTracks} = useSpotifyTopTracks();

  return (
    <div>
      <Head>
        <title>Dayo Awobeku - About me</title>
        <meta
          name="title"
          property="og:title"
          content="Dayo Awobeku - About me"
        />
        <meta name="description" content="Get to know more about Dayo." />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dayoawobeku.com/about" />
        <meta property="og:title" content="Dayo Awobeku - About me" />
        <meta
          name="description"
          property="og:description"
          content="Get to know more about Dayo."
        />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665675249/website-images/og-image_lct9wy.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dayoawobeku.com/about" />
        <meta property="twitter:site" content="@dayoawobeku" />
        <meta property="twitter:title" content="Dayo Awobeku - About me" />
        <meta
          property="twitter:description"
          content="Get to know more about Dayo."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665675249/website-images/og-image_lct9wy.png"
        />
      </Head>

      <section>
        <div className="flex flex-wrap items-stretch justify-between w-full gap-8 mt-10 md:mt-20 lg:flex-nowrap">
          <div className="w-full md:w-[47.69%]">
            <Image
              src="https://res.cloudinary.com/dspbvhlt6/image/upload/v1664732973/website-images/dayo-about_k5zazt.png"
              width={557}
              height={662}
              alt="Dayo"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
              priority
            />
          </div>
          <div className="w-full lg:w-[49.32%] overflow-y-auto h-[662px] pr-4 pb-4 about-text">
            <h1 className="font-medium text-md text-grey dark:text-white-700">
              Get to know Dayo...
            </h1>
            <p className="text-md leading-[31px] text-body dark:text-grey-600 mt-8">
              Dayo is a graduate of Medical Laboratory Science at the University
              of Ibadan in Nigeria. He currently works as a Frontend Engineer at{' '}
              {''}
              <a
                href="https://dojah.io"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grey dark:text-white-800 hover:underline"
              >
                Dojah
              </a>
              , a Y Combinator startup in Nigeria, managing and working on
              several projects across the company.
            </p>
            <p className="text-md leading-[31px] text-body dark:text-grey-600 mt-8">
              At the height of the pandemic, while working at a government
              hospital in Lagos, Nigeria, he went all in self-development and
              building skills he always dreamed of having. He started learning
              to code with {''}
              <a
                href="https://www.codecademy.com/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grey dark:text-white-800 hover:underline"
              >
                Codecademy.
              </a>{' '}
              He also started learning to design beautiful interfaces from the
              YouTube channels of design experts like {''}
              <a
                href="https://www.youtube.com/c/DesignCourse"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grey dark:text-white-800 hover:underline"
              >
                Design Course,
              </a>{' '}
              <a
                href="https://www.youtube.com/c/FluxWithRanSegall"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grey dark:text-white-800 hover:underline"
              >
                {' '}
                Flux Academy,
              </a>{' '}
              and {''}
              <a
                href="https://www.youtube.com/c/JesseShowalter"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grey dark:text-white-800 hover:underline"
              >
                Jesse Showalter.
              </a>{' '}
            </p>
            <p className="text-md leading-[31px] text-body dark:text-grey-600 mt-8">
              Before working at Dojah, he worked as a contract Product Designer
              for Decasoft and Outlierz. He still designs user interfaces now
              and then, and this portfolio website is the latest in that stack.
            </p>
            <p className="text-md leading-[31px] text-body dark:text-grey-600 mt-8">
              Over the past two years as a Frontend Engineer, he's worked on
              some fascinating projects including building Dojah's 3rd version
              of their website and web app.
            </p>
            <p className="text-md leading-[31px] text-body dark:text-grey-600 mt-8">
              When he isn't working, he spends time on his Playstation or
              YouTube watching criminal investigations.
            </p>
            <p className="text-md leading-[31px] text-body dark:text-grey-600 mt-8">
              If you'd like to hire him, enquire about his rates or give him any
              kind of feedback, he'll be delighted to hear from you. He's
              hanging out a lot on {''}
              <a
                href="https://twitter.com/dayoawobeku"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grey dark:text-white-800 hover:underline"
              >
                Twitter{' '}
              </a>
              these days, and will answer all your questions through a DM if
              that is more practical for you!
            </p>
            <p className="text-md leading-[31px] text-body dark:text-grey-600 mt-8">
              If you want to learn about Javascript and web development, he has
              a blog on this website. Check it out{' '}
              <Link href="/blog">
                <a className="font-medium text-grey dark:text-white-800 hover:underline">
                  here!
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 mt-8 sm:flex-row sm:gap-9 sm:mt-10">
          <a
            href="/dayo-awobeku-resume.pdf"
            download
            className="inline-flex items-center justify-center w-full rounded-full btn"
          >
            Download my Resume
          </a>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center w-full rounded-full btn">
              Contact me
            </a>
          </Link>
        </div>
      </section>

      <section className="mt-28">
        <h2 className="font-bold text-4md">Top Tracks</h2>
        <p className="mt-4 text-md text-grey-800 dark:text-white-400">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>

        <div>
          <div className="flex flex-col gap-4 mt-6 divide-y divide-grey-800">
            {spotifyTopTracks?.tracks?.map((track: Track, index: number) => (
              <div key={index} className="flex flex-col pt-4">
                <div className="flex items-start gap-3">
                  <p className="text-[0.875rem] text-grey-400 font-bold mt-1">
                    {index + 1}
                  </p>
                  <div>
                    <Link href={track.songUrl}>
                      <a
                        className="font-medium text-grey-100 text-md"
                        target="_blank"
                      >
                        {track.title}
                      </a>
                    </Link>
                    <p className="text-base text-grey-400 dark:font-medium">
                      {track.artist}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

function useSpotifyTopTracks() {
  return useQuery(
    ['spotify-top-tracks'],
    () => axios.get('/api/spotify/top-tracks').then(res => res.data),
    {
      staleTime: 1000 * 60 * 60 * 24,
    },
  );
}
