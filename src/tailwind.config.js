// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        soft: "0 4px 20px 8px rgba(0, 0, 0, 0.12)", 
      },
    },
  },
};
