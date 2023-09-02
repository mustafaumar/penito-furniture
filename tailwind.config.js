/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "380px",
      md: "800px",
      lg: "1000px",
      "2xl": "1440px",
    },
    fontSize: {
      sm: "0.5rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
      "7xl": "2.75rem",
      "8xl": "3rem",
    },
    extend: {
      fontFamily: {
        body: ["Montserrat"],
      },
      colors: {
        clr1: "#122025",
        clr2: "#58666B",
        clr3: "#F2C229",
        clr4: "#1C2A2F",
        clr5: "#1FB890",
        clr6: "#F8FBFB",
      },
      boxShadow: {
        "3xl": "0px 4px 16px 0px rgba(14, 191, 221, 0.20);",
      },
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
};

