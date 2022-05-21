module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "red-shade": "#FC4747",
      "very-dark-blue": "#10141E",
      "light-blue": "#5A698F",
      "dark-blue": "#161D2F",
      bookmark: "#8c9fd063",
      white: "#FFFFFF",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(164px, 1fr))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
