/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(22 22 21)', 
        customGray2:'rgb(30 34 35)'
      },
    },
  },
  plugins: [],
}