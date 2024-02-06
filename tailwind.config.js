/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#605BFF",
        secondary: "#858585",
        'link-primary': '#346BD4',
      },
    },
  },
  plugins: [],
};
