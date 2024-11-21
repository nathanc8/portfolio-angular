/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        merlot: {
          50: "#f6e7e7",
          100: "#eed0d0",
          200: "#dda1a1",
          300: "#cb7171",
          400: "#ba4242",
          500: "#a91313",
          600: "#870f0f",
          700: "#650b0b",
          800: "#440808",
          900: "#220404",
        },
        brown: {
          50: "#f5ede8",
          100: "#ebdbd0",
          200: "#d7b7a1",
          300: "#c29473",
          400: "#ae7044",
          500: "#9a4c15",
          600: "#7b3d11",
          700: "#5c2e0d",
          800: "#3e1e08",
          900: "#1f0f04",
        },
      },
    },
  },
  plugins: [],
};
