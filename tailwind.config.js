/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A2E3A',
          DEFAULT: '#103D4D',
          mid: '#1B5A6E',
          light: '#E8F1F3',
        },
        accent: {
          DEFAULT: '#0EA5E9',
          hover: '#0284C7',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          400: '#A1A1AA',
          600: '#52525B',
          800: '#27272A',
          900: '#18181B',
        },
      },
      fontFamily: {
        display: ['Manrope', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};