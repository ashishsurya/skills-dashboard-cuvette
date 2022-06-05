module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'DM Sans', sans-serif",
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '' },
        },
      },
      animation: {
        progress: 'progress 1500ms forwards',
      },
    },
  },
  plugins: [],
};
