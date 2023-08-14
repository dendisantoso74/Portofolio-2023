/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "light-00": "#FFFFFF",
        "light-50": "#F9FAFB",
        "light-100": "#F3F4F6",
        "light-200": "#E5E7EB",
        "light-300": "#D1D5DB",
        "light-400": "#9CA3AF",
        "light-500": "#6B7280",
        "light-600": "#4B5563",
        "light-700": "#374151",
        "light-800": "#1F2937",
        "light-900": "#111827",
        "light-950": "#030712",
        "dark-00": "#030712",
        "dark-50": "#111827",
        "dark-100": "#1F2937",
        "dark-200": "#374151",
        "dark-300": "#4B5563",
        "dark-400": "#6B7280",
        "dark-500": "#9CA3AF",
        "dark-600": "#D1D5DB",
        "dark-700": "#E5E7EB",
        "dark-800": "#F3F4F6",
        "dark-900": "#F9FAFB",
        "dark-950": "#FFFFFF",
        "emerald-500": "#10b981",
      },
    },
  },
  plugins: [],
};
