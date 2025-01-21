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
        secondary: "#F5F4F4",
        tertiary: "#000",
      },
    },
  },
  plugins: [],
};
