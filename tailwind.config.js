/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('../assets/images/bg.png')",
      },
    },
  },
  plugins: [],
};
