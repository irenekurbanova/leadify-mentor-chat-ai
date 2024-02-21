/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "first-custom": "#0f0c29",
        // "second-custom": "#302b63",
        // "third-custom": "#24243e",
        "first-custom": "#0F2027",
        "second-custom": "#203A43",
        "third-custom": "#2C5364",
        // "first-custom": "#004e92",
        // "second-custom": "#000428",
      },
      backgroundImage: {
        "main-bg": "url('/public/background.svg')",
      },
    },
  },
  plugins: [],
};
