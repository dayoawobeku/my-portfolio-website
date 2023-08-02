import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1690995706/meta_image_ggiapp.png"
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
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1690995706/meta_image_ggiapp.png"
        />
      </Head>

      <section>
        <div className="mt-10 flex w-full flex-wrap items-stretch justify-between gap-8 md:mt-20 lg:flex-nowrap">
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
          <div className="about-text h-[662px] w-full overflow-y-auto pr-4 pb-4 lg:w-[49.32%]">
            <p className="text-md leading-[31px] text-body dark:text-grey-600">
              Hey there! I'm Dayo, a passionate Frontend Developer with a knack
              for creating websites and web applications that captivate and
              engage users.
            </p>
            <p className="mt-8 text-md leading-[31px] text-body dark:text-grey-600">
              My journey into the tech world began with a simple yet magical
              idea: building "our" own games. From that moment, I was hooked.
            </p>
            <p className="mt-8 text-md leading-[31px] text-body dark:text-grey-600">
              Over the years, I've honed my skills, becoming proficient in
              JavaScript, React.js, Next.js, Gatsby, SCSS, and TypeScript. Armed
              with this toolkit, I transform visions into reality, crafting
              pixel-perfect, high-quality applications.
            </p>
            <p className="mt-8 text-md leading-[31px] text-body dark:text-grey-600">
              With 3 years of industry experience under my belt, I've worked on
              fascinating projects, including building Dojah's 3rd version of
              their{' '}
              <a
                href="https://dojah.io"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grey hover:underline dark:text-white-800"
              >
                website
              </a>{' '}
              and{' '}
              <a
                href="https://app.dojah.io"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grey hover:underline dark:text-white-800"
              >
                web app.
              </a>{' '}
              {''}
            </p>
            <p className="mt-8 text-md leading-[31px] text-body dark:text-grey-600">
              As a dedicated developer, I prioritize user experience and
              meticulously craft each line of code. Recently, I found joy in
              contributing to open-source projects, fostering creativity, and
              curating an innovative collection of African websites at{' '}
              <a
                href="https://sitesnap.design"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-grey hover:underline dark:text-white-800"
              >
                Sitesnap.
              </a>{' '}
              Beyond creating impressive interfaces, I actively incorporate web
              accessibility principles into my work, making technology a bridge
              of connection for all.
            </p>
            <p className="mt-8 text-md leading-[31px] text-body dark:text-grey-600">
              My passion extends to the transformative potential of AI. I love
              exploring powerful, user-centric solutions, leveraging
              cutting-edge technologies to unlock new possibilities for digital
              experiences.
            </p>
            <p className="mt-8 text-md leading-[31px] text-body dark:text-grey-600">
              With a background in healthcare, I've learned the importance of
              precision and effective communication. This unique blend of skills
              ensures I consistently deliver seamless, intuitive, and
              pixel-perfect implementations.
            </p>
            <p className="mt-8 text-md leading-[31px] text-body dark:text-grey-600">
              When I'm not coding, you can find me indulging in video games on
              my PlayStation or diving into intriguing criminal investigations
              on YouTube. I'm always open to feedback, answering questions, or
              discussing exciting new projects. Connect with me on{' '}
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
              !
            </p>
            <p className="mt-8 text-md leading-[31px] text-body dark:text-grey-600">
              If you're looking for a frontend developer who started with the
              dream of creating games and now stands ready to create exceptional
              user experiences, let's collaborate and explore the endless
              possibilities that lie ahead. The best is yet to come!
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-6 sm:mt-10 sm:flex-row sm:gap-9">
          <a
            href="/dayo-awobeku-resume.pdf"
            download
            className="btn inline-flex w-full items-center justify-center rounded-full"
          >
            Download my Resume
          </a>
          <Link href="/contact">
            <a className="btn inline-flex w-full items-center justify-center rounded-full">
              Contact me
            </a>
          </Link>
        </div>
      </section>

      <section className="mt-28">
        <h2 className="text-4md font-bold dark:text-white-800">Top Tracks</h2>
        <p className="mt-4 text-md text-grey-800 dark:text-white-400">
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
                    <Link href={track.songUrl}>
                      <a
                        className="text-md font-medium text-grey-100"
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
