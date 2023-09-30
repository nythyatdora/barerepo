import type { Config } from "tailwindcss";
import { withTV } from "tva/transformer";

const config: Config = withTV({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        punk: ["var(--font-monument-extended)"],
        sans: ["var(--font-plus-jakarta-sans)"],
        serif: ["var(--font-editorial-new)"],
      },
    },
  },
  plugins: [],
});

export default config;
