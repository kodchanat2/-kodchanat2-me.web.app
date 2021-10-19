module.exports = {
  mode: 'jit',
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
        'dark': '#14213D',
        'orange': '#FCA311',
        'platinum': '#E5E5E5',
      },
    },
  },
  variants: {
    animation: ['motion-safe', 'motion-reduce'],
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
  },
};
