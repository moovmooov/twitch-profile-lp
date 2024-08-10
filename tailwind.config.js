import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
        title: ["Cal Sans"],
      },
      colors: {
        "light-gray": "#FDFDFD",
        "medium-gray": "#9C9C9C",
        "dark-gray": "#2C2C2D",
        "almost-black": "#0D0D0E",
        "off-white": "#F5F5FF",
        black: "#09090A",
        purple: "#9747FF",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(#03AD00, #0FC10C)",
        "gradient-dark": "linear-gradient(#09090A, #09090A00 0%)",
        "gradient-blue": "linear-gradient(#208BEE, #329CFF)",
        "gradient-purple": "linear-gradient(#AA58FF, #7A2DDD)",
        "gradient-orange": "linear-gradient(#FF470F, #FF6330)",
      },
    },
  },
  plugins: [],
};
