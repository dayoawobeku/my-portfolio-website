import '../styles/editor.css';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import {MDXProvider} from '@mdx-js/react';
import Layout from '../components/Layout';
import {
  Heading,
  Text,
  BoldText,
  ItalicizedText,
  QuoteText,
  CodeBlock,
  BlogLayout,
  SuccessNote,
  DangerNote,
  InfoNote,
  AnchorTag,
  ExternalUrl,
  LocalLink,
} from '../components/Blog';

const components = {
  BlogLayout,
  Heading,
  Text,
  BoldText,
  ItalicizedText,
  QuoteText,
  CodeBlock,
  SuccessNote,
  DangerNote,
  InfoNote,
  AnchorTag,
  ExternalUrl,
  LocalLink,
};

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
