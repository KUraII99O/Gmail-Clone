module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f7f8fc",
          100: "#f2f5fc",
          300: "#e0e0e0",
          400: "#bdbdbd",
          600: "#6d6e70",
          800: "#4f4f4f",
          "800_02": "#404144",
          "100_01": "#f3f3f5",
          "600_01": "#757575",
        },
        blue: { 50: "#d3e3fd", "50_01": "#eaf1fb", A400: "#2f80ed" },
        blue_gray: { 400: "#818488", 900: "#313234", "900_01": "#333333" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {},
      fontFamily: { roboto: "Roboto", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
