/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // your color palette here
      colors: {
        prime: '#ffde00',
        second: '#9200ff',
        light: '#e0e0e0',
        dark: '#070707',
        weak: '#999999',
        correct: "green",
        incorrect: "crimson",
      },

      // your fonts here
      fontFamily: {
        main: ['Josefin Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },

      // your media breakpoints here
      screens: {
        'sc-sm': '300px',
        'sc-mid': '480px',
        'sc-tablet': '768px',
        'sc-laptop': '1024px',
        'sc-desktop': '1280px',
      },
    },
  },
  plugins: [],
};
