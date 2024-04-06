/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: { max: '550px' },
      tablet: { max: '992px' },
      laptop: { max: '919px' },
      desktop: { max: '1179px' },
    },
    extend: {},
  },
  plugins: [],
};
