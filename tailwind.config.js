/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js,jsx,tsx}',
    './pages/**/*.{html,js,jsx,tsx}',
    './assets/**/*.{html,js,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        30: '7.5rem',
      },
    },
    colors: {
      body: '#686868',
      white: {
        DEFAULT: '#FFF',
        800: '#F9F9F9',
      },
      black: {
        DEFAULT: '#000',
      },
      grey: {
        DEFAULT: '#0D0D0D',
        800: '#333442',
        600: '#CECED2',
        400: '#84858D',
      },
      brown: '#6C5146',
    },
    fontFamily: {
      sans: ['Matter'],
    },
    fontSize: {
      base: ['1rem', '24px'], // 16px

      md: ['1.125rem'], // 18px

      '2md': ['1.25rem', '28px'], // 20px

      '3md': ['1.375rem', '32px'], // 22px

      '4md': ['1.5rem', '32px'], // 24px

      '5md': ['1.5625rem'], // 25px

      lg: '1.25rem', // 30px

      xl: ['1.5625rem', '29px'], // 40px

      '2xl': ['3rem', '57.6px'], // 48px

      '3xl': ['3.5rem', '67.2px'], // 56px

      '4xl': ['3.75rem', '72px'], // 72px
    },
  },
  plugins: [],
};
