import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#2F184B",
          400: "#532B88",
          DEFAULT: "#2F184B",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          500: "#F4EFFA",
          foreground: "hsl(var(--secondary-foreground))",
        },
        black: "#000000",
        white: "#FFFFFF",
      },

      fontFamily: {
        martian: ["var(--font-martian)"],
        unica: ["var(--font-unica)"],
      },
    },
  },
  plugins: [],
};
export default config;
