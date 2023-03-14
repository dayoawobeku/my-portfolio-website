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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
