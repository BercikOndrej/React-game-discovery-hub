/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        gray: {
          50: '#f9f9f9',
          100: '#ededed',
          200: '#d3d3d3',
          300: '#b3b3b3',
          400: '#a0a0a0',
          500: '#898989',
          600: '#6c6c6C',
          700: '#1d1d1d',
          800: '#151515',
          900: '#121212',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
