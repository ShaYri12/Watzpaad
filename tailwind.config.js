module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure all your JSX files are included here
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#38DCC8",
        cyan: {
          500: '#38DCC8', // Your primary color
        },
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
