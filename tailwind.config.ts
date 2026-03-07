import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        ocean: "rgb(var(--color-ocean) / <alpha-value>)",
        sunrise: "rgb(var(--color-sunrise) / <alpha-value>)",
        palm: "rgb(var(--color-palm) / <alpha-value>)",
        coral: "rgb(var(--color-coral) / <alpha-value>)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(11, 18, 32, 0.35)",
        lift: "0 18px 40px -20px rgba(0, 95, 115, 0.4)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top, rgba(0,95,115,0.15), transparent 55%)",
        "sunrise-fade": "linear-gradient(135deg, rgba(238,155,0,0.18), rgba(187,62,3,0.12))"
      }
    }
  },
  plugins: []
};

export default config;
