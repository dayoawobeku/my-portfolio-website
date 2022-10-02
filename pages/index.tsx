import type {NextPage} from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Projects from '../components/LandingPage/Projects';
const HeroSection = dynamic(
  () => import('../components/LandingPage/HeroSection'),
);
const Testimonials = dynamic(
  () => import('../components/LandingPage/Testimonials'),
);
const AboutMe = dynamic(() => import('../components/LandingPage/AboutMe'));

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dayo Awobeku's Personal Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Projects />
      <Testimonials />
      <AboutMe />
    </div>
  );
};

export default Home;
