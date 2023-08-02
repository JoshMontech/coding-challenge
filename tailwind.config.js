/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
    return ({ opacityValue }) =>
        opacityValue
            ? `rgba(var(--${variable}), ${opacityValue})`
            : `rgb(var(--${variable}))`
}

const textColor = {
    primary: generateColorClass("text-primary"),
    secondary: generateColorClass("text-secondary"),
    tertiary: generateColorClass("text-tertiary"),
    quaternary: generateColorClass("text-quaternary"),
    accent: generateColorClass("text-accent"),
}

const backgroundColor = {
    primary: generateColorClass("bg-primary"),
    secondary: generateColorClass("bg-secondary"),
    tertiary: generateColorClass("bg-tertiary"),
    quaternary: generateColorClass("bg-quaternary"),
    accent: generateColorClass("bg-accent"),
}

const borderColor = {
    primary: generateColorClass("bg-primary"),
    secondary: generateColorClass("bg-secondary"),
    tertiary: generateColorClass("bg-tertiary"),
    accent: generateColorClass("bg-accent"),
}

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "500px",
            md: "768px",
            lg: "1080px",
            max: "1280px",
        },
        extend: {
            textColor,
            backgroundColor,
            borderColor,
        },
    },
    plugins: [],
}
