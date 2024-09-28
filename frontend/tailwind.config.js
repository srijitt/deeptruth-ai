/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#c85bf0",
        layer: "#303030"
      },
      fontFamily: {
        pthin: ['Roboto-Thin', "sans-serif"],
        pextralight: ["Roboto-ExtraLight", "sans-serif"],
        plight: ["Roboto-Light", "sans-serif"],
        pregular: ["Roboto-Regular", "sans-serif"],
        pmedium: ["Roboto-Medium", "sans-serif"],
        psemibold: ["Roboto-SemiBold", "sans-serif"],
        pbold: ["Roboto-Bold", "sans-serif"],
        pextrabold: ["Roboto-ExtraBold", "sans-serif"],
        pblack: ["Roboto-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

