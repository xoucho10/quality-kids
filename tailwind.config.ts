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
        brand: {
          50: "#F8F7FF",
          100: "#EDE9FF",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B7ED8",
          600: "#6D5FC7",
          700: "#5A4CAF",
          900: "#3C326F",
        },
        accent: "#FFD93D",
      },
      fontFamily: {
        rounded: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;