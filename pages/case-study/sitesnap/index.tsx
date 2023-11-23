/* eslint-disable @next/next/no-img-element */
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {externalLink} from '../../../assets/images';

const Sitesnap: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sitesnap</title>
        <meta name="title" property="og:title" content="Sitesnap" />
        <meta name="description" content="Sitesnap" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dedywga3v/image/upload/v1700732816/favicon_pcbddk.png"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dayoawobeku.com" />
        <meta property="og:title" content="Sitesnap" />
        <meta name="description" property="og:description" content="Sitesnap" />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/dedywga3v/image/upload/v1700571149/meta_image_dwxlym.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dayoawobeku.com" />
        <meta property="twitter:site" content="@dayoawobeku" />
        <meta property="twitter:title" content="Dayo Awobeku" />
        <meta property="twitter:description" content="Sitesnap" />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dedywga3v/image/upload/v1700571149/meta_image_dwxlym.png"
        />
        <link
          rel="preload"
          href="https://res.cloudinary.com/dspbvhlt6/image/upload/v1696930405/website-images/sitesnap-homepage_avwmnb.png"
          as="image"
        />
      </Head>
      <section className="mt-16 flex flex-col items-start">
        <h1 className="text-2xl font-bold dark:text-white">Sitesnap</h1>

        <a
          href="https://sitesnap.design"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link mt-6 flex items-center gap-3 text-md text-grey before:bg-white dark:text-white"
        >
          <span>Visit site</span>
          <Image alt="" src={externalLink} width={16} height={16} />
        </a>

        <div className="relative mt-8 block h-full w-full">
          <img
            src="https://res.cloudinary.com/dspbvhlt6/image/upload/v1696930405/website-images/sitesnap-homepage_avwmnb.png"
            alt="sitesnap homepage"
            className="object-contain"
            sizes="100vw"
            style={{height: '100%', width: '100%'}}
          />
        </div>

        <div className="mx-auto mt-16 w-full max-w-[848px] pb-20">
          <h2 className="inline-block text-lg font-medium text-info">
            Overview
          </h2>
          <p className="mt-4 text-md dark:text-white-700">
            Sitesnap is a curated gallery of innovative African websites. It was
            built to showcase the best of African websites and inspire the next
            generation of African designers and developers.
          </p>

          <h2 className="mt-10 inline-block text-lg font-medium text-info">
            Problem
          </h2>
          <p className="mt-4 text-md dark:text-white-700">
            As a creative, I'm always looking for inspiration for my projects. I
            found that most of the inspiration I found online was from websites
            built by designers and developers in the US and Europe such as
            Dribbble, Awwwards, Behance, etc. I wanted to find inspiration from
            websites built by designers and developers in Africa for Africans.
          </p>

          <h2 className="mt-10 inline-block text-lg font-medium text-info">
            My role
          </h2>
          <p className="mt-4 text-md dark:text-white-700">
            I was responsible for building the frontend and backend of the site.
            I collaborated with a designer who designed the UI and UX of the
            site.
          </p>

          <h2 className="mt-10 inline-block text-lg font-medium text-info">
            Tech stack
          </h2>
          <p className="mt-4 text-md dark:text-white-700">
            Next.js & TypeScript - frontend
            <br />
            TailwindCSS - styling
            <br />
            Vercel - frontend hosting
            <br />
            Cloudinary - image CDN
            <br />
            Strapi - backend
            <br />
            Digital Ocean - backend hosting
          </p>

          <h2 className="mt-10 inline-block text-lg font-medium text-info">
            Features
          </h2>
          <p className="mt-4 text-md dark:text-white-700">
            <span className="font-semibold">Search</span> - search by company
            name, company industry, or by webpages
            <br />
            <span className="font-semibold">Filter</span> - filter websites by
            category or tag
            <br />
            <span className="font-semibold">Add website</span> - add a website
            to the gallery
            <br />
            <span className="font-semibold">Edit website</span> - edit a
            website's details
            <br />
            <span className="font-semibold">Delete website</span> - delete a
            website from the gallery
            <br />
            <span className="font-semibold">View website</span> - view a website
            in a new tab
            <br />
            <span className="font-semibold">Responsive</span> - works on all web
            and mobile devices and screen sizes (tested on Chrome, Safari,
            Firefox, Edge, and Opera)
          </p>

          <h2 className="mt-10 inline-block text-lg font-medium text-info">
            Challenges
          </h2>
          <p className="mt-4 text-md dark:text-white-700">
            The biggest challenge I faced was building the search and filter
            functionality. I had to figure out how to query the Strapi backend
            to get the data I needed to display the results of the search and
            filter. I also had to figure out how to make the search and filter
            work together. I was able to overcome this challenge by reading the
            Strapi documentation and using the search and filter functionality
            of the Strapi backend.
          </p>

          <h2 className="mt-10 inline-block text-lg font-medium text-info">
            Conclusion
          </h2>
          <p className="mt-4 text-md dark:text-white-700">
            I learned a lot from building this project. I learned how to build a
            full-stack project from scratch. I also learned how to use Strapi, a
            headless CMS. I'm proud of how the project turned out and I'm
            excited to see how it grows.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sitesnap;
