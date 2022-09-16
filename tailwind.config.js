/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/images/hero-watch.png')",
        'green-logo': "url('../src/assets/images/watchcrow-logo-green.svg')",
        'result': "url('../src/assets/images/result-section-watch.png')",
        'result-mobile': "url('../src/assets/images/result-mobile.png')",
        'how': "url('../src/assets/images/howitworks-section-watch.png')",
        'diamond': "url('../src/assets/images/square-diamond.png')",
      }
    },
  },
  plugins: [],
}