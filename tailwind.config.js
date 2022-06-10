module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['whitespace-nowrap'], // This is used in i18n json file.
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: '100vw',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1120px',
          '2xl': '1120px',
        },
        padding: '1rem',
      },
      colors: {
        primary: '#FD7E14',
        // primaryLight: '#FFCEAD',
        primaryLight: '#fd8a2b',
        primaryGhost: '#fecba1',
        // primaryDark: '#8F3900',
        primaryDark: '#e47112',
        secondary: '#6C757D',
        grayScale: '#4E463E',
        checkboxLabel: '#696F79',
        gray: {
          300: '#D9DBE1',
          400: '#CED4DA',
          800: '#474A57',
          900: '#18191F',
        },
        orange: {
          800: '#FFC278',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'active'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
