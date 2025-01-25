/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        curve: 'path("M0,100 Q50,0 100,100 T200,100 Z")', // Define a custom curve here
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
