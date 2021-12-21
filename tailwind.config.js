module.exports = {
  purge:{
    content: ['_site/**/*.html', '*/_includes/*/*.hbs'],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
