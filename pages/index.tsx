import type {NextPage} from 'next';
import Head from 'next/head';
import HeroSection from '../components/LandingPage/HeroSection';
import Projects from '../components/LandingPage/Projects';
import Testimonials from '../components/LandingPage/Testimonials';
import AboutMe from '../components/LandingPage/AboutMe';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dayo Awobeku</title>
        <meta
          name="description"
          content="Hi, I'm Dayo.
          I build websites that your customers will love to use and pay for."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dayoawobeku.com" />
        <meta property="og:title" content="Dayo Awobeku" />
        <meta
          property="og:description"
          content="Hi, I'm Dayo.
          I build websites that your customers will love to use and pay for."
        />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665066117/website-images/og-image_awxqmx.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dayoawobeku.com" />
        <meta property="twitter:site" content="@dayoawobeku" />
        <meta property="twitter:title" content="Dayo Awobeku" />
        <meta
          property="twitter:description"
          content="Hi, I'm Dayo.
          I build websites that your customers will love to use and pay for."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1665066117/website-images/og-image_awxqmx.png"
        />
      </Head>
      <Layout>
        <HeroSection />
        <Projects />
        <Testimonials />
        <AboutMe />
      </Layout>
    </div>
  );
};

export default Home;
