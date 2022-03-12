module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        wayfastGreen: "#208679",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
