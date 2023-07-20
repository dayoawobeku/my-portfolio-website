import type {NextPage} from 'next';
import Head from 'next/head';
import CustomLink from '../components/CustomLink';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="title" property="og:title" content="404 - Page Not Found" />
        <meta name="description" content="404 - Page Not Found" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dayoawobeku.com" />
        <meta property="og:title" content="404 - Page Not Found" />
        <meta
          name="description"
          property="og:description"
          content="404 - Page Not Found"
        />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1689864391/meta_image_iko09f.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dayoawobeku.com" />
        <meta property="twitter:site" content="@dayoawobeku" />
        <meta property="twitter:title" content="Dayo Awobeku" />
        <meta property="twitter:description" content="404 - Page Not Found" />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1689864391/meta_image_iko09f.png"
        />
      </Head>
      <section className="flex flex-col items-center">
        <p className="my-8 text-md font-medium">Page not found</p>
        <h1 className="text-[10rem] font-bold">404</h1>
        <CustomLink text="Go back home" href="/" />
      </section>
    </div>
  );
};

export default Home;
