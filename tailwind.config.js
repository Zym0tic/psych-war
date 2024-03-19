/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        primary: 'Tinos',
        secondary: 'Special Elite',
        tertiary: 'Tinos',
      },
      container: {
        padding: {
          DEFAULT: '20px',
          lg: '0',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1300px',
      },
      extend: {
        colors: {
          dark: '#080808',
          header: '#141414',
          accent: '#676767',
          accent2: '#E3462A',
          grey: {
            DEFAULT: '#555555',
          },
        },
        backgroundImage: {
          hero: "url('/src/img/hero/bg.jpg')",
          about: "url('/src/img/about/image.png')",
        },
      },
    },
    plugins: [],
  };