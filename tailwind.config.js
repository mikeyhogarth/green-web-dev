module.exports = {
  important: true,
  purge: [
    "./styles/**/*.{css}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
      colors: {
        black: "#212121",
        white: "#FDFDFD",
        primary: "#2E7D32",
        secondary: "#E8F5E9",
        highlight: "#4CAF50",
      },
      fontSize: {
        base: ["1.1em", { lineHeight: "1.8em" }],
      },
      fontFamily: {
        typewriter: ["Courier New", "Courier", "monospace"],
      },
    },
  },
};
