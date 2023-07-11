/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
    },
    backgroundImage: {
      pattern_desktop: "url('/pattern-background-desktop.svg')",
      pattern_mobile: "url('/pattern-background-mobile')",
    },
  },
  plugins: [],
};
