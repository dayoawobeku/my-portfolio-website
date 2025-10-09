import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import {useQuery, dehydrate, QueryClient} from '@tanstack/react-query';
import {getTopTracks} from '../lib/spotify';

interface Artist {
  name: string;
}

interface Track {
  external_urls: Record<string, unknown>;
  name: string;
  artists: Artist[];
}

interface Track {
  title: string;
  artist: string;
  songUrl: string;
}

const About: NextPage = () => {
  const {data: spotifyTopTracks} = useQuery({
    queryKey: ['spotify-top-tracks'],
    queryFn: getSpotifyTopTracks,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return (
    <div className="pb-20 lg:px-[16%]">
      <Head>
        <title>About Dayo Awobeku</title>
        <meta
          name="title"
          property="og:title"
          content="Dayo Awobeku - About me"
        />
        <meta name="description" content="Get to know more about Dayo." />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dedywga3v/image/upload/v1700732816/favicon_pcbddk.png"
        />
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
          content="https://res.cloudinary.com/dedywga3v/image/upload/v1700571149/meta_image_dwxlym.png"
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
          content="https://res.cloudinary.com/dedywga3v/image/upload/v1700571149/meta_image_dwxlym.png"
        />
      </Head>

      <section className="mt-8 md:mt-20">
        <h1 className="text-2lg font-bold text-white lg:text-xl">
          Hi, I'm Dayo.
        </h1>
        <p className="mt-4 text-grey-600 md:text-md">
          I'm a frontend engineer with a background in product design.
        </p>
        <div className="mt-8 w-full">
          <p className="text-body dark:text-grey-600 md:text-md">
            I studied Medical Laboratory Science at the University of Ibadan,
            Nigeria, but I found my passion in building software. My journey
            into the tech world began with a simple yet magical idea: building
            "our" own games. From that moment, I was hooked.
          </p>
          <p className="mt-8 text-body dark:text-grey-600 md:text-md">
            Today, I'm a bit of a unicorn. I'm a frontend engineer but I also
            identify as a product designer. I'm a designer who codes. I'm an
            engineer who designs. I learned how to code because I wanted to
            build things that people would love to use. And I learned how to
            design because I wanted to be involved in the entire product
            development process.
          </p>
          <p className="mt-8 text-body dark:text-grey-600 md:text-md">
            And even though I no longer practice as a medical professional (I
            failed you, mom 😅), I still find myself applying the same
            principles of research and experimentation to my work as an
            engineer.
          </p>
        </div>
        <p className="mt-8 text-body dark:text-grey-600 md:text-md">
          I've shipped products at{' '}
          <a
            href="https://casperstudios.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey hover:underline dark:text-white-800"
          >
            Casper Studios
          </a>
          ,{' '}
          <a
            href="https://moniepoint.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey hover:underline dark:text-white-800"
          >
            Moniepoint
          </a>
          , and{' '}
          <a
            href="https://dojah.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey hover:underline dark:text-white-800"
          >
            Dojah (YC W22)
          </a>{' '}
          . Beyond client work, I've built open-source projects like{' '}
          <a
            href="https://albumcolors.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey hover:underline dark:text-white-800"
          >
            Album Colors {''}
          </a>
          and{' '}
          <a
            href="https://sitesnap.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey hover:underline dark:text-white-800"
          >
            Sitesnap
          </a>
          , tools now used by thousands, and I also write technical articles and
          mentor developers.
        </p>
        <p className="mt-8 text-body dark:text-grey-600 md:text-md">
          I work across the full stack: JavaScript, TypeScript, React, Next.js,
          Tailwind CSS, and Node.js on the engineering side, and Figma, design
          systems, and user research on the product side. What matters most to
          me is building inclusive, intuitive experiences that actually solve
          problems.
        </p>
        <p className="mt-8 text-body dark:text-grey-600 md:text-md">
          When I'm not coding, you can find me playing FIFA (yes, I still call
          it FIFA), listening to music, reading self-help books, or helping
          other engineers solve problems on Discord. I'm also working on
          learning the acoustic guitar. My logic: if I can learn to code, I can
          learn to play. (Still working on that logic.). Whether it's web
          development, design, or just a friendly chat about coding and music,
          feel free to connect with me on{' '}
          <a
            href="https://twitter.com/dayoawobeku"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-grey hover:underline dark:text-white-800"
          >
            Twitter
          </a>{' '}
          or shoot me an{' '}
          <a
            href="mailto: dayoawobeku@gmail.com"
            className="font-medium text-grey hover:underline dark:text-white-800"
          >
            email
          </a>
          .
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-4md font-bold dark:text-white-800">Top Tracks</h2>
        <p className="mt-4 text-grey-800 dark:text-white-400 md:text-md">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>

        <div>
          <div className="mt-6 flex flex-col gap-4 divide-y divide-grey-800">
            {spotifyTopTracks?.map((track: Track, index: number) => (
              <div key={index} className="flex flex-col pt-4">
                <div className="flex items-start gap-3">
                  <p className="mt-1 text-[0.875rem] font-bold text-grey-400">
                    {index + 1}
                  </p>
                  <div>
                    <a
                      href={track.songUrl}
                      className="text-grey-100"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {track.title}
                    </a>
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

async function getSpotifyTopTracks() {
  const response = await getTopTracks();
  const {items} = await response.json();

  const tracks = items.slice(0, 10).map((track: Track) => ({
    artist: track.artists.map((_artist: Artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return tracks;
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['spotify-top-tracks'], getSpotifyTopTracks);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
