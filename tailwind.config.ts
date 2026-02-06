import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark theme base
        dark: {
          900: "#0a0a0f",
          800: "#111118",
          700: "#1a1a24",
          600: "#242433",
        },
        // Neon blue accents
        neon: {
          blue: "#00d4ff",
          purple: "#a855f7",
          pink: "#ec4899",
        },
        // Glass effect colors
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "neon-glow":
          "radial-gradient(circle at center, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        fadeIn: "fadeIn 0.6s ease-out",
        slideUp: "slideUp 0.6s ease-out",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px rgba(0, 212, 255, 0.2), 0 0 10px rgba(0, 212, 255, 0.2)",
          },
          "100%": {
            boxShadow:
              "0 0 10px rgba(0, 212, 255, 0.4), 0 0 20px rgba(0, 212, 255, 0.4)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neon-sm": "0 0 10px rgba(0, 212, 255, 0.3)",
        neon: "0 0 20px rgba(0, 212, 255, 0.5)",
        "neon-lg": "0 0 30px rgba(0, 212, 255, 0.7)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
} satisfies Config;
