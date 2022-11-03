import React from 'react';
import {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTheme} from 'next-themes';
import {posts} from '../../data/posts';
import {arrowLight} from '../../assets/images/images';

const Blog: NextPage = () => {
  const {theme} = useTheme();

  const allPosts = posts.map(item => item);

  const firstPost = allPosts?.shift();

  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Head>
        <title>Dayo Awobeku's Blog</title>
        <meta name="title" property="og:title" content="Dayo Awobeku's Blog" />
        <meta
          name="description"
          content="Learn web development and get to know more about me here."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dayoawobeku.com/blog" />
        <meta property="og:title" content="Dayo Awobeku's Blog" />
        <meta
          name="description"
          property="og:description"
          content="Learn web development and get to know more about me here."
        />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665675249/website-images/og-image_lct9wy.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dayoawobeku.com/blog" />
        <meta property="twitter:site" content="@dayoawobeku" />
        <meta property="twitter:title" content="Dayo Awobeku's Blog" />
        <meta
          property="twitter:description"
          content="Learn web development and get to know more about me here."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665675249/website-images/og-image_lct9wy.png"
        />
      </Head>

      <div className="mt-10 flex basis-full flex-wrap items-center justify-between gap-4 md:mt-20 md:flex-nowrap lg:gap-8">
        <h1 className="mb-10 text-2lg text-grey dark:text-white md:basis-2/3 md:text-2xl lg:max-w-lg lg:basis-auto lg:text-4xl">
          Learn web development and get to know more about me here.
        </h1>
        <div className="h-[387px] w-[506px]">
          <Image
            src={
              theme === 'light'
                ? 'https://res.cloudinary.com/dspbvhlt6/image/upload/v1664664933/website-images/blog-hero_hxpyqo.svg'
                : 'https://res.cloudinary.com/dspbvhlt6/image/upload/v1664664933/website-images/blog-hero-dark_b5o1xe.svg'
            }
            alt="illustration of someone reading a book"
            width={506}
            height={387}
            layout="responsive"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
          />
        </div>
      </div>

      <div className="mt-20 rounded bg-white-700 outline-none outline-[3px] outline-offset-4 transition-all duration-300 hover:outline-info">
        <Link href={`/blog/${firstPost?.slug}`}>
          <a className="group flex items-center justify-between p-6 md:p-20">
            <article>
              <p className="text-md font-medium text-grey">Featured article</p>
              <h2 className="mt-6 max-w-lg text-2lg text-grey md:mt-8 md:text-xl md:leading-[56px]">
                {firstPost?.postTitle}
              </h2>
              <p className="mt-6 text-3md font-medium text-body md:mt-8">
                {firstPost?.date} - {firstPost?.time}
              </p>
              <div className="mt-10 inline-flex items-center gap-4 md:mt-16">
                <span className="mb-1 text-4md font-medium text-grey">
                  Read full article
                </span>
                <div className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2">
                  <Image
                    alt=""
                    src={arrowLight}
                    width={20}
                    height={20}
                    layout="fixed"
                  />
                </div>
              </div>
            </article>
            <div className="relative hidden h-[401px] w-[342px] md:block">
              {firstPost?.imageUrl && (
                <Image
                  alt={firstPost?.imageDescription}
                  src={firstPost?.imageUrl}
                  layout="fill"
                  objectFit="cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
                />
              )}
            </div>
          </a>
        </Link>
      </div>
      <div className="mt-8 flex flex-col gap-8 sm:mt-16 sm:gap-16">
        {allPosts.map((post, i) => (
          <Link href={`/blog/${post.slug}`} key={i} passHref>
            <a className="group rounded outline-none outline-[3px] outline-offset-4 transition-all duration-300 hover:outline-info">
              <article className="flex items-center gap-10 rounded bg-white-800 py-6 pl-4 pr-10 sm:h-80 sm:py-0 sm:pl-0">
                <div className="relative hidden h-80 w-[389px] sm:block">
                  <Image
                    alt={post.imageDescription}
                    src={post.imageUrl}
                    width={389}
                    height={320}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-l"
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
                  />
                </div>

                <div className="flex flex-col gap-4 sm:gap-8">
                  <p className="text-2md font-medium text-body dark:text-grey-400">
                    {post.date} - <span>{post.time}</span>
                  </p>
                  <h3 className="max-w-[530px] text-lg font-medium text-grey dark:text-grey-800">
                    {post.postTitle}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-fit text-base font-medium text-grey">
                      Continue reading
                    </span>
                    <div className="h-4 w-4 transition-all duration-300 group-hover:translate-x-2">
                      <Image
                        alt=""
                        src={arrowLight}
                        width={16}
                        height={16}
                        layout="fixed"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
