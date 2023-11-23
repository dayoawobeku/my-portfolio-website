import {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {posts} from '../../data/posts';
import {arrowDark} from '../../assets/images';

const Blog: NextPage = () => {
  const allPosts = posts.map(item => item);

  const latestPosts = allPosts.reverse();

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
        <link
          rel="icon"
          href="https://res.cloudinary.com/dedywga3v/image/upload/v1700732816/favicon_pcbddk.png"
        />
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
          content="https://res.cloudinary.com/dedywga3v/image/upload/v1700571149/meta_image_dwxlym.png"
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
          content="https://res.cloudinary.com/dedywga3v/image/upload/v1700571149/meta_image_dwxlym.png"
        />
      </Head>

      <div className="mt-10 flex basis-full flex-wrap items-center justify-between gap-4 md:mt-20 md:flex-nowrap lg:gap-8">
        <h1 className="mb-10 text-2lg font-bold text-grey dark:text-white md:text-2xl lg:text-xl">
          Blog
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 pb-10 sm:mt-10 sm:gap-8 md:grid-cols-2">
        {latestPosts.map((post, i) => (
          <Link
            href={`/blog/${post.slug}`}
            key={i}
            className="group rounded-xl outline-none outline-[3px] outline-offset-4 transition-all duration-300 hover:outline-info"
          >
            <article className="flex h-full flex-col gap-6 rounded-xl bg-[#19202A] p-8">
              <div className="relative hidden h-[300px] w-full sm:block">
                <Image
                  alt={post.imageDescription}
                  src={post.imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII="
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[0.625rem] text-body dark:text-white-400 sm:text-base sm:font-medium">
                  {post.date} - <span>{post.time}</span>
                </p>
                <h3 className="font-medium leading-normal text-grey dark:text-white sm:text-3md xl:text-lg">
                  {post.postTitle}
                </h3>
                {/* <p className="text-body dark:text-grey-100">
                  A short description of the post here to give you an idea of
                </p> */}
                <div className="flex items-center gap-2">
                  <span className="w-fit text-[0.8125rem] font-medium text-white sm:text-base">
                    Continue reading
                  </span>
                  <div className="h-4 w-4 transition-all duration-300 group-hover:translate-x-2">
                    <Image
                      alt=""
                      src={arrowDark}
                      width={16}
                      height={16}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
