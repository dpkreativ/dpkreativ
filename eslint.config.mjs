import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    files: ["src/__tests__/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;
