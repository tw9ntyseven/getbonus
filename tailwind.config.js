/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1280px',
    },
    fontFamily: {
      onest: ['Onest', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        header: '0 0 10px 0 rgba(0, 0, 0, 0.11)',
        footer: '0px -4px 10px 0px rgba(0, 0, 0, 0.12)',
        cartmodal: '0 0 20px rgba(0,0,0,.2)',
      },
      colors: {
        main: '#E02049',
        primary: {
          0: '#E0204900',
        },
        blue: {
          200: '#00B0F233',
          900: '#00B0F2'
        },
        dark: {
          500: '#1B1B1D80',
          900: '#1B1B1D',
        },
        'gradient-start': '#e02046',
        'gradient-end': '#8c1a31',
        'shadow-color': '#e02046',
        'linear-color-100': '#c02141',
        secondary: '#FE05052B',
        gray: '#eee',
        thin: '#F6F6F6',
        grayText: '#7D7D7D',
        gray800: '#5C5C5C',
        success: '#11AB69',
      },
    },
  },
};
