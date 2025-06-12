// filepath: c:\Users\mertg\OneDrive\Masaüstü\blockchain_bootcamp\stacks-dapp-project\frontend\tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // or 'class' if you want to toggle manually
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#67e8f9', // cyan-300
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0e7490', // cyan-700
        },
        secondary: {
          light: '#f0abfc', // fuchsia-300
          DEFAULT: '#d946ef', // fuchsia-500
          dark: '#a21caf', // fuchsia-700
        },
        neutral: {
          lightest: '#f8fafc', // slate-50
          light: '#f1f5f9',   // slate-100
          DEFAULT: '#64748b', // slate-500
          dark: '#334155',    // slate-700
          darkest: '#0f172a', // slate-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  plugins: [],
};