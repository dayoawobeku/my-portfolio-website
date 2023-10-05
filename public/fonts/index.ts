import localFont from 'next/font/local';

const tomatoGrotesk = localFont({
  variable: '--font-tomatoGrotesk',
  src: [
    {
      path: './TomatoGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './TomatoGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './TomatoGrotesk-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './TomatoGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export {tomatoGrotesk};
