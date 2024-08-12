/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if using other file extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['pt-sans-regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
