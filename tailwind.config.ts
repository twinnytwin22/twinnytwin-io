import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        professor: ["professor", "sans-serif"],
        owners: ["owners", "sans-serif"],
        "owners-wide": ["owners-wide", "sans-serif"],
        "owners-xwide": ["owners-xwide", "sans-serif"],
        "owners-xxwide": ["owners-xxwide", "sans-serif"],
        "groupie-gloss": ["groupie-gloss", "san-serif"],
        "groupie-regular": ["groupie-regular", "san-serif"],
        "bubblegum-pop-highlight": ["bubblegum-pop-highlight", "san-serif"],
        "bubblegum-pop-shadow": ["bubblegum-pop-shadow", "san-serif"],
        "bubblegum-pop-vanilla": ["bubblegum-pop-vanilla", "san-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
