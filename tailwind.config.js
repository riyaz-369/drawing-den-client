/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        stylish: ["Shadows Into Light", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
