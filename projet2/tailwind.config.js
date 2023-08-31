/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bleuGris: "rgb(179,188,195)",
        bleuFond : "rgb(229,231,236)",
      },
    },
  },
  plugins: [],
};
