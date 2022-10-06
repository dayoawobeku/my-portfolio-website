import React, {useState, useEffect} from 'react';
import {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useTheme} from 'next-themes';
import {useRouter} from 'next/router';
import {posts} from '../../data/posts';
import {arrowLight} from '../../assets/images/images';
import Layout from '../../components/Layout';

const Blog: NextPage = () => {
  const {theme} = useTheme();

  const allPosts = posts.map(item => item);

  const firstPost = allPosts?.shift();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>Dayo Awobeku's Blog</title>
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
          property="og:description"
          content="Learn web development and get to know more about me here."
        />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665066117/website-images/og-image_awxqmx.png"
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
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665066117/website-images/og-image_awxqmx.png"
        />
      </Head>

      <Layout>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-10 basis-full md:flex-nowrap lg:gap-8 md:mt-20">
          <h1 className="md:basis-2/3 lg:basis-auto lg:max-w-lg mb-10 text-2lg md:text-2xl lg:text-4xl text-grey dark:text-white">
            Learn web development and get to know more about me here.
          </h1>
          <div className="w-[506px] h-[387px]">
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

        <div className="mt-20 transition-all duration-300 rounded outline-none bg-white-700 outline-[3px] outline-offset-4 hover:outline-info">
          <Link href={`/blog/${firstPost?.slug}`}>
            <a className="flex items-center justify-between p-6 md:p-20 group">
              <article>
                <p className="font-medium text-md text-grey">
                  Featured article
                </p>
                <h2 className="mt-6 md:mt-8 text-2lg md:text-xl md:leading-[56px] text-grey max-w-lg">
                  {firstPost?.postTitle}
                </h2>
                <p className="mt-6 font-medium md:mt-8 text-body text-3md">
                  {firstPost?.date} - {firstPost?.time}
                </p>
                <div className="inline-flex items-center gap-4 mt-10 md:mt-16">
                  <span className="font-medium text-4md text-grey mb-1">
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
              <div className="hidden md:block w-[342px] h-[401px] relative">
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
        <div className="mt-8 sm:mt-16 flex flex-col gap-8 sm:gap-16">
          {allPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={i} passHref>
              <a className="transition-all duration-300 rounded outline-none outline-[3px] outline-offset-4 hover:outline-info group">
                <article className="py-6 sm:py-0 sm:h-80 bg-white-800 flex items-center gap-10 rounded pl-4 sm:pl-0 pr-10">
                  <div className="hidden sm:block h-80 w-[389px] relative">
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
                    <p className="font-medium text-body dark:text-grey-400 text-2md">
                      {post.date} - <span>{post.time}</span>
                    </p>
                    <h3 className="text-lg font-medium text-grey dark:text-grey-800 max-w-[530px]">
                      {post.postTitle}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="w-fit text-base text-grey font-medium">
                        Continue reading
                      </span>
                      <div className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2">
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
      </Layout>
    </div>
  );
};

export default Blog;
