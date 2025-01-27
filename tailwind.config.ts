import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
      fontFamily: {
        primary: ["var(--font-open-sans)", "sans-serif"],
        secondary: ["var(--font-playfair-display)", "serif"],
      },
      content: {
        quote: 'url("/images/quoteMark.png")',
      },
      colors: {
        primary: {
          DEFAULT: "#292a4a",
          darker: "#242546",
          hover: "#383956",
        },
        accent: {
          DEFAULT: "#cf9455",
          hover: "#bb864e",
        },
        gray: "#766f66",
        white: "#ffffff",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
