/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./stories/**/*.{js,jsx,ts,tsx}'],
  // purge: ['./stories/**/*.{js,jsx,ts,tsx}'],

  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};