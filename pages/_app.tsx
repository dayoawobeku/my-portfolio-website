import {useState} from 'react';
import type {AppProps} from 'next/app';
import Script from 'next/script';
import {MDXProvider} from '@mdx-js/react';
import {Analytics} from '@vercel/analytics/react';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
  DehydratedState,
} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import '../styles/globals.css';
import '../styles/editor.css';
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
  Codesandbox,
  YellowNote,
  BulletPoint,
  ListItems,
} from '../components/Blog';
import Layout from '../components/Layout';
import {ThemeProvider} from '../context/ThemeContext';

interface MyAppProps extends AppProps {
  dehydratedState: DehydratedState;
}

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
  Codesandbox,
  YellowNote,
  BulletPoint,
  ListItems,
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="lazyOnload"
      />
      <Script id="gtag" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <Layout>
              <MDXProvider components={components}>
                <Component {...pageProps} />
              </MDXProvider>
            </Layout>
          </ThemeProvider>
          <ReactQueryDevtools />
        </Hydrate>
        <Analytics />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
