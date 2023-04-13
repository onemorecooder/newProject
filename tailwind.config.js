/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'salmon': '#fa8072',
        'nav': '#1A5F7A',
        'footerleft': '#159895',
        'footerright': '#1A5F7A',
        'button': '#9E4784',
        'hover': '#D27685',
      },
    },
  },
  plugins: [],
}