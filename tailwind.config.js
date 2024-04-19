/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        formulario: {
          100: '#FFF2DD',
          200: "#E8621B",
          300: "#F5C38D",
        }
      },
      width: {
        '128':'32rem'
      }
    },
  },
  plugins: [],
}

