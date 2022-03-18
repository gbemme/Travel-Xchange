module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue1": "var(--blue1)",
      },
      width:{
    
        '420':'420px',
        '500':'500px'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
