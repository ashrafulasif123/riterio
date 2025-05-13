/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            btSecondary: 'rgb(171, 239, 95)'
        }
      },
    },
    plugins: [],
  }
  