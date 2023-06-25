/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primaryTitle: '#5DBF4E',
        primarySubTitle: '#498C3F',
        primaryHeader: '#FFFFFF',
        primaryContent: '#8F96A6',
        primarySubContent1: '#4b4f58',
        primarySubContent2: '#343740',
        primaryBg: '#0D0D0D',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

