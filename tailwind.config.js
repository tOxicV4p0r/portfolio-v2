/** @type {import('tailwindcss').Config} */

function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${varName}),${opacityValue})`
    }
    return `var(${varName})`
  }
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primaryTitle: 'var(--color-primary-title)',
        primarySubTitle: 'var(--color-primary-subtitle)',
        primaryHeader: 'var(--color-primary-header)',
        primaryContent: 'var(--color-primary-content)',
        primarySubContent1: 'var(--color-primary-subcontent1)',
        primarySubContent2: withOpacity('--color-primary-subcontent2'),
        primaryBg: 'var(--color-primary-bg)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

