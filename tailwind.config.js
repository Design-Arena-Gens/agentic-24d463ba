/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        halloween: {
          orange: "#FF7A00",
          purple: "#7B2CBF",
          green: "#00FFB2",
          black: "#0B0B0B",
        },
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 10px rgba(255, 122, 0, 0.7), 0 0 20px rgba(123, 44, 191, 0.6)",
      },
      backgroundImage: {
        candy: "radial-gradient(circle at 20% 20%, rgba(255,122,0,0.25), transparent 40%), radial-gradient(circle at 80% 10%, rgba(0,255,178,0.2), transparent 40%), radial-gradient(circle at 50% 80%, rgba(123,44,191,0.25), transparent 40%)",
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 8px #FF7A00, 0 0 16px #7B2CBF' },
          '50%': { textShadow: '0 0 12px #00FFB2, 0 0 24px #7B2CBF' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite',
        floaty: 'floaty 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
