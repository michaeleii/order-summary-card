/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
    },
    backgroundImage: {
      "pattern-desktop": "url('/pattern-background-desktop.svg')",
      "pattern-mobile": "url('/pattern-background-mobile.svg')",
    },
  },
  plugins: [],
};
