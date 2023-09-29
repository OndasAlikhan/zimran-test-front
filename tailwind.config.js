/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fromRight: {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fromLeft: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        fromRight: "fromRight 0.2s linear 1",
        fromLeft: "fromLeft 0.2s linear 1",
      },
    },
  },
  plugins: [],
};
