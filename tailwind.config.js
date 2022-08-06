module.exports = {
  content: [
    './_site/**/*.{html,js}',
    '*/_includes/*/*.hbs'
  ],
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
