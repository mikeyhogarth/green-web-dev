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
      colors: {
        primary: "#2E7D32",
        secondary: "#A5D6A7",
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
