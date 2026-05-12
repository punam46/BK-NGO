/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#1e3a1e',
        'terracotta': '#e07a5f',
        'amber-gold': '#f2cc8f',
        'sage': '#81b29a',
        'ivory': '#faf8f2',
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'serif'],
        'body': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
