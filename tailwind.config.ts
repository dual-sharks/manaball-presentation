import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mana: {
          blue: '#0e68ab',
          black: '#150b00',
          gold: '#c9a227',
        }
      }
    },
  },
  plugins: [],
};
export default config;
