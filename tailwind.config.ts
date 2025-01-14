import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#C45B3F",
          light: "#E17A5F",
          dark: "#A34832",
        },
        secondary: {
          main: "#FDF8F6",
          light: "#FFFFFF",
          dark: "#F8EDE9",
        },
        background: {
          default: "#FFFFFF",
          paper: "#FDF8F6",
          accent: "#594539",
        },
        text: {
          primary: "#2D1810",
          secondary: "#594539",
          disabled: "#9B8A82",
          accent: "#C45B3F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
        display: ["var(--font-playfair)"],
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h2: ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h3: ["1.875rem", { lineHeight: "1.4" }],
        h4: ["1.5rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        tiny: ["0.75rem", { lineHeight: "1.5" }],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      spacing: {
        unit: "4px",
      },
      boxShadow: {
        sm: "0 2px 4px rgba(0,0,0,0.04)",
        md: "0 4px 8px rgba(0,0,0,0.08)",
        lg: "0 8px 16px rgba(0,0,0,0.08)",
        xl: "0 12px 24px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        full: "9999px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-left": "slide-left 0.5s ease-out",
        "slide-right": "slide-right 0.5s ease-out",
      },
    },
  },
  plugins: [typography],
};

export default config;
