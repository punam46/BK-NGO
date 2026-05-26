// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",  // ← added html
    "./src/**/*.css",                    // ← added css
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
  safelist: [
    // Protect classes used on Contact & Donate button
    'donate-btn',
    'nav-item',
    'nav-menu',
    'header',
    'header-right',
    'desktop-only',
    'logo-container',
    'header-left',
  ],
}