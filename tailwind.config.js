const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#000C04',
        secondary: '#031D0C',
      },
    },
  },
  plugins: [],
});
