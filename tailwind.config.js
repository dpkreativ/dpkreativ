module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          normal: "#03499A",
          dark: "#03438C",
          light: "#87BEFD",
        },
        secondary: {},
        accent: {},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
