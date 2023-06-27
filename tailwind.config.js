/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundColor: {
        'custom-blue': '#BDEBEA',
      }
    },
  },
  plugins: [],
}