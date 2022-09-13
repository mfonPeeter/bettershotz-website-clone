module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        benchnine: ['BenchNine', 'sans-serif'],
        nunitosans: ['Nunito Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'sans-serif'],
      },
      colors: {
        blackGray: 'rgb(21,21,21)',
        saffron: 'rgb(246,177,48)',
        saffronDark: 'rgb(148,106,29)',
      },
    },
  },
  plugins: [],
};
