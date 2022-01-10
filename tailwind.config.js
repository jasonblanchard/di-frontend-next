module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryText': '#111827',
        'primaryTextDark': '#9ca3af',
        'primary': '#3b82f6',
        'primaryFocus': '#1d4ed8',
        'warning': '#facc15',
        'warningFocus': '#ca8a04',
        'danger': '#dc2626',
        'dangerFocus': '#991b1b',
        'darkModeBackground': '#111827',
      }
    },
  },
  plugins: [],
}