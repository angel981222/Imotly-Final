import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16211f",
        mint: "#0e8f70",
        rose: "#b93345",
        paper: "#fbfaf7",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "380px",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(22, 33, 31, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
