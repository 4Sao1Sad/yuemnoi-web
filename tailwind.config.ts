import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          foreground: "var(--foreground)",
        },
        secondary: {
          hover: "var(--secondary-hover)",
        },
        input: {
          outline: "var(--input-outline)",
        },
        gray:"var(--gray)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        h1: ["var(--font-size-h1)", "var(--line-height-h1)"],
        h2: ["var(--font-size-h2)", "var(--line-height-h2)"],
        h3: ["var(--font-size-h3)", "var(--line-height-h3)"],
        h4: ["var(--font-size-h4)", "var(--line-height-h4)"],
        h5: ["var(--font-size-h5)", "var(--line-height-h5)"],
        h6: ["var(--font-size-h6)", "var(--line-height-h6)"],
        tiny: ["var(--font-size-tiny)", "var(--line-height-tiny)"],
        body1: ["var(--font-size-body1)", "var(--line-height-body1)"],
        body2: ["var(--font-size-body2)", "var(--line-height-body2)"],
        body3: ["var(--font-size-body3)", "var(--line-height-body3)"],
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        looped: ["var(--font-looped)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
