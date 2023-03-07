import {ReactNode, useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import {arrowBack, arrowBackDark} from '../../assets/images';
import {ThemeContext} from '../../context/ThemeContext';

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
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>{meta.postTitle}</title>
        <meta name="title" property="og:title" content={meta.postTitle} />
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://dayoawobeku/blog/${meta.slug}`}
        />
        <meta property="og:title" content={meta.postTitle} />
        <meta
          name="description"
          property="og:description"
          content={meta.description}
        />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta name="image" property="og:image" content={meta.url} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://dayoawobeku.com/blog/${meta.slug}`}
        />
        <meta property="twitter:site" content="@dayoawobeku" />
        <meta property="twitter:title" content={meta.postTitle} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.url} />
        <link
          rel="canonical"
          href={`https://dayoawobeku.com/blog/${meta.slug}`}
          key="canonical"
        />
      </Head>

      <div>
        <Link href="/blog">
          <a className="group mt-18 inline-flex items-center gap-3">
            <div className="h-6 w-6 transition-all duration-300 group-hover:-translate-x-2">
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
        <div className="mx-auto mt-[104px] text-center">
          <h1 className="text-2lg dark:text-white-800 md:text-xl">
            {meta.postTitle}
          </h1>
          <p className="mt-6 text-2md font-medium text-body dark:text-white-400">
            {meta.date} - {meta.time}
          </p>
        </div>
        <div className="relative my-14 h-[576px] w-full">
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
        <div className="mx-auto max-w-[848px]">{children}</div>
      </div>
    </>
  );
}
