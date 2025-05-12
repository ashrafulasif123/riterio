/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mdplus: { 'raw': '(min-width: 896px) and (max-width: 1023px)' }
      }
    },
  },
  plugins: [],
}