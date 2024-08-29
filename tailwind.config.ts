import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        virgil: ["Virgil", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#3B82F6", // Blue-500
          dark: "#60A5FA", // Blue-400
        },
        background: {
          light: "#FFFFFF",
          dark: "#121212",
        },
        text: {
          light: "#1F2937", // Gray-800
          dark: "#E5E7EB", // Gray-200, slightly lighter for better contrast
        },
        secondary: {
          light: "#6B7280", // Gray-500
          dark: "#9CA3AF", // Gray-400, for secondary text in dark mode
        },
      },
    },
  },
  plugins: [],
};

export default config;
