import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        muted: "#66645F",
        line: "#EDE4D2",
        paper: "#FFFBF2",
        brand: "#2563EB",
        brandDark: "#1E4FD1",
        brandSoft: "#EEF4FF",
        clay: "#C76F4A",
        honey: "#FBBF24",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "380px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(23, 23, 23, 0.06)",
        soft: "0 24px 80px rgba(23, 23, 23, 0.10)",
        button: "0 10px 28px rgba(37, 99, 235, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
