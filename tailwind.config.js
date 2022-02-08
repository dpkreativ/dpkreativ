module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          normal: "#1DA1F2",
          dark: "#189EF2",
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
