import {useState} from 'react';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import {MDXProvider} from '@mdx-js/react';
import {Analytics} from '@vercel/analytics/react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import '../styles/globals.css';
import '../styles/editor.css';
import Layout from '../components/Layout';
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

function MyApp({Component, pageProps}: AppProps) {
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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Layout>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </Layout>
      </ThemeProvider>
      <Analytics />
    </QueryClientProvider>
  );
}

export default MyApp;
