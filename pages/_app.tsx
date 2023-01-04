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

  console.log(pageProps);
  return (
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
  );
}

export default MyApp;
