/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{html,js,jsx,tsx}',
    './pages/**/*.{html,js,jsx,tsx}',
    './assets/**/*.{html,js,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
    colors: {
      body: '#686868',
      white: {
        DEFAULT: '#FFF',
        800: '#F9F9F9',
        700: '#F7F7F7',
        400: '#C2C2C2',
      },
      black: {
        DEFAULT: '#000',
      },
      grey: {
        DEFAULT: '#0D0D0D',
        800: '#333442',
        600: '#CECED2',
        400: '#84858D',
        100: '#E5E5E5',
      },
      brown: '#6C5146',
      success: {
        DEFAULT: '#30c85e',
        200: '#30c85e20',
      },
      danger: {
        DEFAULT: '#D53F41',
        300: '#A13E3F30',
      },
      info: {
        DEFAULT: '#3F7CDB',
        100: '#3F7CDB10',
      },
    },
    fontFamily: {
      sans: ['Satoshi'],
    },
    fontSize: {
      base: ['1rem', '24px'], // 16px

      md: ['1.125rem', '28px'], // 18px

      '2md': ['1.25rem', '28px'], // 20px

      '3md': ['1.375rem', '32px'], // 22px

      '4md': ['1.5rem', '32px'], // 24px

      '5md': ['1.5625rem'], // 25px

      lg: '1.875rem', // 30px

      '2lg': ['2rem', '42px'], // 32px h4

      xl: ['2.5rem', '48px'], // 40px h3

      '2xl': ['3rem', '57.6px'], // 48px h2

      '4xl': ['3.75rem', '72px'], // 60px h1
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
