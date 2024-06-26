/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        9999: 9999,
      },
      colors: {
        navy: "#001F3F",
        coral: "#FF7F50",
        turquoise: "#40E0D0",
      },
    },
  },
  plugins: [],
};
