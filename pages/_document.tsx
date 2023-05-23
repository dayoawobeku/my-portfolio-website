import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          id="theme"
          dangerouslySetInnerHTML={{
            __html: `
              const body = document.querySelector('body');
              
              function toggleDark() {
                if (document.documentElement.classList.contains('dark')) {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  localStorage.setItem("theme", "light");
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  localStorage.setItem("theme", "dark");
                }
              }
              
              if (localStorage.getItem("theme") === "light") {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
              } else {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        ></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        ></script>
        <script
          id="gtag"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
