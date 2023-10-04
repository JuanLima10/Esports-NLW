/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      'sans': [ 'inter', 'sans-serif' ]
    },
    extend: {
      backgroundImage: {
        background: 'url("/background.png")',
        textGradient: 'linear-gradient(120deg, #9572FC 30%, #43E7AD 90%)',
        gameGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
    },
  },
  plugins: [],
}
