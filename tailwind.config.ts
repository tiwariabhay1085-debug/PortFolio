import type { Config } from "tailwindcss";

// Colors come from CSS variables in app/globals.css so the light/dark toggle
// only has to swap one set of variables. `<alpha-value>` enables classes like border-line/10.
const rgb = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: rgb("--bg"),
        surface: rgb("--surface"),
        fg: rgb("--fg"),
        muted: rgb("--muted"),
        line: rgb("--line"),
        electric: rgb("--electric"),
        iris: rgb("--iris"),
        aqua: rgb("--aqua"),
        "btn-from": rgb("--btn-from"),
        "btn-to": rgb("--btn-to"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "100%": { transform: "translate3d(40px,30px,0) scale(1.15)" },
        },
        blink: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite alternate",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
