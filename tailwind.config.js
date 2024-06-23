/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Barlow"]
      },
      width: {
        '2': '2px',
        '200': '200px'
      }
    },
  },
  plugins: [],
}

