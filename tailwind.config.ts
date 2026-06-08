import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Neue Montreal", "Archivo", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Neue Montreal", "Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "ui-monospace", "Menlo", "monospace"],
      },
      colors: {
        bg: { dark: "#0c0c0c", surface: "#1e2124", surface2: "#202426", light: "#efefef", light2: "#f6f6f6" },
        text: { light: "#ffffff", soft: "#efefef", dark: "#1e2124", muted: "#aaaaaa", muteddark: "#595959" },
        accent: "#4e8af7",
      },
      maxWidth: { container: "1440px" },
      fontSize: {
        hero: ["80px", { lineHeight: "78px", letterSpacing: "-3.4px" }],
        h300: ["100px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h200: ["72px", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
        h100: ["50px", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        b400: ["34px", { lineHeight: "1.3" }],
        b300: ["20px", { lineHeight: "1.3" }],
        b200: ["18px", { lineHeight: "1.39" }],
        b100: ["16px", { lineHeight: "1.43" }],
        caption: ["10px", { lineHeight: "1.6", letterSpacing: "0.05em" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
