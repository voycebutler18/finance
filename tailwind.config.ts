import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
