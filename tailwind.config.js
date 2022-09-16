/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/images/hero-watch.png')",
        "green-logo": "url('assets/images/watchcrow-logo-green.svg')",
        result: "url('assets/images/result-section-watch.png')",
        "result-mobile": "url('assets/images/result-mobile.png')",
        how: "url('assets/images/howitworks-section-watch.png')",
        diamond: "url('assets/images/square-diamond.png')",
      },
    },
  },
  plugins: [],
};
