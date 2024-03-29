/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  daisyui: {
    themes: ["lemonade"],
  },
};
