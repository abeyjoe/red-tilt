/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        redTheme: {
          50: '#ffe5e5',
          100: '#f9cccc',
          200: '#f29999',
          500: '#e63946',
          700: '#b71e24',
          900: '#7a1216',
        },
        blueTheme: {
          50: '#e5f4ff',
          100: '#cce9ff',
          200: '#99d4ff',
          500: '#0077cc',
          700: '#005599',
          900: '#003366',
        },
        greenTheme: {
          50: '#e8ffe5',
          100: '#c8f9cc',
          200: '#a3f299',
          500: '#39e639',
          700: '#2ab71e',
          900: '#1c7a12',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
