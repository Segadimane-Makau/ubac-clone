import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'min-h-699': { 'raw': '(min-height: 612px) and (max-height: 699px)' },
        'min-h-615': { 'raw': '(min-height: 500px) and (max-height: 611px)'},
        'min-h-459': { 'raw': '(min-height: 0px) and (max-height: 500px)'},
        'min-h-735': { 'raw': '(min-height: 689px) and (max-height: 736px)'},
        'min-h-700': { 'raw': '(min-height: 700px)' },
      },
      minHeight: {
        'screen-100vh': '100vh',
        'screen-120vh': '120vh',
      },
    },
  },
  plugins: [],
};
export default config;
