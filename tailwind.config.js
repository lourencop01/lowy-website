/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F3D91",
        secondary: "#00B3C7",
        accent: "#FF6A00",
        text: "#111827",
        bg: "#F4F7FA",
        surface: "#FFFFFF",
        border: "#E6EEF6",
        success: "#22C55E",
        warning: "#F59E0B",
      },
    },
  },
  plugins: [],
};
