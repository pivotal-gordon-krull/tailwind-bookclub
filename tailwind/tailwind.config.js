/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      height: {
        '40vmin': '40vmin'
      },
      fontSize: {
        'app-header': 'calc(10px + 2vmin)'
      },
      colors: {
        'app-background': '#282c34',
        'app-link': '#61dafb'
      }
    },
  },
  plugins: [],
}
