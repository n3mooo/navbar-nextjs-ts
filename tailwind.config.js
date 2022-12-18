/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 12px 20px rgba(0,0,0,0.05)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
