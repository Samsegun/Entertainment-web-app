module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            "red-shade": "#FC4747",
            "red-faded": "#ff7e7e",
            "very-dark-blue": "#10141E",
            "light-blue": "#5A698F",
            "dark-blue": "#161D2F",
            bookmark: "#8c9fd063",
            white: "#FFFFFF",
            "faded-white": "#ffffff73",
            "transparent-white": "#ffffff16",
            disabled: "#353639b3",
            transparent: "transparent",
        },
        fontFamily: {
            outfit: ["Outfit", "sans-serif"],
        },
        extend: {
            gridTemplateColumns: {
                mobile: "repeat(auto-fit, minmax(164px, 1fr))",
                tablet: "repeat(3, 1fr)",
                desktop: "repeat(4, 1fr)",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
