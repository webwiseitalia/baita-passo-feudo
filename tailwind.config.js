/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf6f1',
          100: '#f0e6d6',
          200: '#e0ccad',
          300: '#cba87a',
          400: '#b8884f',
          500: '#a57036',
          600: '#8b5a2b',
          700: '#6e4522',
          800: '#5a3820',
          900: '#4a2f1c',
        },
        winter: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcddff',
          300: '#8ec8ff',
          400: '#59aaff',
          500: '#3388ff',
          600: '#1a6af5',
          700: '#1355e1',
          800: '#1645b6',
          900: '#183d8f',
        },
        summer: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        alpine: {
          red: '#c41e3a',
          redDark: '#a01830',
          cream: '#faf6f1',
          dark: '#2c1810',
          gold: '#d4a853',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
