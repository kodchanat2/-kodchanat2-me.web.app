module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
    // './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      },
    },
  },
  variants: {
    animation: ['motion-safe', 'motion-reduce'],
  },
  plugins: [],
};
