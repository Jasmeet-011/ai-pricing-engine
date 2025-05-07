module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures it includes JS/JSX/TS/TSX files
  ],
  theme: {
    extend: {
      colors: {
        accent: "#4F86C6", // Accent color
        darkBg: "#1F1F1F", // Dark background color
        lightBg: "#FFFFFF", // Light background color
        primaryText: "#FFFFFF", // Primary text color
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"], // Font family
      },
    },
  },
  plugins: [],
};
