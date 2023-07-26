/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#dadef1',
        'background': '#04050b',
        'primary': '#7b88cc',
        'secondary': '#151b37',
        'accent': '#5a6bbf',
      },
    },
  },
  plugins: [],
}

