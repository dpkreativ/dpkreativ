import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'faxx-blue': '#4320F6',
        'faxx-cyan': '#00E5FF',
        'faxx-coral': '#FF4A5A',
        'faxx-lime': '#BFFF00',
        'faxx-dark': '#000000',
        'faxx-light': '#F4F4F9',
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
        script: ['var(--font-script)'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
