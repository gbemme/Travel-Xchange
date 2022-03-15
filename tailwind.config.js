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
    
        '420':'420px'
      }
    },
    maxHeight: {
      '0': '0',
      '1/5': '20vh',
      '1/2': '50vh',
      '2/5': '40vh',
      '3/5': '57vh',
      '65': '65vh',
      '4/5': '80vh',
      'full': '100vh',
    },
    lineHeight: {
      '60': '60rem',
    },
    inset:{
      '50':'64%'
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
