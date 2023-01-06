import {useState} from 'react';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import {ThemeProvider} from 'next-themes';
import {MDXProvider} from '@mdx-js/react';
import {Analytics} from '@vercel/analytics/react';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
  DehydratedState,
} from '@tanstack/react-query';
import '../styles/globals.css';
import '../styles/editor.css';
const Layout = dynamic(() => import('../components/Layout'));

interface MyAppProps extends AppProps {
  dehydratedState: DehydratedState;
}

import {
  Heading,
  Text,
  BoldText,
  ItalicizedText,
  QuoteText,
  CodeBlock,
  NoCodeBlock,
  BlogLayout,
  SuccessNote,
  DangerNote,
  InfoNote,
  AnchorTag,
  ExternalUrl,
  LocalLink,
  ListNumber,
} from '../components/Blog';
import Script from 'next/script';

const components = {
  BlogLayout,
  Heading,
  Text,
  BoldText,
  ItalicizedText,
  QuoteText,
  CodeBlock,
  NoCodeBlock,
  SuccessNote,
  DangerNote,
  InfoNote,
  AnchorTag,
  ExternalUrl,
  LocalLink,
  ListNumber,
};

function MyApp({Component, pageProps}: AppProps<MyAppProps>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <>
      <Script id="mcjs" strategy="afterInteractive">
        {`
            !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b773097a8c325ea0d7965495e/84d063328ae2a1b5299b0a160.js");
          `}
      </Script>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Layout>
              <MDXProvider components={components}>
                <Component {...pageProps} />
              </MDXProvider>
            </Layout>
          </ThemeProvider>
        </Hydrate>
        <Analytics />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
