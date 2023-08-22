/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: "Inter",
    },
    extend: {
      colors: {
        primary: "#1B5B31",
        primaryHover: "#174E29",
        primaryActive: "#113A1F",
        secondary: "#DCC1AB",
        secondaryHover: "#D4B39A",
        secondaryActive: "#CEA88B",
        lightGrey: "#F5F0EC",
        fontColor: "#111111",
      },
      fontFamily: {
        headingFont: "Montserrat",
      },
      height: {
        screen: "100dvh",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
