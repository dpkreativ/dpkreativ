module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          '01': '#01080E',
          '02': '#011627',
          '03': '#011627',
        },
        secondary: {
          '01': '#607B96',
          '02': '#3C9D93',
          '03': '#4D5BCE',
        },
        accent: {
          '01': '#FEA55F',
          '02': '#43D9AD',
          '03': '#E99287',
          '04': '#C98BDF',
        },
        line: '#1E2D3D',
        gradient: {
          '01': '#4D5BCE',
          '02': '#43D9AD',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
