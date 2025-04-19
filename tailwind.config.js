/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this path matches your project
  ],
  theme: {
    extend: {
      backdropBlur: {
        sm: '4px', // Customize the level of blur
        DEFAULT: '10px', // Default blur
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'], // or 'Poppins'
      },
    },
  },
  plugins: [],
}
