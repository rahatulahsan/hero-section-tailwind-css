/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',,
    "./src/**/*.{html,js}",
    "'*.{html,js}'"
  ],
  theme: {
    fontFamily: {
      serif: ['Crimson Text', 'serif'],
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors:{
        herocolor: "#92003B",
        herolights: "#ff7be5"
      },
    },
  },
  plugins: [],
}

