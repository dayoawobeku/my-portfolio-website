import type {NextPage} from 'next';
import Head from 'next/head';
import HeroSection from '../components/LandingPage/HeroSection';
import Projects from '../components/LandingPage/Projects';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dayo Awobeku</title>
        <meta name="title" property="og:title" content="Dayo Awobeku" />
        <meta
          name="description"
          content="Hi, I'm Dayo.
          I create quality websites that engage and convert."
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dedywga3v/image/upload/v1700732816/favicon_pcbddk.png"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dayoawobeku.com" />
        <meta property="og:title" content="Dayo Awobeku" />
        <meta
          name="description"
          property="og:description"
          content="Hi, I'm Dayo.
          I create quality websites that engage and convert."
        />
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
        <meta
          property="twitter:description"
          content="Hi, I'm Dayo.
          I create quality websites that engage and convert."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dedywga3v/image/upload/v1700571149/meta_image_dwxlym.png"
        />
      </Head>
      <HeroSection />
      <Projects />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
