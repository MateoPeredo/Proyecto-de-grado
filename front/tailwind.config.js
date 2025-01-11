/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#E30613",
        secondary: "#D8D9D8",
        tertiary: "#000",
      },
    },
  },
  plugins: [],
};
