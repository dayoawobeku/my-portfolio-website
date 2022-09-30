import {ReactNode} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {arrowBack, arrowBackDark} from '../../assets/images/images';
import Head from 'next/head';
import {useTheme} from 'next-themes';

interface MetaProps {
  postTitle: string;
  date: string;
  time: string;
  title: string;
  url: string;
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
      </Head>
      <div>
        <Link href="/blog">
          <a className="inline-flex items-center gap-3 mt-18">
            <Image alt="" src={theme === 'light' ? arrowBack : arrowBackDark} />
            <span className="text-2md text-grey dark:text-white">
              Back to posts
            </span>
          </a>
        </Link>
        <div className="max-w-[848px] mt-[104px] mx-auto">
          <h1 className="text-xl">{meta.postTitle}</h1>
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
    </>
  );
}
