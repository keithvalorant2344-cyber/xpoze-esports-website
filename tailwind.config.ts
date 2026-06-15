import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem"
      }
    },
    extend: {
      colors: {
        xpoze: {
          night: "#050309",
          ink: "#0b0714",
          panel: "#12101a",
          purple: "#8b5cf6",
          violet: "#a855f7",
          neon: "#d946ef",
          frost: "#f8f7ff",
          steel: "#a1a1aa",
          cyan: "#22d3ee",
          ember: "#fb7185"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Arial",
          "sans-serif"
        ],
        display: [
          "Rajdhani",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 42px rgba(139, 92, 246, 0.32)",
        card: "0 24px 70px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "xp-grid":
          "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
        "purple-scan":
          "linear-gradient(135deg, rgba(139,92,246,0.18), transparent 34%, rgba(217,70,239,0.12) 66%, transparent)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.24", transform: "scaleX(0.72)" },
          "50%": { opacity: "0.9", transform: "scaleX(1)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseLine: "pulseLine 3.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
