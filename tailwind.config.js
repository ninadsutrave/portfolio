/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SpaceGrotesk']
      },
      spacing: {
        '1/6': '16.6%',
        '128': '480px'
      }
    }
  },
  plugins: [],
}