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
      },
    },
  },
  plugins: [],
};
