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
            backdrop: "rgba(30, 30, 30, 0.3)",
        },
        fontFamily: {
            outfit: ["Outfit", "sans-serif"],
        },
        extend: {
            gridTemplateColumns: {
                mobile: "repeat(auto-fill, minmax(164px, 1fr))",
                // mobile: "repeat(auto-fit, minmax(164px, 1fr))",
                tablet: "repeat(3, 1fr)",
                desktop: "repeat(4, 1fr)",
            },
            screens: {
                tall: { raw: "(min-width: 300px) and (max-width: 374px)" },
                "stop-fixed-nav": { raw: "(max-width: 31279px)" },
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
