module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure all your JSX files are included here
  ],
  theme: {
    extend: {
      keyframes: {
        animate1: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        animate2: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        animate3: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        animate4: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        animate1: "animate1 2s linear infinite",
        animate2: "animate2 2s linear infinite 1s",
        animate3: "animate3 2s linear infinite",
        animate4: "animate4 2s linear infinite 1s",
      },
    },
  },
  plugins: [],
};
