import {ReactNode} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import {arrowBackDark} from '../../assets/images';

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
  return (
    <>
      <Head>
        <title>{meta.postTitle}</title>
        <meta name="title" property="og:title" content={meta.postTitle} />
        <meta name="description" content={meta.description} />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dedywga3v/image/upload/v1700732816/favicon_pcbddk.png"
        />
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
        <Link
          href="/blog"
          className="group mt-18 inline-flex items-center gap-3"
        >
          <div className="h-6 w-6 transition-all duration-300 group-hover:-translate-x-2">
            <Image alt="" src={arrowBackDark} width={24} height={24} />
          </div>
          <span className="text-grey dark:text-white sm:text-2md">
            Back to posts
          </span>
        </Link>
        <div className="mx-auto mt-16 max-w-[800px] text-center sm:mt-[104px]">
          <h1 className="text-4md font-bold dark:text-white-800 sm:text-2lg md:text-xl">
            {meta.postTitle}
          </h1>
          <p className="mt-6 font-medium text-body dark:text-white-400 sm:text-2md">
            {meta.date} - {meta.time}
          </p>
        </div>
        <div className="relative my-14 h-[576px] w-full">
          <Image
            alt={meta.title}
            priority
            src={meta.url}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            title={meta.title}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-[848px] pb-20">{children}</div>
      </div>
    </>
  );
}
