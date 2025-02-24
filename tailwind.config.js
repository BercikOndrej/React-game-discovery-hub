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
        // gray: {
        //   50: '#F7FAFC',
        //   100: '#EDF2F7',
        //   200: '#E2E8F0',
        //   300: '#CBD5E0',
        //   400: '#A0AEC0',
        //   500: '#718096',
        //   600: '#4A5568',
        //   700: '#2D3748',
        //   800: '#1A202C',
        //   900: '#171923',
        // },
        gray: {
          50: '#f9f9f9',
          100: '#ededed',
          200: '#d3d3d3',
          300: '#b3b3b3',
          400: '#a0a0a0',
          500: '#898989',
          600: '#6c6c6C',
          700: '#202020',
          800: '#121212',
          900: '#151515',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
