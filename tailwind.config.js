/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      brandBlue: '#3F7CDB',
      secondaryBlue: '#1E2254',
      brandBlue80: '#5F92E1',
      brandBlue40: '#D9E5F8',
      body: '#4A4A68',
      white: '#FFF',
      white80: '#F9F9F9',
      grey: '#080917',
      grey80: '#333442',
      grey60: '#CECED2',
      grey40: '#84858D',
      grey20: '#8E90A9',
      btnHover: '#5A8EE3',
    },
    fontFamily: {
      sans: ['Matter'],
    },
    fontSize: {
      base: ['1rem', '24px'], // 16px

      lg: '1.25rem', // 20px

      sm: ['.8125rem', '18px'], // 13px

      small: ['.75rem', '17.38px'], // 12px

      tiny: '.875rem', // 14px

      xl: ['1.5625rem', '29px'], // 25px

      xs: ['.625rem', '11.72px'], // 10px

      xxl: '1.9375rem', // 31px

      xxxl: ['2.5rem', '57.92px'], // 40px
    },
  },
  plugins: [],
};
