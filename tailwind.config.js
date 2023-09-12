/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#f8fbfa",
        background: "#0c1714",
        primary: "#5f539d",
        secondary: "#1e1015",
        accent: "#97a456",
      },
    },
  },
  plugins: [],
};
