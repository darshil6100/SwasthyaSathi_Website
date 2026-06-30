import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        sky: {
          brand: "#3eaee0",
          light: "#7acfef",
          deep: "#1d8bbf",
        },
        navy: {
          DEFAULT: "#1b4f9c",
          dark: "#0f3270",
          light: "#2d69c4",
        },
        ink: "#0e2540",
        fog: "#e8f3fa",
        mist: "#c8dff0",
        slate: "#5a7a96",
        line: "#dcedf8",
        "off-white": "#f5f9fd",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
        "draw-pulse": "drawPulse 2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(1deg)" },
          "50%": { transform: "translateY(-8px) rotate(1.5deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(62, 174, 224, 0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(62, 174, 224, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drawPulse: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
      boxShadow: {
        sky: "0 8px 32px rgba(62, 174, 224, 0.25)",
        navy: "0 8px 32px rgba(27, 79, 156, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
