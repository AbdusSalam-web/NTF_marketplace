/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1300px",
      md: "974px",
      sm: "375px",
    },
    fontFamily: {
      spaceMono: ["Space Mono", "monospace"],
      workSans: ["Work Sans", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: "#2B2B2B",
      },
    },
  },
  plugins: [],
};
