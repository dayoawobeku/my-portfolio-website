import {ReactNode} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {arrowBack, arrowBackDark} from '../../assets/images/images';
import Head from 'next/head';
import {useTheme} from 'next-themes';
import PagesLayout from '../Layout';

interface MetaProps {
  postTitle: string;
  date: string;
  time: string;
  title: string;
  url: string;
  description: string;
  slug: string;
}

interface Props {
  children?: ReactNode;
  meta: MetaProps;
}

export default function Layout({meta, children}: Props) {
  const {theme} = useTheme();

  return (
    <>
      <Head>
        <title>{meta.postTitle}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://dayoawobeku/blog/${meta.slug}`}
        />
        <meta property="og:title" content={meta.postTitle} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta property="og:image" content={meta.url} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://dayoawobeku.com/blog/${meta.slug}`}
        />
        <meta property="twitter:site" content="@dayoawobeku" />
        <meta property="twitter:title" content={meta.postTitle} />
        <meta property="twitter:description" content={meta.description} />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665066117/website-images/og-image_awxqmx.png"
        />
      </Head>

      <PagesLayout>
        <div>
          <Link href="/blog">
            <a className="inline-flex items-center gap-3 mt-18 group">
              <div className="w-6 h-6 transition-all duration-300 group-hover:-translate-x-2">
                <Image
                  alt=""
                  src={theme === 'light' ? arrowBack : arrowBackDark}
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-2md text-grey dark:text-white">
                Back to posts
              </span>
            </a>
          </Link>
          <div className="mt-[104px] mx-auto text-center">
            <h1 className="text-2lg md:text-xl">{meta.postTitle}</h1>
            <p className="mt-6 font-medium text-2md text-body dark:text-white-400">
              {meta.date} - {meta.time}
            </p>
          </div>
          <div className="my-14 w-full h-[576px] relative">
            <Image
              alt={meta.title}
              priority
              src={meta.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              className="rounded"
              title={meta.title}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
            />
          </div>
          <div className="max-w-[848px] mx-auto">{children}</div>
        </div>
      </PagesLayout>
    </>
  );
}
