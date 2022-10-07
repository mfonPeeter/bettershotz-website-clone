module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        benchnine: ['BenchNine', 'sans-serif'],
        nunitosans: ['Nunito Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'sans-serif'],
      },
      colors: {
        blackGray: 'rgb(21,21,21)',
        darkGray: 'rgb(33, 33, 33)',
        darkGrayLight: 'rgb(38, 38, 38)',
        saffron: 'rgb(246,177,48)',
        saffronDark: 'rgb(148,106,29)',
        orangePink: 'rgb(221, 145, 110)',
      },
      backgroundImage: {
        'hero-background': "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
